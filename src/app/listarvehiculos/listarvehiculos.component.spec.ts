import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { ListarvehiculosComponent } from './listarvehiculos.component';
import { ParqueaderoService } from '../parqueadero.service';
import { HttpClient,HttpHandler } from '@angular/common/http';

describe('ListarvehiculosComponent', () => {
  let component: ListarvehiculosComponent;
  let fixture: ComponentFixture<ListarvehiculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarvehiculosComponent ],
      providers : [ParqueaderoService,HttpClient,HttpHandler],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarvehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
