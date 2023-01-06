import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{

 transform(value: string, mayusculas: boolean = true) {

  const response = mayusculas ? value.toUpperCase(): value;
   return response;
 }

}
