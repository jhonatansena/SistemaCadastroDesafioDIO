import { User } from './../../../views/home/home/user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';




@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

 
  imageBase64: string = "";

  user: User = {
  photo :  "",
  name : "",
  email : "",
  emailAlternative :  "",
  dataAdmission : new Date()
  };
  //public now: Date = new Date();



  constructor(private userService: UserService,
               private route: Router,
               private sanitizer: DomSanitizer) { 
    setInterval(() => {
          this.user.dataAdmission = new Date();
        }, 1);
  }

  ngOnInit(): void {
    // this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl
    // (`data:image/png;base64, ${}`);
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
        console.log('onselectFile: '+ reader.result);
      // reader.readAsBinaryString(e.target.files[0])
      reader.onload=(event:any) => {
        this.user.photo = event.target.result;
        console.log(this.sanitizer.bypassSecurityTrustUrl(event.target.resul));


      }
    }
  }


  cancelUser(): void{
    this.route.navigate(['/home']);
  }

}
