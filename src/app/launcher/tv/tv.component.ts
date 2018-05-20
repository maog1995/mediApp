import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-tv',
    templateUrl: './tv.component.html',
    styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
    items: Observable<any[]>;

    constructor(db: AngularFirestore) {
        this.items = db.collection('tvChannel', ref => ref.orderBy('position')).valueChanges();
    }

    ngOnInit() {
    }

    setSelected(channel) {
        window.sessionStorage.setItem('m3u8Link', channel.m3u8Link);
        window.location.href = 'tv/view';
    }
}
