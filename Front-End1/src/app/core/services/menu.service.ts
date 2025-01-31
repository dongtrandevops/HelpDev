import { Injectable } from '@angular/core';
import { Menu } from '../models/menu.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor() { }

  initializeMenus(): Menu[] {

    return [
      {
        name: 'Dashboard',
        routerLink: '/dashboard',
        matIcon: 'dashboard',
      },
      {
        name: 'Working',
        routerLink: '/Working',
        matIcon: 'computer'
      },
      {
        name: 'Learning',
        routerLink: '/learning',
        matIcon: 'school'
      },
      {
        name: 'Job & Company',
        routerLink: '/job-company',
        matIcon: 'paid'
      },
      {
        name: 'Crawl Data',
        matIcon: 'bug_report',
        childMenus: [
          {
            name: 'Calculate Url',
            routerLink: '/crawl/calculate-url',
          },
          {
            name: 'Root Url',
            routerLink: '/crawl/root-url',
          },
          {
            name: 'Setting Website',
            routerLink: '/crawl/setting-website',
          },
        ] as Menu[]
      },
      {
        name: 'Trading',
        matIcon: 'paid',
        childMenus: [
          {
            name: 'History',
            routerLink: '/trading/history',
          },
        ] as Menu[]
      },
      {
        name: 'Relax',
        routerLink: '/relax',
        matIcon: 'games'
      },
      {
        name: 'Test',
        matIcon: 'delete',
        childMenus: [
          {
            name: 'Something',
            routerLink: '/test/something',
          },
          {
            name: 'Responsive',
            routerLink: '/test/responsive',
          },
          {
            name: 'Change Detection',
            routerLink: '/test/change-detection',
          },
          {
            name: 'Lifecycle',
            routerLink: '/test/life-cycle',
          },
          {
            name: 'Form',
            routerLink: '/test/form',
          },
          {
            name: 'RxJs',
            routerLink: '/test/rxjs',
          },
          {
            name: 'View Encapsulation',
            routerLink: '/test/view-encapsulation',
          },
          {
            name: 'Component Style',
            routerLink: '/test/component-style',
          },
          {
            name: '',
            routerLink: '/test/bootstrap',
          },
        ] as Menu[]
      },
    ] as Menu[]
  }
}