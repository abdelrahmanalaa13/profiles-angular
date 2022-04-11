import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfilesComponent } from './components/profiles/profiles.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilesComponent,
  },
  { path: 'profile/:id', component: ProfileComponent },
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
