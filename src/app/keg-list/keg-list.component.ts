import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() pintSell = new EventEmitter();

  filterByABV: string = "high abv";

  onChange(optionFromMenu){
    this.filterByABV = optionFromMenu;
  }

  editButtonClicked(kegToEdit: Keg){
    this.clickSender.emit(kegToEdit);
  }

  sellButtonClicked(pintToSell: Keg){
    this.pintSell.emit(pintToSell);
  }

}
