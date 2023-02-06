import { Component } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

// myIcon: string="../../assets/favicon.png";
// inf : string="mohamed ashraf elbayoumi";
 data :{myIcon:string,inf:string}={myIcon:"../../assets/favicon.png",
inf:"mohamed ashraf elbayoumi"};
}
