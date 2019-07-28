import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  activityList: any = [{
    id: 1,
    srNo: 1,
    description: 'abc',
    compStatus: '3%',
    estimated: 0
  }, {
    id: 2,
    srNo: 2,
    description: 'abc',
    compStatus: '5%',
    estimated: 0
  }, {
    id: 3,
    srNo: 3,
    description: 'abc',
    compStatus: '5%',
    estimated: 0
  }, {
    id: 4,
    srNo: 4,
    description: 'abc',
    compStatus: '4%',
    estimated: 0
  }, {
    id: 5,
    srNo: 5,
    description: 'abc',
    compStatus: '100%',
    estimated: 0
  }, {
    id: 6,
    srNo: 6,
    description: 'abc',
    compStatus: '48%',
    estimated: 0
  }, {
    id: 7,
    srNo: 7,
    description: 'abc',
    compStatus: '34%',
    estimated: 0
  }, {
    id: 8,
    srNo: 8,
    description: 'abc',
    compStatus: '12%',
    estimated: 0
  }, {
    id: 9,
    srNo: 9,
    description: 'abc',
    compStatus: '54%',
    estimated: 0
  }, {
    id: 10,
    srNo: 10,
    description: 'abc',
    compStatus: '65%',
    estimated: 0
  }, {
    id: 11,
    srNo: 11,
    description: 'abc',
    compStatus: '73%',
    estimated: 0
  }, {
    id: 12,
    srNo: 12,
    description: 'abc',
    compStatus: '32%',
    estimated: 0
  }, {
    id: 13,
    srNo: 13,
    description: 'abc',
    compStatus: '98%',
    estimated: 0
  }]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoActivityDetail(data) {
    console.log(data);
    this.router.navigate(['table-list/activity-details']);
  }

}
