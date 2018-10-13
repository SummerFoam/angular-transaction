import { Component, OnInit } from '@angular/core';
import {Transaction} from '../transaction';
import {TransactionService} from '../transaction.service';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  selecteTransaction: Transaction[];
  transactions: Transaction[];
  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.getHistories();
  }
   //查询所有history
   getHistories(): void{
    this.transactionService.getHistories()
    .subscribe(transactions => this.transactions =transactions);
  }
}
