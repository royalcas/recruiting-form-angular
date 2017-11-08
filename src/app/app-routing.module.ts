import { ListSubscribersComponent } from './list-subscribers/list-subscribers.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
	{
		path: 'subscribe',
		component: SubscribeComponent
	},
	{
		path: 'list',
		component: ListSubscribersComponent
	},
	{
		path: '',
		component: SubscribeComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	],
	declarations: []
})
export class AppRoutingModule {
}
