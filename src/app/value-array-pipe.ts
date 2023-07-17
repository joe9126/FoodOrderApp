import { Pipe,PipeTransform } from "@angular/core";
@Pipe({
    name: 'objecttoArray'
})
export class ValueArrayPipe implements PipeTransform{

transform = (object: any[] = []) =>{
    return Object.values(object);
}
}
