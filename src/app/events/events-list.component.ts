import { Component } from "@angular/core";

@Component({
    selector:'events-list',
    templateUrl:'events.component.html',

})
export class EventsListComponent{
    event = {
        id:1,
        name:'Angular connect',
        date:'16/10/2000',
        time:"10:10 am",
        price: 500.00,
        imageUrl : '../../assets/images/',
        location: {
            address : '1028 DT',
            city: 'London',
            country : 'England'
        }

    }
}