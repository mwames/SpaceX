import { of } from 'rxjs'

const ROCKETS = [
    { 
        id: 1,
        active: false,
        stages: 2,
        boosters: 0,
        cost_per_launch: 6700000,
        success_rate_pct: 40,
        first_flight: '2006-03-24',
        country: 'Republic of the Marshall Islands',
        company: 'SpaceX',
        height: { 
            meters: 22.25,
            feet: 73
        },
        diameter: {
            meters: 1.68,
            feet: 5.5 
        },
        mass: {
            kg: 30146,
            lb: 66460
        },
        payload_weights: [
            { id: 'leo', name: 'Low Earth Orbit', kg: 450, lb: 992 }
        ],
        first_stage: {
            reusable: false,
            engines: 1,
            fuel_amount_tons: 44.3,
            burn_time_sec: 169,
            thrust_sea_level: {
                kN: 420,
                lbf: 94000
            },
            thrust_vacuum: {
                kN: 480,
                lbf: 110000
            }
        },
        second_stage: {
            reusable: false,
            engines: 1,
            fuel_amount_tons: 3.38,
            burn_time_sec: 378,
            thrust: {
                kN: 31,
                lbf: 7000
            },
            payloads: {
                option_1: 'composite fairing',
                composite_fairing: {
                    height: {
                        meters: 3.5,
                        feet: 11.5
                    },
                    diameter: {
                        meters: 1.5,
                        feet: 4.9
                    }
                }
            }
        },
        engines: {
            number: 1,
            type: 'merlin',
            version: '1C',
            layout: 'single',
            engine_loss_max: 0,
            propellant_1: 'liquid oxygen',
            propellant_2: 'RP-1 kerosene',
            thrust_sea_level: {
                kN: 420,
                lbf: 94000
            },
            thrust_vacuum: {
                kN: 480,
                lbf: 110000
            },
            thrust_to_weight: 96
        },
        landing_legs: {
            number: 0,
            material: null
        },
        flickr_images: ['string', 'string'], 
        wikipedia: 'string',
        description: 'string',
        rocket_id: 'falcon1',
        rocket_name: 'Falcon 1',
        rocket_type: 'rocket' }
];
const LAUNCHES = ['launch1', 'launch2'];

export class MockSpaceXService {

    public getRockets() {
        return of(ROCKETS);
    }

    public getLaunches() {
        return of(LAUNCHES);
    }
}