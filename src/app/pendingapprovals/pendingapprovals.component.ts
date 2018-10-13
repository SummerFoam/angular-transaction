import { Component, OnInit } from '@angular/core';
import {Transaction} from '../transaction';
import {TransactionService} from '../transaction.service';

@Component({
  selector: 'app-pendingapprovals',
  templateUrl: './pendingapprovals.component.html',
  styleUrls: ['./pendingapprovals.component.css']
})
export class PendingapprovalsComponent implements OnInit {
  selecteTransaction: Transaction[];
  transactions: Transaction[];
  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.getPendingApprovals();
    
  }
  //查询所有pending approval
  getPendingApprovals(): void{
   this.transactionService.getPendingApprovals()
   .subscribe(transactions => this.transactions = transactions);
  }

  
}
