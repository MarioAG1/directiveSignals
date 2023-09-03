import { Component } from '@angular/core';


interface MenuItem {
  tittle: string
  route: string
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    { tittle: "Contador", route: "counter" },
    { tittle: "Usuario", route: "user-info" },
    { tittle: "Mutaciones", route: "properties" },

  ]




}
