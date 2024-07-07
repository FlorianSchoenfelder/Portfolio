import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AotSectionComponent } from './aot-section.component';

describe('AotSectionComponent', () => {
  let component: AotSectionComponent;
  let fixture: ComponentFixture<AotSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AotSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AotSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
