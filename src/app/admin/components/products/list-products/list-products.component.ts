import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ListProduct } from 'src/app/contracts/product/list-product';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  constructor(
      private productService:ProductService
     ){}
  
  products:ListProduct[]=null;
 async getProducts()
 {

  const products:ListProduct[]= await this.productService.read(0,5,()=>console.log("başarılı işlem"),()=>console.log("hatalı işlem"));
  
  this.products=products;
  //TO DO list
 }

 async ngOnInit(){
  await this.getProducts();
  console.log(this.products);
}

}
