import { Component, OnInit ,AfterViewInit ,ViewChild} from '@angular/core';

import { Factura } from '../../entidades/factura';
import { DatamessageService } from '../datamessage.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit  {
 

  factura : Factura;
  constructor(private data: DatamessageService ) {  }
   ngOnInit(): void {
    this.data.currentFactura.subscribe(facturao => this.factura = facturao);
    console.log(this.factura);
  }


}
