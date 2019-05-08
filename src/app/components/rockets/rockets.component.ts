import { Component, OnInit } from '@angular/core';
import { SpaceXService } from 'src/app/services/space-x.service';
import { ArraySorter } from 'src/app/helpers/ArraySorter';
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

    public columns = [
        { name: 'Rocket Name', property: 'rocket_name'},
        { name: 'First Flight', property: 'first_flight'},
        { name: 'Cost Per Launch', property: 'cost_per_launch'},
        { name: 'Success Rate', property: 'success_rate_pct'},
        { name: 'Active', property: 'active'},
        { name: 'Boosters', property: 'boosters'},
        { name: 'Height', property: 'height.feet'},
        { name: 'Diameter', property: 'diameter.feet'},
        { name: 'Mass', property: 'mass.lb'},
        { name: 'Payload Weights', property: null},
        { name: 'First Stage', property: null},
        { name: 'Second Stage', property: null},
        { name: 'Engines', property: null},
        { name: 'Landing Legs', property: 'landing_legs.number'},
        { name: 'Images', property: null},
        { name: 'Wikipedia', property: null}
    ]
    public rockets = null;
    public currentProperty: string = null;
    private reverse = false;

    constructor(private spaceXService: SpaceXService, private sorter: ArraySorter) { }

    ngOnInit() {
        this.spaceXService.getRockets().subscribe(rockets => {
            this.rockets = rockets;
            this.sort(this.columns[0].property);
        });
    }

    // Gets keys for 'primitive' data types
    public getKeys(object: object): string[] {
        return Object.keys(object).filter(key => typeof object[key] !== 'object');
    }

    // Sort an array based on the given property
    public sort(property) {
        if(!property) { return; }

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
}