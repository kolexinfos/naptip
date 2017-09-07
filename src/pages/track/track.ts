import { Component, Input } from '@angular/core';

@Component({
    selector: 'maps-layout-3',
    templateUrl: 'track.html'
})

export class TrackPage {

    lat: number = 51.678418;
  lng: number = 7.809007;

    @Input() data: any;
    @Input() events: any;
   
    constructor() { }

    onEvent(event: string) {
        if (this.events[event]) {
            this.events[event]();
        }
        console.log(event);
    }
}