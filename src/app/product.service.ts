import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IBook} from './IBook';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly API_URL = 'http://localhost:3000/books';
  shouldRefresh = new Subject<any>();
  constructor(private http: HttpClient) { }
  getAll(): Observable<any>{
    return this.http.get(this.API_URL);
  }
  delete(id: number): Observable<any>{
    return this.http.delete(this.API_URL + '/' + id);
  }
  getById(id: number): Observable<any>{
    return this.http.get(this.API_URL + '/' + id);
  }
  create(book: IBook): Observable<IBook>{
    return this.http.post<IBook>(this.API_URL, book);
  }
  update(book: IBook): Observable<IBook>{
    return this.http.put<IBook>(this.API_URL + '/' + book.id, book);
  }
}
