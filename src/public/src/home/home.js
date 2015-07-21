import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Home{
    
    users = [];

    constructor(http){
        this.http = http;
    }

    activate(){
        return this.http.get('/api/v1/user').then(response => {
			this.users = response.content;
		});
    }
   
}