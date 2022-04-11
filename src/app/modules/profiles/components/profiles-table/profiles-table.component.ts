import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Profile } from '../../models/profile';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profiles-table',
  templateUrl: './profiles-table.component.html',
  styleUrls: ['./profiles-table.component.scss'],
})
export class ProfilesTableComponent implements OnInit {
  @Input() profilesData: Profile[] = [];
  @Input() sortKey: keyof Profile = 'localid';
  @Output() sortEmit = new EventEmitter<keyof Profile>();
  @ViewChild('paginator') paginator!: MatPaginator;
  dataSource: MatTableDataSource<Profile>;
  displayedColumns: string[] = [
    'profilePic',
    'id',
    'email',
    'name',
    'phone',
    'address',
    'modified',
    'view',
  ];
  constructor(private router: Router) {
    this.dataSource = new MatTableDataSource(this.profilesData);
  }

  ngOnInit(): void {}
  ngOnChanges() {
    if (this.profilesData && this.paginator) {
      this.dataSource = new MatTableDataSource(this.profilesData);
      this.dataSource.paginator = this.paginator;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  sort(key: keyof Profile) {
    this.sortEmit.emit(key);
  }
  navigateToProfile(id: string) {
    this.router.navigate(['/profile/' + id]);
  }
}
