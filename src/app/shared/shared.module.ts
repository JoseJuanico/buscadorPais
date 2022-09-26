import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
//import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports:[
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
    //tambien se puede importar el mismo modulo AppRoutingModule, pero en este caso solo se necesita el routerModule
  ]
})
export class SharedModule { }
