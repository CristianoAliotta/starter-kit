import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  template: `
    <nav id="nav" class="navbar navbar-expand mb-5">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand text-white" href="#"><mat-icon>child_care</mat-icon></a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active text-white"
                aria-current="page"
                [routerLink]="['/']"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-white"
                [routerLink]="['/active-posts']"
                routerLinkActive="active"
                >Posts attivi</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-white"
                [routerLink]="['/inactive-posts']"
                routerLinkActive="active"
                >Posts non attivi</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-white"
                [routerLink]="['/users']"
                routerLinkActive="active"
                >Users</a
              >
            </li>
            <li class="nav-item ">
              <a
                class="nav-link text-white"
                [routerLink]="['/login']"
                routerLinkActive="active"
                >Login</a
              >
            </li>
            <li class="nav-item ">
              <a
                class="nav-link text-white"
                [routerLink]="['/register']"
                routerLinkActive="active"
                >Register</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    #nav {
    background-color: #EC9AC0;
    } `
  ],
})
export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
