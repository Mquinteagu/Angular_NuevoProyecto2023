import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent {

  constructor(
    private _authService: AuthService
  ){}

  loginGoogle(){
    this._authService.loginWithGoogle().then((response) =>{
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  }
}
