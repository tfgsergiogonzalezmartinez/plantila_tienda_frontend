import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../../Services/Main/Main.service';
import { Router } from '@angular/router';
import { UserService } from '../../../../Services/User/User.service';
import { ProductoService } from '../../../../Services/Producto/Producto.service';
import { ProductoDto } from '../../../../dto/Producto/ProductoDto';

@Component({
  selector: 'app-MainPage',
  templateUrl: './MainPage.component.html',
  styleUrls: ['./MainPage.component.css']
})
export class MainPageComponent implements OnInit {
  mostrarFiltros: boolean = false;


  constructor(private mainService : MainService, private userService : UserService,private productosService : ProductoService, private router : Router ) { }

  ngOnInit() {
    this.productosService.getTodosProductos();
  }

  getService(){
    return this.mainService;
  }

  toggleFiltros(){
    this.mostrarFiltros = !this.mostrarFiltros;
  }

  getProductosService(){
    return this.productosService;
  }

  addProducto(){
    if (!this.getProductosService().getTallaSeleccionada() || !this.getProductosService().getColorSeleccionado()) return;
    this.productosService.addProductoCesta(this.productosService.getProductoSeleccionado()!);
    this.productosService.setProductoSeleccionado(null);
  }



}



