import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCameraComponent } from './modal-camera.component';

describe('ModalCameraComponent', () => {
  let component: ModalCameraComponent;
  let fixture: ComponentFixture<ModalCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCameraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
