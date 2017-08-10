import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';

export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'user',component: UserComponent },
    { path: 'login',component: LoginComponent },
    { path: 'admin', component: AdminComponent },
    
];
export const routes: ModuleWithProviders = RouterModule.forRoot(router);
