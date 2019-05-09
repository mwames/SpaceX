import { Component, OnInit } from '@angular/core';
import { SpaceXService } from 'src/app/services/space-x.service';
import { Sorter } from 'src/app/helpers/sorter';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-rockets',
    templateUrl: './rockets.component.html',
    styleUrls: ['./rockets.component.scss']
})
export class RocketsComponent implements OnInit {
    caretUp = faCaretUp;
    caretDown = faCaretDown;

    public rockets = null;
    public launches = null;
    public currentProperty: string = null;
    public reverse = false;
    public selectedRocket = null;
    public launchCount = 0;

    constructor(private spaceXService: SpaceXService, private sorter: Sorter) { }

    ngOnInit() {
        this.spaceXService.getRockets().subscribe(rockets => {
            this.rockets = rockets;
            this.sort('rocket_id');
        });

        this.spaceXService.getLaunches().subscribe(launches => {
            this.launches = launches.reduce((acc, cur) => {
                acc[cur.rocket.rocket_id] = [...acc[cur.rocket.rocket_id] || [], cur];
                return acc;
            }, {});
        });
    }

    // Gets keys for 'primitive' data types
    public getKeys(object: object): string[] {
        return Object.keys(object).filter(key => typeof object[key] !== 'object');
    }

    // Sort an array based on the given property
    public sort(property) {
        if (!property) { return; }

        this.setSortDirection(property);

        this.sorter.sort(this.rockets, property, this.reverse);
    }

    // Allows ascending and descending sort
    private setSortDirection(property) {
        if (property === this.currentProperty) {
            this.reverse = !this.reverse
        } else {
            this.currentProperty = property;
            this.reverse = false;
        }
    }

    // Sets the selected rocket for showing launches
    public expand(rocketid) {
        if (rocketid === this.selectedRocket)
            this.selectedRocket = '';
        else
            this.selectedRocket = rocketid;
        this.launchCount = this.launches[rocketid] ? this.launches[rocketid].length : 0;
    }

    public getLaunches(rocketid) {
        return this.launches[rocketid];
    }
}