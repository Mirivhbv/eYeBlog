import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
    .btn-default { background-color: lightseagreen !important; }
    .navbar-default { background-color: lightseagreen; }
    .nav.navbar-nav { font-size: 15px; }
    #searchForm { margin-right: 100px }
    @media (max-width: 1200px) { #seachForm { display: none} }
    li > a.active { color: #F97924 !important; }
  `]
})
export class NavBarComponent  {

}
