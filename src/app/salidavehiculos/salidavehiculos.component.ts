import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParqueaderoService } from '../parqueadero.service';
import { Estacionamiento } from '../../entidades/estacionamiento';
import { ToastrService } from 'ngx-toastr';
import { TipoVehiculoEnum } from '../../utilEnum/tipovehiculoenum';
import { Factura } from '../../entidades/factura';
import { DatamessageService } from '../datamessage.service';
import { cotizacion } from '../../entidades/cotizacion';

@Component({
  selector: 'app-salidavehiculos',
  templateUrl: './salidavehiculos.component.html',
  styleUrls: ['./salidavehiculos.component.css']
})
export class SalidavehiculosComponent implements OnInit {

  constructor(private route: ActivatedRoute,private parqueaderoservice : ParqueaderoService,
              private toastr: ToastrService,private router: Router,
              private datamessage: DatamessageService) { }
  id: string;
  TipoVehiculoEnum = TipoVehiculoEnum;
  estacionamiento : Estacionamiento;
  cotizacion : cotizacion;
  valorpagar : string;
  factura: Factura;
  ngOnInit() {
   this.route.params.subscribe(params => {
      this.id = params['id']; 
    });
   this.getVehiculoEstacionado(this.id);
  }
  VehiculoSalir(){
    this.parqueaderoservice.SalidaVehiculo(this.estacionamiento).subscribe(
      data => {
        this.toastr.success('salida del vehiculo correctamente');
        this.factura = data;
        this.datamessage.changeFactura(this.factura);
        let link = ['/vehiculo/factura'];
        this.router.navigate(link);
      },
      err => {
        this.toastr.error(err.error.message);
      }
    );
      console.log(this.estacionamiento);
  }
  getVehiculoEstacionado(id: string){
      this.parqueaderoservice.getVehiculoParqueado(id).subscribe(
          data =>{ 
            this.cotizacion = data.body
            this.estacionamiento = this.cotizacion.estacionamiento;
       },
          err => {
            console.error(err);
            this.toastr.error(err.error.message);
        }
      );
  }
}
