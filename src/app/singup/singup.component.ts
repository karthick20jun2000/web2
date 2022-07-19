import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
})
export class SingupComponent implements OnInit {
  singupForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor() {}
  ngOnInit(): void {}
}
