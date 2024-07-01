import { ChangeDetectorRef, Component, Input, OnInit, input } from '@angular/core';
import { MenuDesplegable } from '../../../../Interfaces/Header/menuDesplegable';
import { Router } from '@angular/router';
import { CategoriaService } from '../../../../Services/Categoria/Categoria.service';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() MenuDesplegables : MenuDesplegable[] = [];


  constructor(private router : Router ,private cdr: ChangeDetectorRef, private categoriaService : CategoriaService ) { }

  goTo(ruta:string){
    this.router.navigate([ruta]);
  }

  ngOnInit() {
  }

}
