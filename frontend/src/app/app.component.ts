import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title(title: any) {
  }

  public isLogged = false;
  public profile: KeycloakProfile | null = null;

  constructor(private readonly keycloak: KeycloakService) { }

  public userName = "";
  async ngOnInit() {
    this.isLogged = await this.keycloak.isLoggedIn();

    if (this.isLogged) {
      this.profile = await this.keycloak.loadUserProfile();
      this.userName += this.profile.username;
    }
  }
}


