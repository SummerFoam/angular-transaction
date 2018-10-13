import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {

  constructor( private router:Router,private location: Location) { }

  ngOnInit() {
  }
  //返回
  goBack(): void{
    this.router.navigate(['/pendingApproval']);
  }
}
