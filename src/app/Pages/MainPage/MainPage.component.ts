import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MainService } from '../../../../Services/Main/Main.service';
import { Router } from '@angular/router';
import { UserService } from '../../../../Services/User/User.service';
import { ProductoService } from '../../../../Services/Producto/Producto.service';
import { ProductoDto } from '../../../../dto/Producto/ProductoDto';
import { ProductoCesta } from '../../../../Interfaces/Venta/ProductoCesta';
import { CategoriaService } from '../../../../Services/Categoria/Categoria.service';
import { CategoriaDto } from '../../../../dto/Categoria/CategoriaDto';
import { CrearProductoDto } from '../../../../dto/Producto/CrearProductoDto';

@Component({
  selector: 'app-MainPage',
  templateUrl: './MainPage.component.html',
  styleUrls: ['./MainPage.component.css']
})
export class MainPageComponent implements OnInit {
  mostrarFiltros: boolean = false;
  nuevaTalla : string = "";
  nuevoColor : string = "";
  listaNuevosColores : string[] = [];
  listaNuevasTallas : string[] = [];
  nuevoNombre : string = "";
  nuevoPrecio : number = 0;
  nuevoCategoria : string = "";
  nuevoDescripcion : string = "";
  listaCategorias : CategoriaDto[] = [];

  constructor(private mainService : MainService,private cdr : ChangeDetectorRef, private userService : UserService,private productosService : ProductoService, private categoriaService: CategoriaService, private router : Router ) { }

  ngOnInit() {
    this.getCategorias();
    this.productosService.getTodosProductos();
  }

  getCategorias(){
    this.categoriaService.GetAll().subscribe({
      next: (data) => {
        this.listaCategorias = data;
        this.cdr.detectChanges();

      },
      error: (error) => {
        console.log(error);
      }
    })
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

  crearProducto(){
    if (!this.nuevoNombre || !this.nuevoPrecio || !this.nuevoCategoria || this.listaNuevasTallas.length == 0 || this.listaNuevosColores.length == 0 ) return;
    const producto : CrearProductoDto = {
      Nombre : this.nuevoNombre,
      Precio : this.nuevoPrecio,
      Categoria : this.nuevoCategoria,
      Colores : this.listaNuevosColores,
      Tallas : this.listaNuevasTallas,
      Descripcion : this.nuevoDescripcion
    }
    this.productosService.CrearProducto(producto).subscribe({
      next: (data) => {
        console.log(data);
        this.productosService.getTodosProductos();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  addProducto(){
    if (!this.getProductosService().getTallaSeleccionada() || !this.getProductosService().getColorSeleccionado()) return;
    const ProductoCesta : ProductoCesta = {
      Producto : this.getProductosService().getProductoSeleccionado()!.Nombre,
      Talla : this.getProductosService().getTallaSeleccionada(),
      Color : this.getProductosService().getColorSeleccionado(),
      Precio : this.getProductosService().getProductoSeleccionado()!.Precio,
    }

    this.productosService.addProductoCesta(ProductoCesta);
    this.productosService.setProductoSeleccionado(null);
    this.productosService.setTallaSeleccionada("");
    this.productosService.setColorSeleccionado("");
  }

  addTalla(){
    if (!this.nuevaTalla) return;
    this.listaNuevasTallas.push(this.nuevaTalla);
    this.nuevaTalla = "";
  }

  addColor(){
    if (!this.nuevoColor) return;
    this.listaNuevosColores.push(this.nuevoColor);
    this.nuevoColor = "";
  }

  getUserService(){
    return this.userService;
  }



}



