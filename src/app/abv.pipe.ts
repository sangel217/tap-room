import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './models/keg.model';

@Pipe({
  name: "abv",
  pure: false
})

export class ABVPipe implements PipeTransform{
  transform(input: Keg[], desiredABV){
    var output: Keg[] = [];
    if(desiredABV === "high abv"){
      for(var i = 0; i < input.length; i++){
        if(input[i].ABV >= 6){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredABV === "low abv"){
      for(var i = 0; i < input.length; i++){
        if(input[i].ABV < 6){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
