import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  roles:string[] | undefined
  constructor(private keycloakService: KeycloakService) {
  }


  async ngOnInit(){
     this.roles= this.keycloakService.getUserRoles (true)

   }

}
