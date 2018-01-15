import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { RegistrarVehiculosComponent } from './registrar-vehiculos.component';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ParqueaderoService } from '../parqueadero.service';
import { HttpClient,HttpHandler } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';


describe('RegistrarVehiculosComponent', () => {
  let component: RegistrarVehiculosComponent;
  let fixture: ComponentFixture<RegistrarVehiculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarVehiculosComponent ],
      providers : [ParqueaderoService,HttpClient,HttpHandler,ToastrService],
      imports: [ RouterTestingModule,ReactiveFormsModule,ToastrModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
