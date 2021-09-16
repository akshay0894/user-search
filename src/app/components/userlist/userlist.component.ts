import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/userservice.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  usersList= [];
  users = [];
  myControl: FormControl;
  filteredOptions: Observable<string[]>;
  options: string[] = [];
  constructor( 
    private router: Router,
    private userService : UserService) { }

  ngOnInit() {
    this.myControl = new FormControl();
    this.userService.getUsers().subscribe((res: any)=> {
        this.usersList=[...res];
        this.users = [...res]; 
        this.usersList.forEach(user=> {
         this.options.push(user.name);
        })    
    })
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    
  }

  Navigate(user:any) {
    this.router.navigate(['/user-details',user.id]);
  }

  onSearch(){
    if(this.myControl.value !== '' ){
      this.users = [...this.usersList.filter(user=> user.name.includes(this.myControl.value))];
    }else {
      this.users = [...this.usersList];
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
