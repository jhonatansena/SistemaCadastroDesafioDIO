import { User } from './../../../views/home/home/user.model';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  

  user: User = {
    photo :  "",
    name : "",
    email : "",
    emailAlternative :  "",
    dataAdmission : new Date()
    };
  
    

  constructor(private userService: UserService, 
              private router: Router,
              private acRoute: ActivatedRoute) { }

 
 
 ngOnInit(): void {
   const id = Number(this.acRoute.snapshot.paramMap.get("id"));
   this.userService.readByID(id).subscribe((user) => {
      

        this.user = user;
      });
  }

  updateUser(): void{
    this.userService.update(this.user).subscribe(() => {
      console.log('Estou no updateUser')
       this.router.navigate(['/home']);
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
    this.router.navigate(['/home']);
  }
}
