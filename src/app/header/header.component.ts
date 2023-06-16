import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logintext = "Login"

  changetext(){
    if (this.logintext=="Login") {
      this.logintext="logout"
    }
    else{
      this.logintext="Login"
    }
   
  }



}
