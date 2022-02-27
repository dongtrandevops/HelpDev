import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../../features/dashboard/dashboard.module').then(c => c.DashboardModule)
      },
      {
        path: 'working',
        loadChildren: () => import('../../features/working/working.module').then(c => c.WorkingModule)
      },
      {
        path: 'crawl/calculate-url',
        loadChildren: () => import('../../features/crawl/calculate-url/calculate-url.module').then(c => c.CalculateUrlModule)
      },
      {
        path: 'crawl/setting-website',
        loadChildren: () => import('../../features/crawl/setting-website/setting-website.module').then(c => c.SettingWebsiteModule)
      },
      {
        path: 'test/responsive',
        loadChildren: () => import('../../features/test/test-responsive/test-responsive.module').then(c => c.TestResponsiveModule)
      },
      {
        path: 'test/change-detection',
        loadChildren: () => import('../../features/test/change-detection/change-detection.module').then(c => c.ChangeDetectionModule)
      },
      {
        path: 'test/life-cycle',
        loadChildren: () => import('../../features/test/life-cycle/life-cycle.module').then(c => c.LifeCycleModule)
      },
      {
        path: 'test/view-encapsulation',
        loadChildren: () => import('../../features/test/view-encapsulation/view-encapsulation.module').then(c => c.ViewEncapsulationModule)
      },
      {
        path: 'test/component-style',
        loadChildren: () => import('../../features/test/component-style/component-style.module').then(c => c.ComponentStyleModule)
      },
      {
        path: 'test/bootstrap',
        loadChildren: () => import('../../features/test/bootstrap/bootstrap.module').then(c => c.BootstrapModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }