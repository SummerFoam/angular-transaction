import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { HttpClientModule }    from '@angular/common/http';
import { HttpClient } from 'selenium-webdriver/http';

import { AppComponent } from './app.component';
import { PendingapprovalsComponent } from './pendingapprovals/pendingapprovals.component';
import { AppRoutingModule } from './app-routing.module';
import { HistoryComponent } from './history/history.component';
import { PendingapprovalDetailComponent } from './pendingapproval-detail/pendingapproval-detail.component';
import { ApproveComponent } from './approve/approve.component';

@NgModule({
  declarations: [
    AppComponent,
    PendingapprovalsComponent,
    HistoryComponent,
    PendingapprovalDetailComponent,
    ApproveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
