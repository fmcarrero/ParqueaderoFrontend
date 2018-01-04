import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParqueaderoService } from '../parqueadero.service';
import { Estacionamiento } from '../../entidades/estacionamiento';
import { ToastrService } from 'ngx-toastr';
import { TipoVehiculoEnum } from '../../utilEnum/tipovehiculoenum';

@Component({
  selector: 'app-salidavehiculos',
  templateUrl: './salidavehiculos.component.html',
  styleUrls: ['./salidavehiculos.component.css']
})
export class SalidavehiculosComponent implements OnInit {

  constructor(private route: ActivatedRoute,private parqueaderoservice : ParqueaderoService,private toastr: ToastrService) { }
  id: string;
  TipoVehiculoEnum = TipoVehiculoEnum;
  estacionamiento : Estacionamiento;
  valorpagar : string;
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
        console.log(data);
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
            this.estacionamiento = data.body
       },
          err => {
            console.error(err);
            this.toastr.error(err.error.message);
        }
      );
  }
}
