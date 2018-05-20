import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

    m3u8Link = window.sessionStorage.getItem('m3u8Link');

    constructor() {
    }

    ngOnInit() {
        // document.getElementsByTagName('video')[0].click();
    }

}
