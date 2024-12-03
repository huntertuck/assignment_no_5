import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { TitleComponent } from './title/title.component';
import { AppRoutingModule } from './app-routing.module';  // Import the routing module

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  // Add it here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
