import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { appApiResources } from './app.constants';
import { Estacionamiento } from '../entidades/estacionamiento';
import { Vehiculo } from '../entidades/vehiculo';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
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
      return this.http.post<Object>(appApiResources.agregarVehiculo,vehiculo,httpOptions).pipe(
          catchError(this.handleError<Vehiculo>("agregar vehiculo"))
      )
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
       // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
}
