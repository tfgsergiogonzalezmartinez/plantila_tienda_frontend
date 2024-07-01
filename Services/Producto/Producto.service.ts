import { Injectable } from '@angular/core';
import { BaseService } from '../Base.service';
import { HttpClient } from '@angular/common/http';
import { ProductoDto } from '../../dto/Producto/ProductoDto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService extends BaseService {
  private CategoriaActiva! : string;
  private listaProductos : ProductoDto[] = [];
  constructor(httpClient : HttpClient) {
    super(httpClient);
    this.controller = 'Producto';
  }
  GetProductos(){
    return this.httpClient.get<ProductoDto[]>(this.apiIp + this.controller , {headers: this.getHeaders()});
  }

  GetProductosByCategoria(categoriaId : string){
    return this.httpClient.get<ProductoDto[]>(this.apiIp + this.controller + '/categoria/'+ categoriaId , {headers: this.getHeaders()});
  }
  GetProductosByCategoriaFilterPrecioAsc(categoriaId : string){
    return this.httpClient.get<ProductoDto[]>(this.apiIp + this.controller + '/categoria/'+ categoriaId +'/precio/asc' , {headers: this.getHeaders()});
  }
  GetProductosByCategoriaFilterPrecioDesc(categoriaId : string){
    return this.httpClient.get<ProductoDto[]>(this.apiIp + this.controller + '/categoria/'+ categoriaId +'/precio/desc' , {headers: this.getHeaders()});
  }
  GetProductosFilterPrecioAsc(){
    return this.httpClient.get<ProductoDto[]>(this.apiIp + this.controller + '/precio/asc' , {headers: this.getHeaders()});
  }
  GetProductosFilterPrecioDesc(){
    return this.httpClient.get<ProductoDto[]>(this.apiIp + this.controller + '/precio/desc' , {headers: this.getHeaders()});
  }

  getCatergoriaActiva(){
    return this.CategoriaActiva;
  }
  setCategoriaActiva(categoria : string){
    this.CategoriaActiva = categoria;
    this.GetProductosByCategoria(categoria).subscribe({
      next: (data) => {
        this.setListaProductos(data);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  getListaProductos(){
    return this.listaProductos;
  }

  setListaProductos(lista : ProductoDto[]){
    this.listaProductos = lista;
  }

  filtrarPrecioAsc(){
    this.GetProductosFilterPrecioAsc().subscribe({
      next: (data) => {
        this.setListaProductos(data);

      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  setCategoria(categoria : string){
    this.CategoriaActiva = categoria;
  }
  filtrarPrecioDesc(){
    this.GetProductosFilterPrecioDesc().subscribe({
      next: (data) => {
        this.setListaProductos(data);

      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  filtrarPrecioAscCategoria(categoriaId : string){
    this.GetProductosByCategoriaFilterPrecioAsc(categoriaId).subscribe({
      next: (data) => {
        this.setListaProductos(data);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  filtrarPrecioDescCategoria(categoriaId : string){
    this.GetProductosByCategoriaFilterPrecioDesc(categoriaId).subscribe({
      next: (data) => {
        this.setListaProductos(data);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  activarFiltrarAsc(){
    if (!this.getCatergoriaActiva()){
      this.filtrarPrecioAsc();
    }else{
      this.filtrarPrecioAscCategoria(this.getCatergoriaActiva());
    }
  }

  activarFiltrarDesc(){
    if (!this.getCatergoriaActiva()){
      this.filtrarPrecioDesc();
    }else{
      this.filtrarPrecioDescCategoria(this.getCatergoriaActiva());
    }
  }





}
