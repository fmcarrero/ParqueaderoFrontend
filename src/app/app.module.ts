import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarVehiculosComponent } from './registrar-vehiculos/registrar-vehiculos.component';
import { ListarvehiculosComponent } from './listarvehiculos/listarvehiculos.component';
import { ParqueaderoService } from './parqueadero.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SalidavehiculosComponent } from './salidavehiculos/salidavehiculos.component';



@NgModule({
  declarations: [
    AppComponent,  
    RegistrarVehiculosComponent,
    ListarvehiculosComponent,
    SalidavehiculosComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [ParqueaderoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
