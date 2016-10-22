import { RouterModule, Routes } from '@angular/router';

import {
    HomeComponent,
    AboutComponent
} from './components';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
]

export const AppRoutes = RouterModule.forRoot(routes);