import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DefaultModule } from './layouts/default/default.module';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ConcessionComponent } from './modules/concession/concession.component';
import { UserComponent } from './modules/user/user.component';
import { ProductionComponent } from './modules/production/production.component';
import { WellComponent } from './modules/well/well.component';
import { ProductComponent } from './modules/product/product.component';
import { LocationComponent } from './modules/location/location.component';
import { ShareholdersComponent } from './modules/shareholders/shareholders.component';
import { ReserveComponent } from './modules/reserve/reserve.component';
import { PartComponent } from './modules/part/part.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';

const routes: Routes = [
	{
		path: '',
		component: DefaultComponent,
		children: [
			{
				path: '',
				component: DashboardComponent
			},
			{
				path: 'concession',
				component: ConcessionComponent
			},
			{
				path: 'user',
				component: UserComponent
			},
			{
				path: 'production',
				component: ProductionComponent
			},
			{
				path: 'well',
				component: WellComponent
			},
			{
				path: 'product',
				component: ProductComponent
			},
			{
				path: 'location',
				component: LocationComponent
			},
			{
				path: 'shareholders',
				component: ShareholdersComponent
			},
			{
				path: 'reserve',
				component: ReserveComponent
			},
			{
				path: 'part',
				component: PartComponent
			},
			{
				path: 'login',
				component: LoginComponent
			},
			{
				path: 'register',
				component: RegisterComponent
			}
		]
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
