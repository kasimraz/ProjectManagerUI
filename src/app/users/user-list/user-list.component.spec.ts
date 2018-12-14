import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component'
import  {UserService} from '../shared/user.service'
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { By } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { User } from 'src/app/users/shared/user.model';
import { FormsModule } from '@angular/forms';
import { UserFilterPipe } from 'src/app/users/shared/user-filter.pipe';

describe('UserListComponent', () => {
    let component: UserListComponent;
    let fixture: ComponentFixture<UserListComponent>;
    let debugElement : DebugElement;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports:[HttpClientModule,HttpModule,FormsModule],
        providers:[HttpClientModule],
        declarations: [ UserListComponent,UserFilterPipe ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(UserListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      debugElement = fixture.debugElement.query(By.css('p'));   
    });

    // it('should delete the users', () => {         
    //   const  testData : User={
    //     User_ID:4, FirstName:'William',LastName:'Smith',Employee_Id:78
    // };     
    //   fixture.detectChanges();         
    //     expect(component.DeleteUser(testData)).toBeTruthy();
    // });
  
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
    // let users:User[];
    // it('should have a value for all list controls', () => {
      
    //   component.userService.getUser().subscribe(
    //     data=>this.users=data
    //   );     
    //   expect(users[0].FirstName).not.toBeNull();
    //   expect(users[0].LastName).not.toBeNull();
    //   expect(users[0].Employee_Id).not.toBeNull();      
    // }); 
    
    // it('should create', () => {
    //   expect(component).toBeTruthy();
    // });
  
    // it('should have a value for all list controls', () => {
    //   expect(component.users[0].FirstName).not.toBeNull();
    //   expect(component.user[0].LastName).not.toBeNull();
    //   expect(component.user[0].Employee_Id).not.toBeNull();      
    // });  
  });
  