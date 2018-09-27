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

    if (trimmed === '') this.border = '5px solid #e32c28';
  }

  @Input()
  set customErrors(model) {
    const { field, value } = model;
    this.border = '';
  }
}
