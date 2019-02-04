import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
/*export class AppComponent {
  stocks: Array<StockInterface>;
  constructor(service: EstoqueService) {
    service.load(['AAPL']).subscribe(stocks => {
      this.stocks = stocks;
    });
  }}*/
