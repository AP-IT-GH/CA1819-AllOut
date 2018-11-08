import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlloutProvider, Game } from '../../providers/AlloutAPI/AlloutAPI';

@Component({
    selector: 'page-joingame',
    templateUrl: 'joingame.page.html'
})

export class JoinGamePage {
    games:Game;
    
    constructor(private _svc:AlloutProvider){
    }

    ngOnInit(){
        this._svc.getAllGames().subscribe(result =>{
            this.games = result;
        });
    }
}
