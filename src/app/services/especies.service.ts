import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { Especie } from '../especie';

@Injectable({
  providedIn: 'root'
})
export class EspeciesService {
especies: Especie[] = [];
  constructor(private http: HttpClient) { }

  getEspecies(): Observable<Especie[]>{
    return this.http.get<Especie[]>("http://localhost:4200/especies");
  }
  
}
