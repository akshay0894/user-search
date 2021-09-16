import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
     FormsModule,
     ReactiveFormsModule, 
     HttpClientModule,
     AppRoutingModule,
     BrowserAnimationsModule,
     MatAutocompleteModule,
     MatInputModule,
     ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
