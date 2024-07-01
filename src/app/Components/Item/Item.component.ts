import { Component, Input, OnInit } from '@angular/core';
import { Enviroment } from '../../../../Enviroment';
import { ProductoDto } from '../../../../dto/Producto/ProductoDto';

@Component({
  selector: 'app-Item',
  templateUrl: './Item.component.html',
  styleUrls: ['./Item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() Producto!: ProductoDto;
  @Input() FirstFoto: string = "https://via.placeholder.com/200x200";
  Moneda : string = Enviroment.PAGE_MONEDA;



  constructor() { }

  ngOnInit() {
  }

}
