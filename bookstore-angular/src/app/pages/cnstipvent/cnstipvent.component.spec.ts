import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnstipventComponent } from './cnstipvent.component';

describe('CnstipventComponent', () => {
  let component: CnstipventComponent;
  let fixture: ComponentFixture<CnstipventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CnstipventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CnstipventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
