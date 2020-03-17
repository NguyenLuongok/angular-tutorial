import { Component, OnInit } from '@angular/core';
import {Product} from '../product'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  products : Product[] = [
    {
      name : 'Item 1',
      price : 25.9,
      desc : "Nội dung mô tả sản phẩm",
      status : true,
      img: "https://dummyimage.com/700x400/000000/fff"
   },
   {
    name : 'Item 2',
    price : 25.9,
    desc : "Nội dung mô tả sản phẩm",
    status : true,
    img: "https://dummyimage.com/700x400/000000/fff"
  },
  {
    name : 'Item 3',
    price : 25.9,
    desc : "Nội dung mô tả sản phẩm",
    status : true,
    img: "https://dummyimage.com/700x400/000000/fff"
  }

  ]
    

  changeStatus(){
    // this.product.status = false;
  }
  changeTitle(e){
  //  this.product = e.target.value;
  }

  // removeItem(id){
  //   this.products = this.products.filter(product => product.id != id);
  // }
}