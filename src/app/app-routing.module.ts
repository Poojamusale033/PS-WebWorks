import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProjectComponent } from './project/project.component'; // FIXED: ProjectsComponent
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    data: { title: 'PS WebWorks - Home' }
  },
  { 
    path: 'about', 
    component: AboutComponent,
    data: { title: 'About - PS WebWorks' }
  },
  { 
    path: 'services', 
    component: ServicesComponent,
    data: { title: 'Services - PS WebWorks' }
  },
  { 
    path: 'projects', 
    component: ProjectComponent, // FIXED: ProjectsComponent
    data: { title: 'Projects - PS WebWorks' }
  },
  { 
    path: 'contact', 
    component: ContactComponent,
    data: { title: 'Contact - PS WebWorks' }
  },
  { 
    path: '**', 
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }