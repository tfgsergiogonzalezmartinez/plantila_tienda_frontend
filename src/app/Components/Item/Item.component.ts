import { Component, Input, OnInit } from '@angular/core';
import { Enviroment } from '../../../../Enviroment';

@Component({
  selector: 'app-Item',
  templateUrl: './Item.component.html',
  styleUrls: ['./Item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() NombreProducto: string = "Nombre";
  @Input() Precio: number = 200;
  @Input() FirstFoto: string = "https://via.placeholder.com/200x200";
  Moneda : string = Enviroment.PAGE_MONEDA;



  constructor() { }

  ngOnInit() {
  }

}
