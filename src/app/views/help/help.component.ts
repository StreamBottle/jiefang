import { Component, OnInit, NgZone,Input,Output ,EventEmitter} from '@angular/core';
import { AppService } from '../../index/app.service';


declare var $: any;

@Component({
    selector: 'magotan-help',
    providers: [
    ],
    templateUrl: './help.component.html',
    styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
    @Input() values;
    @Output() childEvent = new EventEmitter<any>();

    constructor() {}

    // 生命周期钩子函数
    ngOnInit() {

    }

    return() {
        this.childEvent.emit(this.values);
    }
    

}
