import { HelpComponent } from './../views/help/help.component';
import { Routes } from '@angular/router';
import { DataResolver } from './app.resolver';
import { HomeComponent } from '../views/home';
import { ReplaceComponent } from '../views/replace';


export const ROUTES: Routes = [
  { path: 'help', component: HelpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'replace', component: ReplaceComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
