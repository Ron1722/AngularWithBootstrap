import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   dat: any;
   
  constructor() { }

  ngOnInit() {
    fetch('http://www.omdbapi.com/?apikey=66c212df&i=tt0944947').then(response => response.json())
    .then((data) => {
      this.dat =data;
    })
    
  }

}
