import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { UserService } from '../shared/user.service'
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(public userService:UserService) { }
  @ViewChild('userForm') sampleForm: NgForm;
  ngOnInit() {
    this.resetForm();
    
  }
  buttonName :string="Add";
  userSubmitted = true;
  TestFormData : NgForm;
  ChangeButtonText()
  {
   var text= document.getElementById("btnSubmit").innerText;
   if(text=="Add")
   document.getElementById("btnSubmit").innerText="Update";
   else
   document.getElementById("btnSubmit").innerText="Add";
  }

  resetForm(form? :NgForm){
    if(form!=null)
form.reset();
this.userService.selectedUser={
  FirstName:'',
  LastName:'',
  Employee_Id:null,
  User_ID:null,
  Project_ID:null,
  Task_ID:null
};
  }

  changeButtonText(eventdata:string)
  {
    this.buttonName=eventdata;
  }
  onSubmit(form:NgForm){
   this.TestFormData=form;
    if(form.value.User_ID==null)
    {
      console.log("post method called");
  // var body=data as (form.value.json)
    this.userService.postUser(form.value).subscribe(data=>
    {
      this.resetForm(form),
      this.userService.getUser().subscribe(userlist=>this.userService.users=userlist)
      alert("User added successfully")  
          this.userSubmitted=true;      
    })
  }
  else{
    console.log("put method called");
    this.userService.PutUser(form.value.User_ID,form.value)
    .subscribe(data=>
    {
      this.resetForm(form);
      this.userService.getUser().subscribe(userlist=>this.userService.users=userlist)
      alert("User updated successfully")  
      this.buttonName="Add";
    })
  }
  }
  }



