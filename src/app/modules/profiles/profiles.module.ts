import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesRoutingModule } from './profiles-routing.module';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ProfilesTableComponent } from './components/profiles-table/profiles-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    ProfilesComponent,
    ProfilesTableComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProfilesRoutingModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
  ]
})
export class ProfilesModule { }
