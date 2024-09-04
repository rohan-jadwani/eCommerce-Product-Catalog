import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.css'
})
export class PreloaderComponent implements OnInit{
    constructor() {}
    isLoading:boolean = true

    ngOnInit(): void {
      setTimeout(() => {
        this.isLoading = false;
      }, 1500); // delay
    }
}
