import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  id: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Sahbi Atig'},
  {id: 2, name: 'Mahdi Ben Ayed'},
  {id: 3, name: 'Yosra Bou Selmi'},
  {id: 4, name: 'Abderrazek Hsin'},
  {id: 5, name: 'Wasila Barouni'},
  {id: 6, name: 'Fathi Haj Hamouda'},
  {id: 7, name: 'Jamila Debch'},
  {id: 8, name: 'Ameni Dridri'},
  ];
@Component({
  selector: 'app-votelist2',
  templateUrl: './votelist2.component.html',
  styleUrls: ['./votelist2.component.css']
})
export class Votelist2Component implements OnInit {
  displayedColumns: string[] = ['id', 'name'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
