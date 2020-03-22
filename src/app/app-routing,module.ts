import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductManagerComponent} from './product-manager/product-manager.component';
import {ServiceComponent} from './service/service.component';
import {SlideComponent} from './slide/silde.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {ProductDetailComponent} from'./product-detail/product-detail.component';
import {ProductAddComponent} from './product-add/product-add.component';



const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full'},
   {path :'home', component : HomeComponent},
   {path :'product-manager', component : ProductManagerComponent},
   {path :'product-list', component : ProductListComponent},
   {path :'about', component : AboutComponent},
   {path :'service', component : ServiceComponent},
   {path :'product-add', component : ProductAddComponent},
   {path :'product/:id', component : ProductDetailComponent},
   {path :'**', component : NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }