import { Component, OnInit } from '@angular/core';
import { ActivityDetailsService } from './activity-details.service';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss']
})
export class ActivityDetailsComponent implements OnInit {
  activityData: any = {};
  constructor(private activityDetailsService: ActivityDetailsService) { }

  ngOnInit() {
    if (this.activityDetailsService.activityData) {
      this.activityData = this.activityDetailsService.activityData;
      console.log('this.activityData', this.activityData);
    }
  }

}
