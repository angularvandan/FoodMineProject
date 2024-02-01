import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultButtonnComponent } from './default-buttonn.component';

describe('DefaultButtonnComponent', () => {
  let component: DefaultButtonnComponent;
  let fixture: ComponentFixture<DefaultButtonnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultButtonnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultButtonnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
