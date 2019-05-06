import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class SpaceXServiceService {

    constructor(private http: HttpClient) { }

    public getRockets() {
        return this.http.get('https://api.spacexdata.com/v3/Rockets');
    }

    public getLaunches() {
        return this.http.get('https://api.spacexdata.com/v3/Launches');
    }
}
