import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Home1Component } from './home1/home1.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProvidersComponent } from './providers/providers.component';
import { AddProvidersComponent } from './providers/add-providers/add-providers.component';

export const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: '', component: Home1Component },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'providers', component: ProvidersComponent },
  { path: 'providers/add-provider', component: AddProvidersComponent },
  { path: '**', component: NotfoundComponent },
];
