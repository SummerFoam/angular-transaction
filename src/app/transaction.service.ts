import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import {Transaction} from './transaction';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private tracUrl="http://127.0.0.1:8080/springBootTest1/trac/0";
  private tracByStatusUrl="http://127.0.0.1:8080/springBootTest1/tracByStatus/1";
  private tracByIdUrl="http://127.0.0.1:8080/springBootTest1/tracById"
  private updatetracUrl="http://127.0.0.1:8080/springBootTest1/trac";
  constructor(private http:HttpClient) { }
  //根据status查询所有pending approval
  getPendingApprovals(): Observable<Transaction[]>{
   return this.http.get<Transaction[]>(this.tracUrl)
  }

  //查询所有history
  getHistories(): Observable<Transaction[]>{
    return this.http.get<Transaction[]>(this.tracByStatusUrl)
  }

  //根据Id查询pending approval
  getPendingApprovalById(id: number):Observable<Transaction>{
    const url=`${this.tracByIdUrl}/${id}`;
    return this.http.get<Transaction>(url)
  }

  //修改状态
  updateTransaction(transaction: Transaction): Observable<any>{
    return this.http.put(this.updatetracUrl+"/"+transaction.id,transaction)
  }

}
