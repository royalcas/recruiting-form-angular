import { SubscribeForm } from './../shared/models/subscribe-form.model';
import { RecruitmentService } from './../shared/services/recruitment.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
	selector: 'app-list-subscribers',
	templateUrl: './list-subscribers.component.html',
	styleUrls: ['./list-subscribers.component.scss']
})
export class ListSubscribersComponent implements OnInit {
	rows: SubscribeForm[] = [];
	temp: SubscribeForm[] = [];

	@ViewChild(DatatableComponent) table: DatatableComponent;

	columns: any = [
		{ prop: 'fullName' },
		{ name: 'phoneNumber' },
		{ name: 'email' }
	];


	constructor(private service: RecruitmentService) { }

	ngOnInit() {
		this.service.getAll().subscribe((items: SubscribeForm[]) => {
			this.rows = items;
			this.temp = items;
		})
	}

	updateFilter(event) {
		const val = event.target.value.toLowerCase();

		// filter our data
		const temp = this.temp.filter(function (d) {
			return d.fullName.toLowerCase().indexOf(val) !== -1 || d.email.toLowerCase().indexOf(val) !== -1 || !val;
		});

		// update the rows
		this.rows = temp;
		// Whenever the filter changes, always go back to the first page
		this.table.offset = 0;
	}

}
