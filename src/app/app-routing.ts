import { Routes, provideRouter } from "@angular/router";
import { HomeComponent } from "./Components/home/home.component";
import { RegisterComponent } from "./Components/register/register.component";
import { AboutComponent } from "./Components/about/about.component";
import { ContactComponent } from "./Components/contact/contact.component";

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'about', component:AboutComponent},
    {path: 'contact', component:ContactComponent},
    { path: '**', redirectTo: '' }
];


export const appRoutingProviders = [provideRouter(routes)]