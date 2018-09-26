import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatTableModule,
  MatPaginatorModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchCombinationsComponent } from './search-combinations/search-combinations.component';
import { CombinationsService } from './combinations.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SearchCombinationsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [CombinationsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
