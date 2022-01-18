import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DivisionsService } from '../services/divisions.service';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {

  constructor( private divisions: DivisionsService) { }
editData=new FormGroup({
  name: new FormControl( '' ),
  description: new FormControl( '' )
});
  ngOnInit(): void {
  }
  EditData(){
    console.log( this.editData.value);
  }
}
