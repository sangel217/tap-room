import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  masterKegList: Keg[] = [
    new Keg('Duff Pilsner', 'Duff', 2, 4, 124),
    new Keg('Mo Better: Dark Amber', 'Moe Bar', 4, 6, 124),
    new Keg('Scotch Ale', 'Grandpa Brewery', 8, 12, 124)
  ];

  selectedKeg = null;

  editKeg(clickedKeg){
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKeg: Keg){
    this.masterKegList.push(newKeg);
  }

  sellPint(volume: Keg){
    volume.volume--;
  }
}
