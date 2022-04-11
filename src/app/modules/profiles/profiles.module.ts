import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesRoutingModule } from './profiles-routing.module';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { ProfilesTableComponent } from './components/profiles-table/profiles-table.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './components/profile/profile.component';
import { QuickFactsComponent } from './components/quick-facts/quick-facts.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
@NgModule({
  declarations: [
    ProfilesComponent,
    ProfilesTableComponent,
    ProfileComponent,
    QuickFactsComponent,
    ProfileDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProfilesRoutingModule,
    SharedModule,
  ]
})
export class ProfilesModule { }
