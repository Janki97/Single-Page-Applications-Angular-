import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateRange'
})
export class DateRangePipe implements PipeTransform {

  transform(value: any, input: string, searchableList: any) {
    if(!value || !input)  {
        return value;
    }
    return value.filter(item =>
         item.employeeName.toLowerCase().indexOf(input) > -1 ||
         item.employeecode.toLowerCase().indexOf(input) > -1 ||
         item.salary.toString().toLowerCase().indexOf(input) > -1 
         );
    }

}
