import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUrl;
  showNavbar = false;

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((url: NavigationEnd) => {
      if (url) {
        this.currentUrl = url.url.slice(1);
      }
    });
  }

  isActive(name): boolean {
    return this.currentUrl === name;
  }

  toggleNavbar() {
    this.showNavbar = !this.showNavbar;
  }

}
