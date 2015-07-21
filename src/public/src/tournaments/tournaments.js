import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {TournamentService} from '../services/TournamentService';

@inject(HttpClient, TournamentService)
export class Tournaments{
    
    tournaments = [];

    constructor(http, TournamentService){
        this.http = http;
        this.TournamentService = TournamentService;
    }
    
    activate(){
        this.TournamentService.get().then(response => this.tournaments = response.contents);
    }
}