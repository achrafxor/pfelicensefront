import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ConcessionserviceService {
	constructor(private http: HttpClient) {}
	getConcessionlist(): any {
		return this.http.get<any>('http://localhost:9854/concession/all');
	}
	postConcession(data, id): any {
		return this.http.post<any>('http://localhost:9854/concession/newconcession/' + id, data, {
			headers: new HttpHeaders({
				'Content-TYpe': 'application/json'
			})
		});
	}
	putConcession(data, id_concession, id_lieu): any {
		return this.http.put<any>(
			'http://localhost:9854/concession/updateconcession/' + id_concession + '/' + id_lieu,
			data,
			{
				headers: new HttpHeaders({
					'Content-TYpe': 'application/json'
				})
			}
		);
	}
}
