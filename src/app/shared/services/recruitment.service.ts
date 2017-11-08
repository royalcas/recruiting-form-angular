import { environment } from './../../../environments/environment';
import { SubscribeForm } from './../models/subscribe-form.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RecruitmentService {
	url: string = `${environment.apiUrl}/recruitment`;
	constructor(private http: HttpClient) { }

	save(form: SubscribeForm): Observable<any> {
		return this.http.post<any>(this.url, form);
	}

	getAll(): Observable<SubscribeForm[]> {
		return this.http.get<SubscribeForm[]>(this.url);
	}

}
