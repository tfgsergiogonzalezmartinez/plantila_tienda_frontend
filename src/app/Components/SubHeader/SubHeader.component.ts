import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../../Services/Categoria/Categoria.service';
import { CategoriaDto } from '../../../../dto/Categoria/CategoriaDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-SubHeader',
  templateUrl: './SubHeader.component.html',
  styleUrls: ['./SubHeader.component.css']
})
export class SubHeaderComponent implements OnInit {
  listaCategorias : CategoriaDto[] = [];
  listaTodasCategorias : CategoriaDto[] = [];
  constructor(private categoriaService : CategoriaService, private router: Router) { }

  goTo(ruta:string){
    this.router.navigate([ruta]);
  }

  CargarCategorias(){
    this.categoriaService.GetAll().subscribe({
      next: (data) => {
        this.listaTodasCategorias = data;
        for(const cat of this.listaTodasCategorias){
          if (!cat.CategoriaPadre){
            this.listaCategorias.push(cat);
          }
        }
      for (const padre of this.listaCategorias){
          for (const hijo of this.listaTodasCategorias){
            if (hijo.CategoriaPadre == padre.Nombre){
              if (!padre.CategoriaPadre) {
                padre.SubCategorias = [];
                padre.SubCategorias!.push(hijo);
              }else{
                padre.SubCategorias!.push(hijo);
              }
            }
          }
        }
        console.log(data);
        console.log(this.listaCategorias);

      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  ngOnInit() {
    this.CargarCategorias();
  }

}
