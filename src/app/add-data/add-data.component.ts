import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DivisionsService } from '../services/divisions.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  constructor( private divisions: DivisionsService) { }
addData=new FormGroup({
  name: new FormControl( '' ),
  description: new FormControl( '' )
});
  ngOnInit(): void {
  }
  SaveData(){
    console.log( this.addData.value);
  }
}
