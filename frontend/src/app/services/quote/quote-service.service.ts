import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from 'src/app/model/quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private quoteUrl: string;

  constructor(private http: HttpClient) {
    this.quoteUrl = 'http://localhost:8080/quote';
  }

  public findAll(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.quoteUrl);
  }
}
