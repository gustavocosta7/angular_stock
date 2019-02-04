import { Component } from '@angular/core';
import { EstoqueService, StockInterface } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stocks: Array<StockInterface>;
  constructor(service: EstoqueService) {
    service.load(['AAPL']).subscribe(stocks => {
      this.stocks = stocks;
    });
  }
}
