import { Routes } from '@angular/router';

import { CandidatComponent } from '../../candidat/candidat/candidat.component';
import { CandidatListComponent } from '../../candidat-list/candidat-list/candidat-list.component';
import { UrnesComponent } from '../../urnes/urnes/urnes.component';
import { VoteComponent } from '../../vote/vote/vote.component';
import { ElecteurComponent } from '../../electeur/electeur/electeur.component';
import { AdminComponent } from '../../admin/admin/admin.component';

import { DashboardComponent } from '../../dashboard/dashboard.component';

export const AdminLayoutRoutes: Routes = [
   
    { path: 'dashboard', component: DashboardComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'candidat', component: CandidatComponent },
    { path: 'candidat-list', component: CandidatListComponent },
    { path: 'electeur', component: ElecteurComponent },
    { path: 'urnes', component: UrnesComponent },
    { path: 'vote', component: VoteComponent},
    
];
