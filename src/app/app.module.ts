import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { RouterModule, Routes } from '@angular/router';
import { FilterPipe } from './filter.pipe';

const appRoutes: Routes = [
  { path: 'directory/:ninja', component: DirectoryComponent },
  { path: 'directory', component: DirectoryComponent },
  { path: 'home', component: HomeComponent },
];
@NgModule({
  imports: [ BrowserModule,
  RouterModule.forRoot(appRoutes)],
  declarations: [
    AppComponent,
    EventsListComponent,
    HomeComponent,
    DirectoryComponent,
    FilterPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
