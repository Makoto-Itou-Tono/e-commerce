import { Component, OnInit } from '@angular/core';
import {Cart} from '../../model/cart';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   Productos;
   Total = 0;
  constructor(private cart: Cart, private route: ActivatedRoute,
              private router: Router) {
    this.Inicial();
  }

  ngOnInit() {

  }
  Inicial () {
    if (this.cart.getArray().length !== 0) {
      this.Productos = this.cart.getArray();
      this.SumaTotal();
    } else{
      this.router.navigate(['/store']);
    }
  }
  CambiarCantidad(valor,producto){
   this.cart.ModificarQuatity(producto,valor);
    this.Inicial();
  }
  EliminarProducto(Producto) {
    this.cart.deleteLine(Producto);
    this.Inicial()
  }
  SumaTotal() {
    let SubT = 0 ;
    this.Productos.forEach(o=>{
      SubT = (+SubT) + (+o.product.MSRP * o.quantity);
    });
    this.Total = SubT;
  }
}
