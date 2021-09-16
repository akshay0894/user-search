import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from 'src/app/userservice.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
   user: any;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit() {
     this.route.params.subscribe((param:Params)=> {
        this.user = this.userService.getUser(+param['id']);
     })
  }

  

}
