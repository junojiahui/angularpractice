import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public peopleInfo:any={
    username:"111",
    sex:"1",
    cityList:["Beijing", "Shanghai", "LA"],
    city:"LA",
    hobby:[{
      title:"eating",
      checked:false
    },{
      title:"sleeping",
      checked:false
    },{
      title:"coding",
      checked:true
    }],
    mark:''
  }
  

  constructor() { }

  ngOnInit(): void {
  }

  doSubmit(){
    /*
    let usernameDom:any=document.getElementById('username');
    console.log(usernameDom.value)
    */
   console.log(this.peopleInfo)
  }
  

}
