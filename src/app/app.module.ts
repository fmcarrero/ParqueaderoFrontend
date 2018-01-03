import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarVehiculosComponent } from './registrar-vehiculos/registrar-vehiculos.component';
import { ListarvehiculosComponent } from './listarvehiculos/listarvehiculos.component';
import { ParqueaderoService } from './parqueadero.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,  
    RegistrarVehiculosComponent,
    ListarvehiculosComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ParqueaderoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
