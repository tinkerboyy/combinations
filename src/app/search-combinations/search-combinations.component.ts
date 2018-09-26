import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CombinationsService } from '../combinations.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-search-combinations',
  templateUrl: './search-combinations.component.html',
  styleUrls: ['./search-combinations.component.css']
})
export class SearchCombinationsComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  combinations: Array<string>;

  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  displayedColumns: string[] = ['number'];

  constructor(private service: CombinationsService) {}

  ngOnInit() {
    this.form = new FormGroup({
      phonenumber: new FormControl('', { validators: [Validators.required] })
    });
  //  console.log(letterCombinations('7036891810'))
  }

  onSubmit() {
    this.service
      .fetchCombinations({
        number: this.form.value.phonenumber
      })
      .subscribe(
        next => {
          console.log(next.combinations);

          this.dataSource.data = next.combinations;
        },
        error => console.log(error)
      );
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
