import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import 'hammerjs';

// Importing components

import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

// Importing services

import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';
import { LeadersService } from './services/leaders.service';

// Importing Modules

import { AppRouterModule } from './app-router/app-router.module';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpModule,
    MatToolbarModule,
    MatDialogModule,
    MatGridListModule,
    MatInputModule,
    MatCheckboxModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    AppRouterModule
  ],
  entryComponents: [
    LoginComponent
  ],

  providers: [DishService, PromotionService, LeadersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
