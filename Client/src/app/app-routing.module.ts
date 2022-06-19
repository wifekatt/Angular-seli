import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginOtpComponent } from './login/login-otp/login-otp.component';
import { LoginComponent } from './login/login/login.component';
import { VoteFrontpageComponent } from './vote/vote-frontpage/vote-frontpage.component';
import { Votelist1Component } from './vote/vote-list/votelist1/votelist1.component';
import { Votelist2Component } from './vote/vote-list/votelist2/votelist2.component';
import { Votelist3Component } from './vote/vote-list/votelist3/votelist3.component';
import { VoteSuccessComponent } from './vote/vote-success/vote-success.component';
import { VoteType1Component } from './vote/vote-type1/vote-type1.component';
import { VoteType2Component } from './vote/vote-type2/vote-type2.component';
import { VoteType3Component } from './vote/vote-type3/vote-type3.component';
import { Voteperson1Component } from './vote/voteperson/voteperson1/voteperson1.component';
import { Voteperson2Component } from './vote/voteperson/voteperson2/voteperson2.component';
import { Voteperson3Component } from './vote/voteperson/voteperson3/voteperson3.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full',},
  {path:"login", component: LoginComponent},
  {path:"loginotp", component: LoginOtpComponent},
  {path:"home", component: HomeComponent},
  {path:"votefront", component: VoteFrontpageComponent},
  {path:"vote1", component: VoteType1Component},
  {path:"vote2", component: VoteType2Component},
  {path:"vote3", component: VoteType3Component},
  {path:"votesuccess", component: VoteSuccessComponent},
  {path:"votelist1", component: Votelist1Component},
  {path:"votelist2", component: Votelist2Component},
  {path:"votelist3", component: Votelist3Component},
  {path:"voteperson1", component: Voteperson1Component},
  {path:"voteperson2", component: Voteperson2Component},
  {path:"voteperson3", component: Voteperson3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
