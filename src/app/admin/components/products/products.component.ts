import { Component, OnInit } from '@angular/core';
import { ListProduct } from 'src/app/contracts/product/list-product';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(){}
  
  ngOnInit(): void {
  }

}
