import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class TournamentService{
    
    url = 'api/v1/tournament';
    
    constructor(http){
        this.http = http;
    }

    get(){
        return this.http.get(this.url);
    }
    
}