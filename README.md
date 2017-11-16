This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0, and will therefore run with `ng serve` in the standard way

This project is to demonstrate that when the page "my-page" has its ViewEncapsulation mode set to "Native", the sidebar fails to display. This happens in Google Chrome, both on Windows and on Mac. This page is automatically displayed when running the app.

If the ViewEncapsulation mode is either None or Emulated, the side bar is displayed, however when set to Native it is hidden. I believe this is a bug. Note the sidebar is intended to display by default.

I isolated this down to the style within the <mat-sidebar> element on the browser being set to `transform: translate3d(0px, 0px, 0px)`, overriding the css rule `transform: translate3d(-100%,0,0)` which is set for the .mat-drawer class, when ViewEncapsulation was not Native, which further reinforced my belief there is a logic error somewhere.
