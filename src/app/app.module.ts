import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {UsersComponent} from './containers/users.component';
import {PostComponent} from './containers/post.component';
import {DashboardComponent} from './components/layout/dashboard.component';
import {HeaderComponent} from './components/layout/header.component';
import {LayoutComponent} from './components/layout/youtube-layout.component';
import {MaterialModule} from './material.module';
import {HttpService} from './services/http.service';
import {ApiService} from './services/api.service';
import {UserCardComponent} from './components/user-card.component';
import {UserListComponent} from './components/user-list.component';
import {StoreModule} from '@ngrx/store';
import {rootReducer} from './reducers';
import {YoutubeRepository} from './services/youtube-repository';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostComponent,
    DashboardComponent,
    HeaderComponent,
    LayoutComponent,
    UserCardComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FlexModule,
    HttpClientModule,
    StoreModule.forRoot(rootReducer),
  ],
  providers: [HttpService, ApiService, YoutubeRepository],
  bootstrap: [AppComponent]
})
export class AppModule {
}
