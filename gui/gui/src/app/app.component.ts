import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'gui';
  userDetails: KeycloakProfile | undefined;

  constructor(private keycloakService: KeycloakService) {
  }

  async ngOnInit() {
    console.log ("App onInit")
    if (await this.keycloakService.isLoggedIn()) {
       this.userDetails = await this.keycloakService.loadUserProfile();
    }
  }

  async doLogout() {
    await this.keycloakService.logout();
  }

}
