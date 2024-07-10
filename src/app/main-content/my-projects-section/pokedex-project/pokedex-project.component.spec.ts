import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexProjectComponent } from './pokedex-project.component';

describe('PokedexProjectComponent', () => {
  let component: PokedexProjectComponent;
  let fixture: ComponentFixture<PokedexProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokedexProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokedexProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
