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
  listaProductos : ProductoDto[] = [];
  constructor(private mainService : MainService, private userService : UserService,private productosService : ProductoService, private router : Router ) { }

  ngOnInit() {
    // if (!this.userService.isLogin())
    // {
    //   this.router.navigate(['login']);
    // }
  }

  getService(){
    return this.mainService;
  }

  toggleFiltros(){
    this.mostrarFiltros = !this.mostrarFiltros;
  }

  activarFiltrarAsc(){
    if (!this.productosService.getCatergoriaActiva()){
      this.filtrarPrecioAsc();
    }else{
      this.filtrarPrecioAscCategoria(this.productosService.getCatergoriaActiva());
    }



  }

  activarFiltrarDesc(){
    if (!this.productosService.getCatergoriaActiva()){
      this.filtrarPrecioDesc();
    }else{
      this.filtrarPrecioDescCategoria(this.productosService.getCatergoriaActiva());
    }
  }

  filtrarPrecioAsc(){
    this.productosService.GetProductosFilterPrecioAsc().subscribe({
      next: (data) => {
        this.listaProductos = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  filtrarPrecioDesc(){
    this.productosService.GetProductosFilterPrecioDesc().subscribe({
      next: (data) => {
        this.listaProductos = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  filtrarPrecioAscCategoria(categoriaId : string){
    this.productosService.GetProductosByCategoriaFilterPrecioAsc(categoriaId).subscribe({
      next: (data) => {
        this.listaProductos = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  filtrarPrecioDescCategoria(categoriaId : string){
    this.productosService.GetProductosByCategoriaFilterPrecioDesc(categoriaId).subscribe({
      next: (data) => {
        this.listaProductos = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}



