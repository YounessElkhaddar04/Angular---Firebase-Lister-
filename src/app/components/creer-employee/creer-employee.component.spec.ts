import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerEmployeeComponent } from './creer-employee.component';

describe('CreerEmployeeComponent', () => {
  let component: CreerEmployeeComponent;
  let fixture: ComponentFixture<CreerEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreerEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
