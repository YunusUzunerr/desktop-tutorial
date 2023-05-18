import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customerPipe'
})
export class CustomerPipe implements PipeTransform {

  transform(value: any[], filterText: string): any[] {
    if (filterText == "" || filterText == null) {
      return value;
    }

    return value.filter(p=> {
      const name = p.FullName.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
      const email = p.Email.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
      const profession = p.Profession.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())

      return (name + email+profession)
    });
  }

}