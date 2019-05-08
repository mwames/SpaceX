import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SpaceXService {
    private rockets;
    private launches;

    constructor(private http: HttpClient) { }

    public getRockets() {
        if(!this.rockets)
            return this.http.get('https://api.spacexdata.com/v3/Rockets').pipe(map(rockets => this.rockets = rockets));
        else
            return of(this.rockets);
    }

    public getLaunches() {
        if (!this.launches)
            return this.http.get('https://api.spacexdata.com/v3/Launches').pipe(map(launches => this.launches = launches));
        else
            return of(this.launches);
    }
}
