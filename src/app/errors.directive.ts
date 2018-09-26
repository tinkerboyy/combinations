import { Input } from '@angular/core';
import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[customErrors]'
})
export class ErrorsDirective {
  constructor(private element: ElementRef) {}

  @HostBinding('style.border')
  border: string;

  @HostListener('input', ['$event'])
  onkeydown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    let trimmed = input.value.replace(/\s+/g, '');
    console.log(trimmed);

    this.border = '';

    // if (/[^\d]+/.test(trimmed)) {
    //   this.border = '5px solid red';
    // }

    if (trimmed === '') this.borderBottom = '5px solid #e32c28';
  }

  @Input()
  set customErrors(model) {
    const { field, value } = model;
    this.border = '';

    // if (field === '') {
    //   this.border = '1px solid red';
    //   this.element.nativeElement.style.border = '1px solid #e32c28';
    // }
  }
}
