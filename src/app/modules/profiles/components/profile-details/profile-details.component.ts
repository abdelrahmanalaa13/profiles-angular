import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../../models/profile';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss'],
})
export class ProfileDetailsComponent implements OnInit {
  @Input() profile: Profile | null = null;
  constructor() {}

  ngOnInit(): void {}
}
