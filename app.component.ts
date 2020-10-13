import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from "@angular/forms";
import { UserInfo } from './UserInfo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userInfo:UserInfo[]=[];


  userInfoGroup:FormGroup;
  constructor(){
      this.userInfoGroup = new FormGroup({
        firstName : new FormControl("",Validators.required),
        lastName : new FormControl("",Validators.required),
        city : new FormControl(""),
          phnNo:new FormControl("",[Validators.required,Validators.pattern('[0-9 ]{10}')])
      });
  }
 

  saveInfo() {
  
    this.userInfo = [...this.userInfo, this.userInfoGroup.value].sort((a, b) => (a.lastName < b.lastName ? -1 : 0));
    this.userInfoGroup.reset();
  }

}
