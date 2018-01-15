import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { SalidavehiculosComponent } from './salidavehiculos.component';
import { ParqueaderoService } from '../parqueadero.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { DatamessageService } from '../datamessage.service';

describe('SalidavehiculosComponent', () => {
  let component: SalidavehiculosComponent;
  let fixture: ComponentFixture<SalidavehiculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalidavehiculosComponent ],
      imports: [ RouterTestingModule ,ToastrModule.forRoot()],
      providers: [
        ParqueaderoService,
        HttpClient,
        HttpHandler,
        DatamessageService        
    ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidavehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
