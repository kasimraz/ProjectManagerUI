import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';
import {UserService} from './user.service';
import { User } from './user.model';
import { UserComponent } from '../user/user.component';
import { CommonModule } from '@angular/common';
import {By}  from  '@angular/platform-browser';

//import { inject } from '@angular/core';

describe('UserService', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({ 
        imports:[CommonModule],
        declarations: [ UserComponent ],         
        providers: [ UserService ],        
      });
    });

    // it('should be created', inject([UserService],(service:UserService) => {
    //     expect(service).toBeTruthy();
    // }));

  
    // it('should have add function', inject([UserService],(service:UserService) => {
    //     const  testData : User={
    //         FirstName:'William',LastName:'Smith',Employee_Id:78
    //     };
    //     expect(service.postUser(testData)).toBe(User);     
    // }));

      
    // it('should have get users function', inject([UserService],(service:UserService) => {
    //     expect(service.getUser()).toBeTruthy(true);
    // }));

    // it('should have delete user function', inject([UserService],(service:UserService) => {
    //     const  User_ID : number=6;         
    //     expect(service.DeleteUser(User_ID)).toBeTruthy();
    // }));

    // it('should have update user function', inject([UserService],(service:UserService) => {
    //     const  testData : User={
    //         User_ID:2,FirstName:'William',LastName:'Smith',Employee_Id:2
    //     };
    //     expect(service.PutUser(testData.User_ID,testData)).toBeTruthy();
    // }));
  

 });