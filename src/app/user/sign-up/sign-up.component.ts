import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user!: User;
  emailPattern = "^[a-z0-9._%+_]+@[a-z0-9.-]\.[a-z]{2,4}$";

  constructor() { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?:NgForm)
  {
    if(form !=null)
    this.user = {
      UserName: '',
      Password:'',
      Email: '',
      FirstName:'',
      LastName:'',
    }
  }
}
