import { User } from './../../../views/home/home/user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = {
  photo :  "",
  name : "",
  email : "",
  emailAlternative :  "",
  dataAdmission : new Date()
  };
  //public now: Date = new Date();



  constructor(private userService: UserService, private route: Router) { 
    setInterval(() => {
          this.user.dataAdmission = new Date();
        }, 1);
  }

  ngOnInit(): void {
  }

  createUser(): void{
    
    this.userService.create(this.user).subscribe(() => {
      this.route.navigate(['/home'])

    })
  }


  onselectFile(e: any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any) => {
        this.user.photo = event.target.result;
      }
    }
  }


  cancelUser(): void{
    this.route.navigate(['/home']);
  }

}
