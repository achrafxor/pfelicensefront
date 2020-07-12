import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class WellService {
	constructor(private http: HttpClient) {}
	getWellList(): any {
		return this.http.get<any>('http://localhost:9854/well/all');
	}
	getConcessionlist(): any {
		return this.http.get<any>('http://localhost:9854/concession/all');
	}
	postWell(data, concession_id): any {
		return this.http.post<any>('http://localhost:9854/well/addWell/' + concession_id, data, {
			headers: new HttpHeaders({
				'Content-TYpe': 'application/json'
			})
		});
	}
	putwell(data, well_id, concession_id): any {
		return this.http.put<any>(
			'http://localhost:9854/well/updateWell/' + '/' + well_id + '/' + concession_id,
			data,
			{
				headers: new HttpHeaders({
					'Content-TYpe': 'application/json'
				})
			}
		);
	}
}
