import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { GetproductsService } from '../../services/getproducts.service';
import { ProductsComponent } from '../products/products.component';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductsComponent], 
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  categoryData: any[] = []; // storing full category data with slugs
  selectedSlug: string = ""; // variable to store selected slugs
  isCardClicked: boolean = false;
  categoryImages: { [key: string]: string } = {
    'Beauty': 'https://via.placeholder.com/150?text=Beauty',
    'Fragrances': 'https://via.placeholder.com/150?text=Fragrances',
    'Furniture': 'https://via.placeholder.com/150?text=Furniture',
    'Groceries': 'https://via.placeholder.com/150?text=Groceries',
    'Home Decoration': 'https://via.placeholder.com/150?text=Home%20Decoration',
    'Kitchen Accessories': 'https://via.placeholder.com/150?text=Kitchen%20Accessories',
    'Laptops': 'https://via.placeholder.com/150?text=Laptops',
    'Mens Shirts': 'https://via.placeholder.com/150?text=Mens%20Shirts',
    'Mens Shoes': 'https://via.placeholder.com/150?text=Mens%20Shoes',
    'Mens Watches': 'https://via.placeholder.com/150?text=Mens%20Watches',
    'Mobile Accessories': 'https://via.placeholder.com/150?text=Mobile%20Accessories',
    'Motorcycle': 'https://via.placeholder.com/150?text=Motorcycle',
    'Skin Care': 'https://via.placeholder.com/150?text=Skin%20Care',
    'Smartphones': 'https://via.placeholder.com/150?text=Smartphones',
    'Sports Accessories': 'https://via.placeholder.com/150?text=Sports%20Accessories',
    'Sunglasses': 'https://via.placeholder.com/150?text=Sunglasses',
    'Tablets': 'https://via.placeholder.com/150?text=Tablets',
    'Tops': 'https://via.placeholder.com/150?text=Tops',
    'Vehicle': 'https://via.placeholder.com/150?text=Vehicle',
    'Womens Bags': 'https://via.placeholder.com/150?text=Womens%20Bags',
    'Womens Dresses': 'https://via.placeholder.com/150?text=Womens%20Dresses',
    'Womens Jewellery': 'https://via.placeholder.com/150?text=Womens%20Jewellery',
    'Womens Shoes': 'https://via.placeholder.com/150?text=Womens%20Shoes',
    'Womens Watches': 'https://via.placeholder.com/150?text=Womens%20Watches'
  };
  

  constructor(
    private dataService: DataService, 
    private productService: GetproductsService,
    private router: Router  // Router service
  ) {}

  ngOnInit() {
    // Subscribe to the observable returned by the service
    this.dataService.fetchData().subscribe(
      (data) => {
        this.categoryData = data;
        console.log('Fetched Category Data:', this.categoryData);
      },
      (error) => {
        console.error('Error fetching data in component:', error);
      }
    );
  }

  onCardClick(item: any) {
    this.selectedSlug = item.slug;
    this.productService.processData(this.selectedSlug); // Process data
    this.isCardClicked = true;
    this.router.navigate(['/products'], { queryParams: { category: item.name } }); // Navigate to the route with query params
  }

  getImageUrl(name: string): string {
    return this.categoryImages[name] || 'https://example.com/images/default.jpg'; // Fallback image
  }
}
