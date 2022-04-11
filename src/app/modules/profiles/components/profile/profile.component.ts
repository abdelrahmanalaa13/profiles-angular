import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from '../../models/profile';
import { ProfilesBackendService } from '../../services/profiles-backend.service';
import { ProfilesService } from '../../services/profiles.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile: Profile | null = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private profilesService: ProfilesService,
    private ProfilesBackendService: ProfilesBackendService
  ) {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.checkCurrentProfile(+params['id']);
      }
    });
  }

  ngOnInit(): void {}
  checkCurrentProfile(id: number) {
    this.profile = this.profilesService.getProfileById(id);
    if (!this.profile) {
      if(!this.profilesService.allProfilesSubject.value) {
        this.ProfilesBackendService.getProfilesList().subscribe((profiles) => {
          this.profilesService.setAllProfiles(profiles);
          this.checkCurrentProfile(id);
        });
      } else {
        console.log('lol');
        
      }
    }
  }
}
