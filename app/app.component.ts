import { Component } from 'angular2/core';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
	selector: 'my-app',
	template: `
	<h1>{{title}}</h1>
	<a [routerLink]="['Dashboard']">Dashboard</a>
	<a [routerLink]="['Heroes']">Heroes</a>
	<router-outlet></router-outlet>
	<my-heroes></my-heroes>
	`,
	directives: [ROUTER_DIRECTIVES],
	providers: [
	ROUTER_PROVIDERS,
	HeroService
	]
})

@RouteConfig([
		{
			path:  '/dashboard',
			name: 'Dashboard',
			component: DashboardComponent,
			useAsDefault: true
		},
		{
			path: '/detail/:id',
			name : 'HeroDetail',
			component: HeroDetailComponent
		},
		{
			path: '/heroes',
			name: 'Heroes',
			component: HeroesComponent
		}
	])

export class AppComponent {
	title = 'Tour of Heroes';
}