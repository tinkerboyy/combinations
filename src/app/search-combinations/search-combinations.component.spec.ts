import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCombinationsComponent } from './search-combinations.component';

describe('SearchCombinationsComponent', () => {
  let component: SearchCombinationsComponent;
  let fixture: ComponentFixture<SearchCombinationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCombinationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCombinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
