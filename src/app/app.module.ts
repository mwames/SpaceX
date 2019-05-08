// Modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

//Components
import { AppComponent } from './app.component';
import { LaunchesComponent } from './components/launches/launches.component';
import { RocketComponent } from './components/rocket/rocket.component';
import { RocketsComponent } from './components/rockets/rockets.component';
import { SortableTableComponent } from './components/sortable-table/sortable-table.component';
import { SpaceXService } from './services/space-x.service';

// Pipes
import { PrettyPrintKey } from 'src/app/Pipes/prettyPrintKey.pipe';
import { ArraySorter } from './helpers/ArraySorter';

@NgModule({
    declarations: [
        AppComponent,
        LaunchesComponent,
        PrettyPrintKey,
        RocketComponent,
        RocketsComponent,
        SortableTableComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FontAwesomeModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        SpaceXService,
        ArraySorter
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
