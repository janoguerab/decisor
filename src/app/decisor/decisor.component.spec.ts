import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisorComponent } from './decisor.component';

describe('DecisorComponent', () => {
  let component: DecisorComponent;
  let fixture: ComponentFixture<DecisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
