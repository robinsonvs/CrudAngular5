import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  result: any;

  constructor(private http: HttpClient) {}

  addProduct(productName, price){
    const uri = 'http://localhost:4000/products/add';
    const obj = {
      productName: productName,
      price: price
    };
    this.http.post(uri, obj).subscribe(res => console.log('Done'));
  }

  getProducts(){
    const uri = 'http://localhost:4000/products';
    return this.http.get(uri).map(res => {
      return res;
    });
  }

  editProduct(id){
    const uri = 'http://localhost:4000/products/edit/' + id;
    return this.http.get(uri).map(res => {
      return res;
    });
  }

  updateProduct(productName, price, id){
    const uri = 'http://localhost:4000/products/update/' + id;
    const obj = {
      productName: productName,
      price: price
    };
    this.http.post(uri, obj).subscribe(res => console.log('Done'));
  }

  deleteProduct(id){
    const uri = 'http://localhost:4000/products/delete/' + id;
    return this.http.get(uri).map(res => {
      return res;
    });
  }

}
