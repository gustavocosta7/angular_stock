import { Component, OnInit } from '@angular/core';
import { EstoqueService, StockInterface } from '../../services';
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stocks: Array<StockInterface>;
  symbols: Array<string>;
  constructor(private service: EstoqueService) {
    this.symbols = service.get();
  }
  ngOnInit() {
    this.service.load(this.symbols).subscribe(stocks => (this.stocks = stocks));
  }
}
