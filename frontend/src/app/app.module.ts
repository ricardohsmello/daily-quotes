import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AdminComponent } from './component/admin/admin.component';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { QuoteListComponent } from './component/quote-list/quote-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { QuoteAddComponent } from './quote-add/quote-add.component';

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
    QuoteListComponent,
    NavbarComponent,
    AdminComponent,
    QuoteAddComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    KeycloakAngularModule,
    HttpClientModule,
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
