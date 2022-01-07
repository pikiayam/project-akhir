import { Component, OnInit } from '@angular/core';
import { Divisions } from '../model/divisions.model';
import { DivisionsService } from '../services/divisions.service';


@Component({
  selector: 'app-divisions',
  templateUrl: './divisions.component.html',
  styleUrls: ['./divisions.component.css']
})
export class DivisionsComponent implements OnInit {

  divisions?:Divisions[];
  currentDivisions:Divisions={};
  name='';
  constructor(private divisionsService:DivisionsService) { }

  ngOnInit(): void {
    this.retrieveDivisions()
  }

  retrieveDivisions():void{
    this.divisionsService.getAll()
      .subscribe(
        data=>{
          this.divisions=data;
          console.log(data);
        },
        error=>{
          console.log(error)
        }
      )
  }

}
