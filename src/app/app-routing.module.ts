import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RocketsComponent } from './components/rockets/rockets.component';
import { LaunchesComponent } from './components/launches/launches.component';


const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'rockets', component: RocketsComponent },
    { path: 'launches', component: LaunchesComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
