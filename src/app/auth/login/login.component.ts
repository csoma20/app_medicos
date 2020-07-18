import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  login() {

    console.log('object')

    this.router.navigateByUrl('/')


  }

}
