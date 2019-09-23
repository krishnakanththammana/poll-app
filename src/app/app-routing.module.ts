import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PollingComponent } from './polling/polling.component';


const routes: Routes = [
  { path: 'poll', component: PollingComponent },
  { path: 'poll/:id',      component: PollingComponent },
  { path: '',
    redirectTo: '/poll',
    pathMatch: 'full'
  },
  { path: '**', component: PollingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
