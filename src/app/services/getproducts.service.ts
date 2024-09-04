import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, BehaviorSubject, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetproductsService {
  private productsSubject = new BehaviorSubject<any[]>([]); // BehaviorSubject to store product data
  private products: any[] = [];
  private readonly localStorageKey = 'products';

  //setting the items into local storage
  constructor() {
    const storedProducts = localStorage.getItem(this.localStorageKey);
    if (storedProducts) {
      this.products = JSON.parse(storedProducts);
      this.productsSubject.next(this.products);
    }
  }

  // processing data by fetching products based on category
  processData(category: string) {
    return from(
      axios.get(`https://dummyjson.com/products/category/${category}`).then((response) => {
        this.products = response.data.products;
        console.log('Data fetched:', this.products);
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.products));
        this.productsSubject.next(this.products); // Updating the BehaviorSubject with the fetched data
        return this.products;
      })
    );
  }

  fetchData(): Observable<any[]> {
    return this.productsSubject.asObservable(); // Returning the updated data product as observable
  }
}
