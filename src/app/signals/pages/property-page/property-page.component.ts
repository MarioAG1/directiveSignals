import { Component, OnDestroy, OnInit, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-property-page',
  templateUrl: './property-page.component.html',
  styleUrls: ['./property-page.component.css']
})
export class PropertyPageComponent implements OnDestroy, OnInit {

  public counter = signal(10)

  public user = signal<User>(
    {
      id: 1,
      email: 'george.bluth@reqres.in',
      first_name: 'George',
      last_name: 'Bluth',
      avatar: 'https://reqres.in/img/faces/1-image.jpg'
    }
  )

  public fullName = computed(() => `${this.user().first_name} ${this.user().last_name}`)

  public userChangedEffect = effect(() => {
    console.log(`${this.user().first_name} - ${this.counter()}`);
  })

  ngOnInit(): void {
    setInterval(() => {
      this.counter.update(current => current + 1)
      if (this.counter() > 15) {
        this.userChangedEffect.destroy()
      }
    }, 1000)
  }


  ngOnDestroy(): void {
    // this.userChangedEffect.destroy();
  }

  increaseBy(value: number): void {
    this.counter.update(current => current + value)
  }

  onFieldUpdated(field: keyof User, value: string) {

    // Obvia toda informacion anterior
    // this.user.set({
    //   ...this.user(),
    //   [field]: value
    // })

    // Modificacio de la informacion anterior
    this.user.update(current => {
      return {
        ...current,
        [field]: value
      }
    })

    // Cualquier modificacion dispara las actualizacion
    // this.user.mutate(current => {
    //   switch (field) {
    //     case "email":
    //       current.email = value
    //       break;
    //     case "first_name":
    //       current.first_name = value
    //       break;
    //     case "last_name":
    //       current.last_name = value
    //       break;
    //     case "id":
    //       current.id = Number(value)
    //       break;
    //   }
    // })

  }

}
