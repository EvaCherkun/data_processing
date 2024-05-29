import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entity } from '../interfaces/entity';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  url: string = "http://localhost:8081/lab1_war_exploded/hello-servlet"
  constructor(private http: HttpClient) { }

  getEntities(): Observable<Entity[]> {

    return this.http.get<Entity[]>(this.url);
}
}