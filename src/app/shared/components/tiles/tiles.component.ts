import { Component, Input } from '@angular/core';


export interface Tiles {
Text?:string,
Image?:string,
colspan:number,
rowspan:number,
color:string,
font?:string,
weight?:string,
height?:string,
class?:string
}

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent {
  @Input() tiles:Tiles[]=[]
  @Input() cols = 1
  @Input() rowHeight = "100px"

}
