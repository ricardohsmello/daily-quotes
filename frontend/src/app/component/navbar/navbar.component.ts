import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private readonly keycloak: KeycloakService) { }

  public hasAdminRole: boolean = false;

  ngOnInit(): void {
    this.hasAdminRole = this.keycloak.getUserRoles().includes('admin');
   }
 
  public async logout() {
     this.keycloak.logout();
  }
}
