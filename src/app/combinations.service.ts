import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CombinationsService {
  constructor(private http: HttpClient) {}

  fetchCombinations({ number }) {
    return this.http.get(
      `http://localhost:3000/api/newCombinations?number=${number}`
    );
  }
}
