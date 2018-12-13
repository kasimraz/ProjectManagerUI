import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import {HttpClientModule} from '@angular/common/http';
import{FormsModule,ReactiveFormsModule} from '@angular/forms'
import {BrowserModule,By} from '@angular/platform-browser'
import {DebugElement} from '@angular/core'

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let de:DebugElement;
  let el:HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers:[HttpClientModule]
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

  // it('should create', () => {
  //   expect(true).toBe(true);
  // });
  // it('should create the users', () => {
  //   component.onSubmit(component.TestFormData);   
  //   expect(component.TestFormData.value.FirstName).toEqual(component.TestFormData.value.FirstName);
  //   console.log('users added'+component.TestFormData.value.FirstName);
  // });
});
