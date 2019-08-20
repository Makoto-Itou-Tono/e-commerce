import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';
import {Cart} from '../../model/cart';
import {ProductRepositoryService} from '../../model/product-repository.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  private subscription: Subscription;
  idP;
  product = {};



  constructor(private route: ActivatedRoute, private productReposService: ProductRepositoryService) {


  }

  Cargar(){
    this.product = '';
    this.product = this.productReposService.getProducts().find(p=> p.productCode == this.idP);
   // console.log(this.product)
    //console.log(this.product)
  }

  ngOnInit() {
    this.productReposService.Inicail().then(p=>{
      this.route.params.subscribe((params: Params)=>{
        this.idP = params['id'];
      });
      this.Cargar();
    }).catch(e=>console.log(e));

  }
}
