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
  productPerPage:number=5;
  selectedPage:number=1;
  totalProductCount:number;

 async getProducts()
 {
  const products:{ totalProductCount: number; products: ListProduct[]}= (await this.productService.read(this.selectedPage-1, this.productPerPage,()=>console.log("başarılı işlem"),()=>console.log("hatalı işlem")))
  
  this.products=products.products;
  this.totalProductCount=products.totalProductCount
  console.log(products.products);
  //TO DO list
 }

 get pageNumbers():number[]{
   return Array(Math.ceil
      (this.totalProductCount/this.productPerPage))
      .fill(0)
      .map((a,i)=>i+1)
      
 }

 changePage(page:number){
  this.selectedPage = page;
  this.getProducts();

 }

 async ngOnInit(){
  await this.getProducts();
  console.log(this.products);
}

}
