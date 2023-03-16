import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { MatDialog } from '@angular/material/dialog';
import { QuoteAddComponent } from '../quote-add/quote-add.component';
import { QuoteService } from 'src/app/services/quote/quote-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent implements OnInit {
  constructor(
    private readonly keycloak: KeycloakService,
    public dialog: MatDialog,
    public quoteService: QuoteService,
    public router: Router
    ) { }

  public hasAdminRole: boolean = false;

  message?: string; 
  author?: string;
  
  ngOnInit(): void {
    this.hasAdminRole = this.keycloak.getUserRoles().includes('admin');
   }
 
  public async logout() {
     this.keycloak.logout();
  }

  public add() {
    const dialogRef = this.dialog.open(QuoteAddComponent, {
      data: {message: this.message, author: this.author},
    })

    dialogRef.afterClosed().subscribe(result => {      
      this.quoteService.save(result)
      this.router.navigate(['quotes']);
    });
  }

}
