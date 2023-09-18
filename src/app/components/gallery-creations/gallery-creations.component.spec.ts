import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryCreationsComponent } from './gallery-creations.component';

describe('GalleryCreationsComponent', () => {
  let component: GalleryCreationsComponent;
  let fixture: ComponentFixture<GalleryCreationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryCreationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryCreationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
