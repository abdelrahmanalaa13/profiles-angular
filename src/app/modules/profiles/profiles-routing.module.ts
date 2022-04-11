import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { ProfilesComponent } from './components/profiles/profiles.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilesComponent,
  },
  { path: 'profile/:id', component: ProfileDetailsComponent },
  {
    path: '**',
    component: ProfilesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilesRoutingModule {}
