import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { Especie } from 'src/app/especie';


@Injectable({
  providedIn: 'root'
})
export class EspeciesService {

 
    

  constructor(private http: HttpClient) { 
    console.log("Servicio funcionando")
  }

  getEspecies(): Observable<Especie[]>{
    return this.http.get<Especie[]>("http://localhost:3000/especies");
  }

  
  
}



