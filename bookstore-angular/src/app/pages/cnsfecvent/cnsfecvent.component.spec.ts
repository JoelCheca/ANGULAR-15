import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsfecventComponent } from './cnsfecvent.component';

describe('CnsfecventComponent', () => {
  let component: CnsfecventComponent;
  let fixture: ComponentFixture<CnsfecventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CnsfecventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CnsfecventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
