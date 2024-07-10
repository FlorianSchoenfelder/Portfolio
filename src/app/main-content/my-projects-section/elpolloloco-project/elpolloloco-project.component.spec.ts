import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElpollolocoProjectComponent } from './elpolloloco-project.component';

describe('ElpollolocoProjectComponent', () => {
  let component: ElpollolocoProjectComponent;
  let fixture: ComponentFixture<ElpollolocoProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElpollolocoProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElpollolocoProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
