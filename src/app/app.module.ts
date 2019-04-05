import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicModule } from './public/public.module';
import {PrivateModule} from './private/private.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import {CheckGuard} from './authguard';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    ReactiveFormsModule,
    HttpClientModule,
    PublicModule,
    PrivateModule,
    CollapseModule.forRoot(),
  ],
  providers: [CheckGuard],
  bootstrap: [AppComponent],
schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
