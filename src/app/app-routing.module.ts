import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarVehiculosComponent } from './registrar-vehiculos/registrar-vehiculos.component';
import { ListarvehiculosComponent } from './listarvehiculos/listarvehiculos.component';
import { SalidavehiculosComponent } from './salidavehiculos/salidavehiculos.component';
import { FacturaComponent } from './factura/factura.component';

const routes: Routes = [
    { path: '', redirectTo: '/vehiculo/listar', pathMatch: 'full' },
    { path: 'vehiculo/listar',  component: ListarvehiculosComponent },
    { path: 'vehiculo/agregar',  component: RegistrarVehiculosComponent }   ,
    { path: 'vehiculo/salida/:id', component: SalidavehiculosComponent },
    { path: 'vehiculo/factura', component: FacturaComponent },

  ];
   
  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}