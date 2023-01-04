import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnspublicacionComponent } from './cnspublicacion.component';

describe('CnspublicacionComponent', () => {
  let component: CnspublicacionComponent;
  let fixture: ComponentFixture<CnspublicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CnspublicacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CnspublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
