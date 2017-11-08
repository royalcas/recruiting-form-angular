import { RecruitmentService } from './services/recruitment.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule
	],
	declarations: [],
	providers: [ RecruitmentService]
})
export class SharedModule { }
