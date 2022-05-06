import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  employees = [{name:"Kevin", age:26, department:"finance", refferedby:"John"},
               {name:"Michael", age:32, department:"finance", refferedby:"Devid"},
               {name:"Santosh", age:22, department:"finance", refferedby:"Raghav"},
               {name:"Raksha", age:28, department:"finance", refferedby:"Swathi"},
               {name:"Sakshi", age:26, department:"finance", refferedby:"Sagar"}]

  constructor() { }

  ngOnInit(): void {
  }

}
