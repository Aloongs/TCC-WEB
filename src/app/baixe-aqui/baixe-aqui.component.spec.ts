import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaixeAquiComponent } from './baixe-aqui.component';

describe('BaixeAquiComponent', () => {
  let component: BaixeAquiComponent;
  let fixture: ComponentFixture<BaixeAquiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaixeAquiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaixeAquiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
