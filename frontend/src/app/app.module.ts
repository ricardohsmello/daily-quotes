import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuotesComponent } from './quotes/quotes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AdminComponent } from './admin/admin.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
  keycloak.init({
    config: {
    url: 'http://localhost:8188',
    realm: 'daily-quotes',
    clientId: 'frontend'
    },
  initOptions: {
  onLoad: 'login-required',
  silentCheckSsoRedirectUri:
    window.location.origin + '/assets/silent-check-sso.html'
  }
  });
}

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    NavbarComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    KeycloakAngularModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    }    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
