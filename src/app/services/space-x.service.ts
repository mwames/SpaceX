import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SpaceXService {

    constructor(private http: HttpClient) { }

    public getRockets() {
        return this.http.get('https://api.spacexdata.com/v3/Rockets');
    }

    public getLaunches(): any {
        return this.http.get('https://api.spacexdata.com/v3/Launches');
    }
}
