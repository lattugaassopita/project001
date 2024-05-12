import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleManWavingComponent } from './little-man-waving.component';

describe('LittleManWavingComponent', () => {
  let component: LittleManWavingComponent;
  let fixture: ComponentFixture<LittleManWavingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LittleManWavingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LittleManWavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
