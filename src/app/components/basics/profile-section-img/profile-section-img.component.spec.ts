import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSectionImgComponent } from './profile-section-img.component';

describe('ProfileSectionImgComponent', () => {
  let component: ProfileSectionImgComponent;
  let fixture: ComponentFixture<ProfileSectionImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileSectionImgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileSectionImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
