import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityDetailsService } from './activity-details/activity-details.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  activityList: any = [
    {
    id: 1,
    srNo: 1,
    description: 'Removing of manglore tiles from roof',
    compStatus: '3%',
    estimated: 0
  }, {
    id: 2,
    srNo: 2,
    description: 'Removing of POP false ceiling',
    compStatus: '5%',
    estimated: 0
  }, {
    id: 3,
    srNo: 3,
    description: 'Breaking and removing Brick work',
    compStatus: '5%',
    estimated: 0
  }, {
    id: 4,
    srNo: 4,
    description: 'Removing existing doors, frames, shutter and window, frame, shutter',
    compStatus: '4%',
    estimated: 0
  }, {
    id: 5,
    srNo: 5,
    description: 'Filling rabit in plinth and leveling',
    compStatus: '100%',
    estimated: 0
  }, {
    id: 6,
    srNo: 6,
    description: 'Soling in plinth and around the structure.',
    compStatus: '48%',
    estimated: 0
  }, {
    id: 7,
    srNo: 7,
    description: 'Excavation for foundation',
    compStatus: '34%',
    estimated: 0
  }, {
    id: 8,
    srNo: 8,
    description: 'Providing and constructing 230 mm thick brick wall',
    compStatus: '12%',
    estimated: 0
  }, {
    id: 9,
    srNo: 9,
    description: 'Providing and constructing 150 mm thick brick wall',
    compStatus: '54%',
    estimated: 0
  }, {
    id: 10,
    srNo: 10,
    description: 'Providing and applying 12 mm thk. Internal Plaster',
    compStatus: '65%',
    estimated: 0
  }, {
    id: 11,
    srNo: 11,
    description: 'Providing and applying 20 mm thk. External Plaster',
    compStatus: '73%',
    estimated: 0
  }, {
    id: 12,
    srNo: 12,
    description: 'Providing & applying two coat of painting',
    compStatus: '32%',
    estimated: 0
  },
   {
    id: 13,
    srNo: 13,
    description: 'Providing and Applying two coat of Asian Paints Apex ultima to external walls',
    compStatus: '98%',
    estimated: 0
  }
   ,{
    id: 14,
    srNo: 14,
    description: 'Providing and laying 2’-0” X 2’-0” 10 mm thick Vitrified tiles',
    compStatus: '98%',
    estimated: 0
  }
   ,{
    id: 15,
    srNo: 15,
    description: 'Dado (Ceramic tiles in toilet & Kitchen)',
    compStatus: '98%',
    estimated: 0
  }
   ,{
    id: 16,
    srNo: 16,
    description: 'Providing and fixing Machine cut Machine Polished Kotah Stone in staircase',
    compStatus: '98%',
    estimated: 0
  }
   ,{
    id: 17,
    srNo: 17,
    description: 'Providing and fixing Machine polished machine Kotah Treads',
    compStatus: '98%',
    estimated: 0
  }
   ,{
    id: 18,
    srNo: 18,
    description: 'Ledge',
    compStatus: '98%',
    estimated: 0
  }
   ,{
    id: 19,
    srNo: 19,
    description: 'Providing and laying waterproofing treatment',
    compStatus: '98%',
    estimated: 0
  }
   ,{
    id: 20,
    srNo: 20,
    description: 'Flooring. (Anti-Skid for terrace)',
    compStatus: '98%',
    estimated: 0
  }
   ,{
    id: 13,
    srNo: 13,
    description: 'abc',
    compStatus: '98%',
    estimated: 0
  }
   ,{
    id: 13,
    srNo: 13,
    description: 'abc',
    compStatus: '98%',
    estimated: 0
  }
   ,{
    id: 13,
    srNo: 13,
    description: 'abc',
    compStatus: '98%',
    estimated: 0
  }
   ,{
    id: 13,
    srNo: 13,
    description: 'abc',
    compStatus: '98%',
    estimated: 0
  }
   ,{
    id: 13,
    srNo: 13,
    description: 'abc',
    compStatus: '98%',
    estimated: 0
  }
   ,{
    id: 13,
    srNo: 13,
    description: 'abc',
    compStatus: '98%',
    estimated: 0
  }
   ,{
    id: 13,
    srNo: 13,
    description: 'abc',
    compStatus: '98%',
    estimated: 0
  }
   ,{
    id: 13,
    srNo: 13,
    description: 'abc',
    compStatus: '98%',
    estimated: 0
  }
   ,{
    id: 13,
    srNo: 13,
    description: 'abc',
    compStatus: '98%',
    estimated: 0
  }
   ,{
    id: 13,
    srNo: 13,
    description: 'abc',
    compStatus: '98%',
    estimated: 0
  }
   ,{
    id: 13,
    srNo: 13,
    description: 'abc',
    compStatus: '98%',
    estimated: 0
  }
   ,{
    id: 13,
    srNo: 13,
    description: 'abc',
    compStatus: '98%',
    estimated: 0
  }
   ,{
    id: 13,
    srNo: 13,
    description: 'abc',
    compStatus: '98%',
    estimated: 0
  }
   ,{
    id: 13,
    srNo: 13,
    description: 'abc',
    compStatus: '98%',
    estimated: 0
  }
   ,{
    id: 13,
    srNo: 13,
    description: 'abc',
    compStatus: '98%',
    estimated: 0
  }
   ,{
    id: 13,
    srNo: 13,
    description: 'abc',
    compStatus: '98%',
    estimated: 0
  }
]

  constructor(private router: Router, private activityDetailService: ActivityDetailsService) { }

  ngOnInit() {
  }

  gotoActivityDetail(data) {
    console.log(data);
    this.activityDetailService.activityData = data;
    this.router.navigate(['table-list/activity-details']);
  }

}
