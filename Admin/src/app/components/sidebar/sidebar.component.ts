import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'home',  icon: 'home', class: '' },
    { path: '/urnes', title: 'Urnes',  icon:'dashboard', class: '' },
    { path: '/candidat-list', title: 'Candidat list',  icon:'library_books', class: '' },
    { path: '/admin', title: 'Admins',  icon:'supervisor_account', class: '' },
    { path: '/electeur', title: 'Users',  icon:'people', class: '' },
    
  ];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems!: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
