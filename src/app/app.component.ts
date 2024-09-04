import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ItemsComponent, PreloaderComponent,CommonModule, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularItems';
}
