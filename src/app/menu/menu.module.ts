import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { MenuComponent } from './menu.component';
import { MenuToggleComponent } from './menu-toggle/menu-toggle.component';
import { SubMenuComponent } from './menu-dash/sub-menu/sub-menu.component';
import { MenuDashComponent } from './menu-dash/menu-dash.component';

@NgModule({
  declarations: [
    MenuComponent,
    MenuToggleComponent,
    MenuDashComponent,
    SubMenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    MenuComponent,
  ],
})
export class MenuModule { }
