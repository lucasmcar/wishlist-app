import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'link'
})
export class LinkPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'link' : return 'link';

    }
    return 'Link';
  }

}
