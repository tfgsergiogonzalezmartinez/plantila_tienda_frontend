import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Enviroment } from '../../../../Enviroment';
import { ProductoService } from '../../../../Services/Producto/Producto.service';

@Component({
  selector: 'app-CarritoCompras',
  templateUrl: './CarritoCompras.component.html',
  styleUrls: ['./CarritoCompras.component.css']
})
export class CarritoComprasComponent implements OnInit, AfterViewInit {
  @ViewChild('cesta') cestaRef!: ElementRef
  imgProducto = "https://via.placeholder.com/50x50";
  nombreProducto : string = "Producto";
  precioProducto : number = 200;
  Moneda : string = Enviroment.PAGE_MONEDA;

  constructor(private productosService : ProductoService) { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.productosService.setCestaRef(this.cestaRef);
  }

  getProductosService(){
    return this.productosService;
  }

}
