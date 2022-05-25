import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router, NavigationExtras } from '@angular/router';
import { ServiceService } from '../service.service';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0,0,0)',
        background: 'rgba(234, 234, 234, 1)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)',
        background: 'transparent'
      })),
      transition('in => out', animate('300ms ease-in-out')),
      transition('out => in', animate('300ms ease-in-out'))
    ]),
  ],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private service: ServiceService) { }
  showMenu: boolean;
  showProfile: boolean;
  searchproducto;
  menuState: string = 'out';
  nombreusuario;
  usersesion;
  isSignedIn: boolean;

  ngOnInit(): void {
    this.isSignedIn = false;
    this.showProfile = false;
    this.showMenu = false;
    this.service.userAuthState.subscribe(val => {
      this.isSignedIn = val;
      if (this.isSignedIn) {
        this.usersesion = JSON.parse(localStorage.getItem("user"));
      }
    });
  }

  search() {
    let navigationExtras: NavigationExtras = {
      queryParams: { 'q': this.searchproducto }
    };
    this.router.navigate(['/search'], navigationExtras);
    this.searchproducto = ''
  }

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  openMenu(statusMenu) {
    this.showMenu = !statusMenu;
    if (this.showMenu) {
      $('.content-wrapper').addClass('overlay');
    } else {
      $('.content-wrapper').removeClass('overlay');
    }
  }

  closeMenu() {
    this.showMenu = false;
    $('.content-wrapper').removeClass('overlay');
  }


  clickedInside($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();
  }

  @HostListener('document:click', ['$event']) clickedOutside($event) {
    if (this.showProfile) {
      this.showProfile = false;
    }
  }

  logOut() {
    this.showProfile = false;
    localStorage.clear();
    this.service.setAuthState(false);
    this.router.navigate(["/"]);
  }
}
