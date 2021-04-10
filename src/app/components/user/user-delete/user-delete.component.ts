import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/views/home/home/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {


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
onselectFile(e: any){
  if(e.target.files){
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=(event:any) => {
      this.user.photo = event.target.result;
    }
  }
}



deleteUser(): void{
  this.userService.delete(this.user.id).subscribe(() => {
    this.router.navigate(['/home'])
  })
}

returnToHome(): void{
  this.router.navigate(['/home']);
}

}
