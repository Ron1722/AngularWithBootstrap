import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {

  public userId;

  myDate= new Date();
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  let Id = parseInt(this.route.snapshot.paramMap.get('user-id'));
 this.userId = Id;
  }

}
