import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})
export class NewKegComponent {
  @Output() sendKeg = new EventEmitter();

   submitForm(name: string, brand: string, price: string, ABV: string, volume: string){
     let newKeg: Keg = new Keg(name, brand, parseInt(price), parseInt(ABV), parseInt(volume));
     this.sendKeg.emit(newKeg);
  }
}
