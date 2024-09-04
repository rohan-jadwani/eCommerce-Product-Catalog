# eCommerce Categories and Products

This project demonstrates a simple eCommerce application using a public API to fetch and display product data. It features two major components: Items and Products. The application allows users to browse categories and view products within selected categories, with functionality for sorting and filtering.

## Framework Used

- **Angular:** The application is built using Angular.

## Features

- **Items Component:** Displays a list of categories fetched from the [public API](https://dummyjson.com/).
- **Products Component:** Lists products within the selected category with features to:
  - Sort products by price.
  - Filter products by rating (stars).
- **Routing:** Implemented routing for navigating between components and manual query routing for products.

## API Used

- [DummyJSON API](https://dummyjson.com/): Provides the data for categories and products.

## Components

### Items Component

- Fetches and displays a list of categories.
- Users can select a category to view products.

### Products Component

- Displays products based on the selected category.
- Features:
  - **Sort by Price:** Users can sort products in ascending or descending order.
  - **Filter by Stars:** Users can filter products based on their rating.

## Installation

To get started with this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repository.git
   
2. **Navigate to the project directory:**
    
    ```bash
    cd your-repository

3. **Install dependencies:**
    
    ```bash
    npm install

4. **Start the development server:**
    
    ```bash
    ng serve

5. **Open your browser and visit:**
    
    ```bash
     http://localhost:4200

Functionality
Category Selection: Click on any category from the Items page to view its products.
Sorting Products: Use the sort option on the Products page to arrange items by price.
Filtering Products: Filter products based on their star rating.
Contributing
Feel free to open issues or submit pull requests if you have suggestions or improvements for the project.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
DummyJSON API for providing the data.
