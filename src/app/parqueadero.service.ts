import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { appApiResources } from './app.constants';
import { Estacionamiento } from '../entidades/estacionamiento';


@Injectable()
export class ParqueaderoService {

  constructor( private http: HttpClient) { }

  listAllVehiculos() :Observable<Estacionamiento[]>{
      return this.http.get<Estacionamiento[]>(appApiResources.allEstacionamiento)
     ;  
  }  
  
}
