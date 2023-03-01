import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditparcelComponent } from './editparcel.component';

describe('EditparcelComponent', () => {
  let component: EditparcelComponent;
  let fixture: ComponentFixture<EditparcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EditparcelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditparcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
