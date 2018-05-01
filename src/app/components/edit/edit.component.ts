import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../product.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  product: any;
  angForm: FormGroup;
  title: 'Edit Product';

  constructor(private route: ActivatedRoute, private router: Router, private service: ProductService, private fb: FormBuilder) { 
    this.createForm();
  }

  createForm(){
    this.angForm = this.fb.group({
      productName: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  updateProduct(productName, price){
    this.route.params.subscribe(params => {
      this.service.updateProduct(productName, price, params['id']);
      this.router.navigate(['index']);
    });
  }

  deleteProduct(id){
    this.service.deleteProduct(id).subscribe(res => {
      console.log('Deleted');
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.product = this.service.editProduct(params['id']).subscribe(res => {
        this.product = res;
      });
    });
  }

}

