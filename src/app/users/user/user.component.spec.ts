import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import {HttpClientModule} from '@angular/common/http';

import{FormsModule,ReactiveFormsModule} from '@angular/forms'
import {BrowserModule,By} from '@angular/platform-browser'
import {DebugElement} from '@angular/core'
import { UserListComponent } from 'src/app/users/user-list/user-list.component';
import { NgModule } from '@angular/core';
import { UserFilterPipe } from 'src/app/users/shared/user-filter.pipe';
import { NgForm } from '@angular/forms';


describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let de:DebugElement;
  let el:HTMLElement;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent,UserListComponent,UserFilterPipe ],
      imports:[HttpClientModule,FormsModule]              
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    de=fixture.debugElement.query(By.css('form'));
    el=de.nativeElement;
    fixture.detectChanges();
    
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it('should validate the users', () => {
     fixture.whenStable().then(
       ()=>{
         component.sampleForm.controls['FirstName'].setValue('Moh');
         component.sampleForm.controls['LastName'].setValue('Kasim');
        component.sampleForm.controls['Employee_Id'].setValue('689');
       }
     );       
    expect(component.sampleForm.invalid).toBeFalsy();    
  });
  it('should create the users', () => {
    fixture.whenStable().then(
      ()=>{
        component.sampleForm.controls['FirstName'].setValue('Moh');
        component.sampleForm.controls['LastName'].setValue('Kasim');
       component.sampleForm.controls['Employee_Id'].setValue('689');
      }
    );          
  expect(component.sampleForm.invalid).toBeFalsy();    
 });

});
