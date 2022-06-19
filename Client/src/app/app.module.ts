import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PdfViewerModule } from 'ng2-pdf-viewer';


import { HomeComponent } from './home/home.component';
import { VoteType1Component } from './vote/vote-type1/vote-type1.component';
import { VoteType2Component } from './vote/vote-type2/vote-type2.component';
import { VoteSuccessComponent } from './vote/vote-success/vote-success.component';
import { VoteFrontpageComponent } from './vote/vote-frontpage/vote-frontpage.component';


import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { VoteType3Component } from './vote/vote-type3/vote-type3.component';
import { LoginOtpComponent } from './login/login-otp/login-otp.component';
import { LoginComponent } from './login/login/login.component';
import { Voteperson1Component } from './vote/voteperson/voteperson1/voteperson1.component';
import { Voteperson2Component } from './vote/voteperson/voteperson2/voteperson2.component';
import { Voteperson3Component } from './vote/voteperson/voteperson3/voteperson3.component';
import { Votelist1Component } from './vote/vote-list/votelist1/votelist1.component';
import { Votelist2Component } from './vote/vote-list/votelist2/votelist2.component';
import { Votelist3Component } from './vote/vote-list/votelist3/votelist3.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VoteType1Component,
    VoteType2Component,
    VoteSuccessComponent,
    VoteFrontpageComponent,
    VoteType3Component,
    LoginOtpComponent,
    LoginComponent,
    Voteperson1Component,
    Voteperson2Component,
    Voteperson3Component,
    Votelist1Component,
    Votelist2Component,
    Votelist3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    PdfViewerModule,

     // * MATERIAL IMPORTS

     MatMenuModule,
     MatIconModule,
     MatDividerModule,
     MatListModule,
     MatButtonModule,
     MatDialogModule,
     MatFormFieldModule,
     MatInputModule,
     MatSelectModule,
     MatDatepickerModule,
     MatNativeDateModule,
     MatTableModule,
     MatPaginatorModule,
     MatSortModule,
     MatButtonToggleModule,
     MatCardModule,
     MatGridListModule,
     MatToolbarModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatTableModule]
})
export class AppModule { }
