import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Divisions } from '../model/divisions.model';

const baseUrl = 'https://spa-api.aqiladigital.com/api/divisions'
@Injectable({
  providedIn: 'root'
})
export class DivisionsService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Divisions[]>{
    return this.http.get<Divisions[]>(baseUrl);
  }
}