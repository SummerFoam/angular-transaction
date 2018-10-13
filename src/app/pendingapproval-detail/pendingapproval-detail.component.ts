import { Component, OnInit,Input } from '@angular/core';

import {Transaction} from '../transaction';
import {TransactionService} from '../transaction.service';

import { ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pendingapproval-detail',
  templateUrl: './pendingapproval-detail.component.html',
  styleUrls: ['./pendingapproval-detail.component.css']
})
export class PendingapprovalDetailComponent implements OnInit {
  @Input() transaction:Transaction
  constructor(
    private router:Router,
    private route: ActivatedRoute,//保存着到这个 HeroDetailComponent 实例的路由信息
    private transactionService: TransactionService,//从远端服务器获取英雄数据
    private location: Location //是一个 Angular 的服务，用来与浏览器打交道,导航回上一个视图
  ) { }

  ngOnInit() {
    this.getPendingApproval();
  }
  getPendingApproval(): void{
    const id=+this.route.snapshot.paramMap.get('id');
    this.transactionService.getPendingApprovalById(id)
    .subscribe(transaction => this.transaction = transaction);
  }

  //返回
  decline(): void{
    this.location.back();
  }

  //同意
  approve(): void{
    this.transactionService.updateTransaction(this.transaction)
       .subscribe( (res) => {
        this.router.navigate(['/approve'])})
       
  }
}
