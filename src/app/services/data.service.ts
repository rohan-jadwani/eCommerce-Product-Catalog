import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  private items: any[] = [];

  fetchData(): Observable<any[]> {
    // Using 'from' to convert the promise to an observable
    return from(
      axios.get('https://dummyjson.com/products/categories').then((response) => {
        // Updating the items array and return it
        this.items = response.data;
        console.log('Data fetched:', this.items);
        return this.items; // returning the fetched data
      })
    );
  }
}
