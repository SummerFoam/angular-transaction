import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PendingapprovalsComponent} from './pendingapprovals/pendingapprovals.component';
import{HistoryComponent} from './history/history.component';
import{PendingapprovalDetailComponent} from './pendingapproval-detail/pendingapproval-detail.component';
import {ApproveComponent} from './approve/approve.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'pendingApproval',
    pathMatch:'full'
  }, 
  //pendingApproval列表
  {
    path:'pendingApproval',
    component:PendingapprovalsComponent
  },
  //history
  {
    path:'history',
    component:HistoryComponent
  },
  //指向Pending Approval详情页面
  {
    path:'detail/:id',
    component:PendingapprovalDetailComponent
  },
  {
    path:'approve',
    component:ApproveComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
