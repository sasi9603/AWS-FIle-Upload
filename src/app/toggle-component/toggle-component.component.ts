
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-toggle-component',
  templateUrl: './toggle-component.component.html',
  styleUrls: ['./toggle-component.component.css']
})
export class ToggleComponentComponent implements OnInit {
  girdsize:number=30;
  checked:any;
  toggle:string="";
  handleChange(event:any)
  {
    if(event.checked){
      this.toggle="hello here some text";
      this.checked="";
    }else{
      this.toggle="";
      this.checked="";
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
