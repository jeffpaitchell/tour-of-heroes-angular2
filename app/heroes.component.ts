import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';

import {Hero} from './hero';
import {HeroService} from './hero.service';
import {HeroDetailComponent} from './hero-detail.component';

/* Use backticks for multi-line readable templates*/

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
	  directives: [HeroDetailComponent],
	// providers: [HeroService] 
})


export class HeroesComponent implements OnInit {
	// title = 'Tour of Heroes';
	/*
	hero: Hero = {
		id: 1,
		name: 'windstorm'
	};
	*/
	selectedHero: Hero;
	onSelect(hero: Hero) { this.selectedHero = hero; }
	// heroes = HEROES; 
	heroes: Hero[];

	constructor(private _heroService: HeroService) { }

	getHeroes() {
		this._heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	ngOnInit() {
		this.getHeroes();
	}

}