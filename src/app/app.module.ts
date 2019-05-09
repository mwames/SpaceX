// Modules
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

//Components
import { AppComponent } from './app.component';
import { RocketsComponent } from './components/rockets/rockets.component';

// Pipes
import { FormatKey } from 'src/app/pipes/format-key';

//Providers
import { Sorter } from './helpers/sorter';
import { SpaceXService } from './services/space-x.service';

@NgModule({
    declarations: [
        AppComponent,
        FormatKey,
        RocketsComponent
    ],
    imports: [
        BrowserModule,
        FontAwesomeModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        SpaceXService,
        Sorter
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
