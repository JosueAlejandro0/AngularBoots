import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuseComponent } from './acuse.component';

describe('AcuseComponent', () => {
  let component: AcuseComponent;
  let fixture: ComponentFixture<AcuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
