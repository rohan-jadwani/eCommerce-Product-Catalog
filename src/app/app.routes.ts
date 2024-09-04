import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ItemsComponent } from './components/items/items.component';

export const routes: Routes = [
  { path: '', component: ItemsComponent }, 
  { path: 'products', component: ProductsComponent },  
  { path: 'category', component: ItemsComponent },  
  { path: '**', redirectTo: '', pathMatch: 'full' }  
];
