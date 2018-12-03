import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-read-products',
  templateUrl: './read-products.component.html',
  styleUrls: ['./read-products.component.css']
})
export class ReadProductsComponent implements OnInit {
 // store list of products
 products: Product[];
 
 // initialize productService to retrieve list products in the ngOnInit()
 constructor(private productService: ProductService){}

 // methods that we will use later
 createProduct(){}
 readOneProduct(id){}
 updateProduct(id){}
 deleteProduct(id){}

 // Read products from API.
 ngOnInit(){
     this.productService.readProducts()
         .subscribe(products =>
             this.products=products
         );
 }

}
