import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booksFilter'
})
export class BooksFilterPipe implements PipeTransform {

  transform(value: any[], args: string): any {
    return args.length > 0 ? value.filter(book => book.title.toLowerCase().indexOf(args.trim().toLowerCase()) >= 0) : value;
  }

}
