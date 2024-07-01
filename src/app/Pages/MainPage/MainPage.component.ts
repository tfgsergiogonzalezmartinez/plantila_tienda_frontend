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
    this.getTodosProductos();
  }

  getService(){
    return this.mainService;
  }

  toggleFiltros(){
    this.mostrarFiltros = !this.mostrarFiltros;
  }

  getTodosProductos(){
    this.productosService.GetAll().subscribe({
      next: (data) => {
        this.productosService.setListaProductos(data);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }



  getProductosService(){
    return this.productosService;
  }


}



