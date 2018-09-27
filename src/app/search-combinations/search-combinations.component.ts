import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CombinationsService } from '../combinations.service';

@Component({
  selector: 'app-search-combinations',
  templateUrl: './search-combinations.component.html',
  styleUrls: ['./search-combinations.component.scss']
})
export class SearchCombinationsComponent implements OnInit {
  form: FormGroup;
  combinations: Array<{ number: string }>;

  loading = false;
  total = 0;
  page = 1;
  limit = 20;

  constructor(private service: CombinationsService) {}

  ngOnInit() {
    this.form = new FormGroup({
      phonenumber: new FormControl('', {
        validators: [Validators.required, Validators.minLength(10)]
      })
    });
  }

  onSubmit() {
    this.getCombinations();
  }

  getCombinations() {
    this.service
      .fetchCombinations({
        number: this.form.value.phonenumber,
        page: this.page,
        size: this.limit
      })
      .subscribe(
        (next: {
          data: Array<{ number: string }>;
          total: number;
          per_page: number;
          page: string;
        }) => {
          const { total, page, data } = next;
          this.combinations = data;
          this.total = total;
          this.page = Number(page);
        },
        error => console.log(error)
      );
  }

  goToPage(n: number): void {
    this.page = n;
    this.getCombinations();
  }

  onNext(): void {
    this.page++;
    this.getCombinations();
  }

  onPrev(): void {
    this.page--;
    this.getCombinations();
  }
}
