import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDatatableModule  } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
	MatCardModule,
	MatCheckboxModule,
	MatDatepickerModule,
	MatMenuModule,
	MatIconModule,
	MatFormFieldModule,
	MatButtonModule,
	MatToolbarModule,
	MatSnackBarModule,
	MatNativeDateModule,
	MatInputModule,
	MatSidenavModule,
	DateAdapter
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgComponent } from './ng/ng.component';
import { SignaturePadModule } from 'angular2-signaturepad';
import { ListSubscribersComponent } from './list-subscribers/list-subscribers.component';

@NgModule({
	declarations: [
		AppComponent,
		SubscribeComponent,
		NgComponent,
		ListSubscribersComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FlexLayoutModule,
		MatCardModule,
		MatCheckboxModule,
		MatDatepickerModule,
		MatMenuModule,
		MatIconModule,
		MatSidenavModule,
		MatFormFieldModule,
		MatButtonModule,
		MatToolbarModule,
		MatSnackBarModule,
		MatInputModule,
		MatNativeDateModule,
		MatButtonModule,
		MatCheckboxModule,
		NgxDatatableModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		SignaturePadModule,
		ReactiveFormsModule,
		SharedModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
