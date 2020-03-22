import {data} from './mock'
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class ProductService{
    product = data;
    constructor(){}

    getProducts(){
        return this.product;
    }

    getProduct(id){
    return this.product.find(product => product.id == id);
    }
    removeProduct(id){
    return this.product.filter(product => product.id != id);
    }

    addProduct(product){
      const  newProduct = {id :10, ...product};
      this.product.push(newProduct);
      console.log(product);
    }
}

