export class Rocket {
    constructor(
        public id: number,
        public active: boolean,
        public stages: number,
        public boosters: number,
        public cost_per_launch: number,
        public success_rate_pct: number,
        public first_flight: string,
        public country: string,
        public company: string,
        public height: Length,
        public diameter: Length,
        public mass: Weight
    ) { }
}

export class Length {
    constructor(
        public meters: number,
        public feet: number
    ) { }
}

export class Weight {
    constructor(
        public kg: number,
        public lb: number
    ) { }
}