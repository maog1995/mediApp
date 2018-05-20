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

    function;

    cambiarVideo(url) {
        videojs('my_video_1_html5_api').src({
            src: url,
            type: 'application/x-mpegURL',
            withCredentials: true
        });
        videojs('my_video_1_html5_api').play();
    }
}
