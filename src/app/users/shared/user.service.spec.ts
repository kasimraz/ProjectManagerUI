import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';
import {UserService} from './user.service';
import { User } from './user.model';
import { UserComponent } from '../user/user.component';
import { CommonModule } from '@angular/common';
import {By}  from  '@angular/platform-browser';
import { UserListComponent } from 'src/app/users/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UserFilterPipe } from 'src/app/users/shared/user-filter.pipe';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';

//import { inject } from '@angular/core';

describe('UserService', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({ 
        imports:[CommonModule,HttpClientModule,FormsModule],
        declarations: [ UserComponent,UserListComponent,UserFilterPipe ],         
        providers: [ UserService ],        
      });
    });

    it('should be created', inject([UserService],(service:UserService) => {
        expect(service).toBeTruthy();
    }));

  
    it('should have add function', inject([UserService],(service:UserService) => {
        const  testData : User={
            FirstName:'Jayam',LastName:'Raj',Employee_Id:501
        };       
        expect(service.postUser(testData)).toBeTruthy(true);     
    }));

      
    it('should have get users function', inject([UserService],(service:UserService) => {
        expect(service.getUsers()).toBeTruthy(true);
    }));

    it('should have delete user function', inject([UserService],(service:UserService) => {
        const  User_ID : number=6;         
        expect(service.DeleteUser(User_ID)).toBeTruthy();
    }));

    it('should have update user function', inject([UserService],(service:UserService) => {
        const  testData : User={
            User_ID:2,FirstName:'William',LastName:'Smith',Employee_Id:2
        };
        expect(service.PutUser(testData.User_ID,testData)).toBeTruthy();
    }));
  

 });