import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLabelComponent } from './header-label.component';

describe('HeaderLabelComponent', () => {
  let component: HeaderLabelComponent;
  let fixture: ComponentFixture<HeaderLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderLabelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
