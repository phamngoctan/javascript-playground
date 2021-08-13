import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HobbyComponent } from './hobby/hobby.component';
import { UsernameComponent } from './username/username.component';
import { UserComponent } from './user/user.component';
import { InfoComponent } from './info/info.component';
import { AccountComponent } from './account/account.component';
import { BlogComponent } from './blog/blog.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
  {path: '', component : MainComponent},
  {path: 'main', component : MainComponent},
  
  {path: 'user', component : UserComponent},
  {path: 'blog', component : BlogComponent},
  {path: 'account', component : AccountComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsernameComponent,
    HobbyComponent,
    UserComponent,
    InfoComponent,
    AccountComponent,
    BlogComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
