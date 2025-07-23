import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoacaoAlimentosComponent } from './doacao-alimentos.component';

describe('DoacaoAlimentosComponent', () => {
  let component: DoacaoAlimentosComponent;
  let fixture: ComponentFixture<DoacaoAlimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoacaoAlimentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoacaoAlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
