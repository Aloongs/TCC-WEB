import { Component } from '@angular/core';

@Component({
  selector: 'app-doacao-alimentos',
  templateUrl: './doacao-alimentos.component.html',
  styleUrls: ['./doacao-alimentos.component.css']
})
export class DoacaoAlimentosComponent {
  currentIndex = 0;

  items = [
    { nome: 'Arroz', img: 'assets/alimentos/arroz.png' },
    { nome: 'Feijão', img: 'assets/alimentos/feijao.png' },
    { nome: 'Macarrão', img: 'assets/alimentos/macarrao.png' },
    { nome: 'Açúcares', img: 'assets/alimentos/acucar.png' }
  ];

  prevItem() {
    this.currentIndex =
      (this.currentIndex - 1 + this.items.length) % this.items.length;
  }

  nextItem() {
    this.currentIndex =
      (this.currentIndex + 1) % this.items.length;
  }
}
