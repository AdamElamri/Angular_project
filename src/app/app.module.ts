import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersListComponent } from './users-list/users-list.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersListComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,NavbarComponent,UsersListComponent,FooterComponent]
})
export class AppModule { }
