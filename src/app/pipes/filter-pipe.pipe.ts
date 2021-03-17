import { Pipe, PipeTransform } from '@angular/core';
import { product } from '../models/product';


@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: product[], filterText:string): product[] {
    filterText= filterText?filterText.toLocaleLowerCase():""
    return filterText?value
    .filter((p:product)=>p.productName.toLocaleLowerCase().indexOf(filterText)!==-1)
    :value;
  }

} 
