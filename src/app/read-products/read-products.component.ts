import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
    @Output() show_create_product_event = new EventEmitter();
    @Output() show_read_one_product_event = new EventEmitter();
    @Output() show_update_product_event = new EventEmitter();
    @Output() show_delete_product_event = new EventEmitter();
    // initialize productService to retrieve list products in the ngOnInit()
    constructor(private productService: ProductService) { }

    // methods that we will use later
    createProduct() {

        // tell the parent component (AppComponent)
        this.show_create_product_event.emit({
            title: "Create Product"
        });
    }
    readOneProduct(id) {
        console.log(id);
        // tell the parent component (AppComponent)
        this.show_read_one_product_event.emit({
            product_id: id,
            title: "Read One Product swsw"
        });
    }
    updateProduct(id) { }
    deleteProduct(id) { }

    // Read products from API.
    ngOnInit() {
        this.productService.readProducts()
            .subscribe(products =>
                this.products = products
            );
    }

}
