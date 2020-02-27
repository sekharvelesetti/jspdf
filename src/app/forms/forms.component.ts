import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  login:FormGroup
  submitted = false;
  title = 'reactiveform';
  constructor(private build:FormBuilder) { }

  ngOnInit() {
    this.login = this.build.group({
      user: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      mobile: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(6)]],
      cPassword: ['', [Validators.required,Validators.minLength(6)]]
    });
  }

   fvalue (){
  return this.login.controls
  }

signup(){
  this.submitted=true
  if(this.login.invalid){
    return
  }else{
    alert('form valide sucessfully')
  }
}
}
