import { ProductService } from './../../product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Add Product';
  angForm : FormGroup;

  constructor(private productService: ProductService, private fb: FormBuilder, private router: Router) { 
    this.createForm();
  }

  createForm(){
    this.angForm = this.fb.group({
      productName : ['', Validators.required],
      price : ['', Validators.required]
    });
  }

  addProduct(productName, price){
    this.productService.addProduct(productName, price);
    this.router.navigate(['index']);
  }

  ngOnInit() {
  }

}
