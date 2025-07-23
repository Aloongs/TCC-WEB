import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoacaoRoupasComponent } from './doacao-roupas.component';

describe('DoacaoRoupasComponent', () => {
  let component: DoacaoRoupasComponent;
  let fixture: ComponentFixture<DoacaoRoupasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoacaoRoupasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoacaoRoupasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
