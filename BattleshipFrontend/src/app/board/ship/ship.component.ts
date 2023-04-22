import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-ship',
    templateUrl: './ship.component.html',
    styleUrls: ['./ship.component.scss', '../../../styles.scss']
})

export class ShipComponent  {

    @Input() name!: string;
    @Input() size!: number;
    @Input() rotate!: boolean;
    @Input() top!: number;
    @Input() left!: number;
    @Input() x!: number;
    @Input() y!: number;
    @Input() deployed!: boolean;

}