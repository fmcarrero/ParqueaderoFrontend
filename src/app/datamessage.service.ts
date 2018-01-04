import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Factura } from '../entidades/factura';
@Injectable()
export class DatamessageService {

  private facturaSource = new BehaviorSubject<Factura>(null);
  currentFactura = this.facturaSource.asObservable();
  constructor() { }
  changeFactura(factura: Factura) {
    this.facturaSource.next(factura)
  }

}
