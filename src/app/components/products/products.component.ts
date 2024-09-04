import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetproductsService } from '../../services/getproducts.service'; // Import your product service
import { PreloaderComponent } from '../preloader/preloader.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,PreloaderComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productData: any[] = [];  // Store the fetched products
  filteredData: any[] = []; // Store filtered products
  isLoading: boolean = true; // Flag to check if data is loading
  sortOrder: string = 'asc'; // Default sort order
  selectedRatings: Set<number> = new Set(); // Store selected ratings for filtering

  constructor(private productService: GetproductsService,private router: Router ) {}

  ngOnInit() {
    // Fetch products data from the service
    this.productService.fetchData().subscribe(
      (data) => {
        this.productData = data; // assigning fetched data to productData
        this.filteredData = [...this.productData]; // intializing filteredData
        this.isLoading = false;  // changing the value after loading is completed
        console.log('Fetched Product Data:', this.productData);
      },
      (error) => {
        console.error('Error fetching products:', error);
        this.isLoading = false;  // if there is any error in fetching the data
      }
    );
  }

  onSortChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.sortOrder = selectElement.value;
    this.sortProducts();
  }

  //sorting
  sortProducts() {
    this.filteredData.sort((a, b) => {
      if (this.sortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }

  //filtering  by price
  filterByRating(rating: number) {
    if (this.selectedRatings.has(rating)) {
      this.selectedRatings.delete(rating);
    } else {
      this.selectedRatings.add(rating);
    }
    this.filteredData = this.productData.filter(product => {
      return this.selectedRatings.size === 0 || Math.floor(product.rating) >= rating;
    });
  }

  //displaying stars
  getStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  getEmptyStars(rating: number): number[] {
    const totalStars = 5;
    return Array(totalStars - Math.floor(rating)).fill(0);
  }

  goback(){
    this.router.navigate(['category']);
  }
}
