import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams   } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { appApiResources } from './app.constants';
import { Estacionamiento } from '../entidades/estacionamiento';
import { Vehiculo } from '../entidades/vehiculo';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { HttpResponse } from '@angular/common/http/src/response';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Access-Control-Allow-Origin': '*'})
  
};

@Injectable()
export class ParqueaderoService {

  constructor( private http: HttpClient) { }

  listAllVehiculos() :Observable<Estacionamiento[]>{
      return this.http.get<Estacionamiento[]>(appApiResources.allEstacionamiento,httpOptions);  
  } 
  agregarVehiculo(vehiculo : Vehiculo) :  Observable<Object>{
      return this.http.post<Object>(appApiResources.agregarVehiculo,vehiculo,httpOptions);
  }
  getVehiculoParqueado(id : string) : Observable<HttpResponse<Estacionamiento>>{
           return this.http.get<Estacionamiento>(`${appApiResources.buscarVehiculoEstacionado}/${id}`,
         { 
            observe: 'response' 
         } );
  }
  SalidaVehiculo(estacionamiento : Estacionamiento){
    
    return this.http.post(appApiResources.salidavehiculos,{
      "placa": estacionamiento.placa,
      "fechahorafin" : Date.now()
    },httpOptions);
  }
   
}
