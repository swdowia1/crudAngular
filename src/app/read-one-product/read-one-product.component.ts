import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-read-one-product',
  templateUrl: './read-one-product.component.html',
  styleUrls: ['./read-one-product.component.css']
})
export class ReadOneProductComponent implements OnChanges {

  /*
       @Output will tell the parent component (AppComponent)
       that an event has happened (via .emit(), see readProducts() method below)
   */
  @Output() show_read_one_product_event = new EventEmitter();
  @Output() show_update_product_event = new EventEmitter();
  @Output() show_delete_product_event = new EventEmitter();

  // @Input means it will accept value from parent component (AppComponent)
  @Input() product_id;
  @Output() show_read_products_event = new EventEmitter();
  product: Product;

  // initialize product service
  constructor(private productService: ProductService) { }

  // user clicks the 'read products' button
  readOneProduct(id) {
    console.log('rp comp readOneProduct');
    // tell the parent component (AppComponent)
    this.show_read_one_product_event.emit({
      product_id: id,
      title: "Read One Product"
    });
  }
  readProducts() {
    this.show_read_products_event.emit({ title: "Read Products" });
  }

  // call the record when 'product_id' was changed
  ngOnChanges() {
    this.productService.readOneProduct(this.product_id)
      .subscribe(product => {
        debugger;
        console.log(product);
        this.product = product;
      });
  }

}
