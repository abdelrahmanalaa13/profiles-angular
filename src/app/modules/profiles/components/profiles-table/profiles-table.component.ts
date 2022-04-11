import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../../models/profile';
import { ProfilesBackendService } from '../../services/profiles-backend.service';

@Component({
  selector: 'app-profiles-table',
  templateUrl: './profiles-table.component.html',
  styleUrls: ['./profiles-table.component.scss']
})
export class ProfilesTableComponent implements OnInit {
  @Input() profilesData: Profile[] = [];
  displayedColumns: string[] = ['profilePic', 'id', 'email', 'name', 'phone', 'address', 'modified'];
  constructor() { }

  ngOnInit(): void {
  }
}
