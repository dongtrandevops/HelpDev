import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../../models/menu.model';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'hd-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class LeftMenuComponent implements OnInit, AfterViewInit {
  @Output() clickMenu = new EventEmitter();

  menus: Menu[];
  isDisableAnimation: boolean = true;

  constructor(
    private el: ElementRef,
    private router: Router,
    private menuService: MenuService,

  ) { }

  ngOnInit(): void {
    this.menus = this.menuService.initializeMenus();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.autoExpandParentMenuWhenRefreshPage();
    });

    setTimeout(() => {
      this.isDisableAnimation = false;
    });
  }


  autoExpandParentMenuWhenRefreshPage() {
    for (let menu of this.menus) {
      if (menu.childMenus) {
        for (let childMenu of menu.childMenus) {
          if (childMenu.routerLink === this.router.url) {
            menu.isActived = true;
            menu.isExpanded = true;
          }
        }
      }
    }
  }

  onClickParentMenu(index: number) {
    this.clickMenu.emit();
    this.removeParentActivedExpandClass();
  }

  onClickChildMenu(menu: Menu) {
    this.clickMenu.emit();
    this.removeParentActivedExpandClass();
    menu.isActived = true;
  }

  removeParentActivedExpandClass() {
    this.menus.forEach(c => c.isActived = false);
  }
}
