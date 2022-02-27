import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'hd-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  @ViewChild(MatSidenav) drawer: MatSidenav;

  isSmalDevice = false;
  constructor(private breakpointObserver: BreakpointObserver) { }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe('(max-width: 1439px)')
    .pipe(
      map(result => {
        this.isSmalDevice = result.matches
        return this.isSmalDevice
      }),
      shareReplay()
    );


  onClickOnLeftMenu() {
    if (this.isSmalDevice) {
      this.drawer.toggle();
    }
  }

}
