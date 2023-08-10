import { Component } from '@angular/core';
import { LoginService } from 'src/app/auth/service/login.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [
  ]
})
export class LayoutComponent {

  public sidebarItems = [
    {label: 'Personajes', icon: 'label', url: './list'},
    {label: 'Bitacora', icon: 'data_thresholding', url: './audit'}
  ]

  constructor(private loginService: LoginService) {}

  getToken() {
    this.loginService.getToken()
      .subscribe(resp => {
          sessionStorage.setItem('token', resp.token);
      });
  }

}
