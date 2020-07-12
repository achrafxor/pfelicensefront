import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class RegistreserviceService {
	constructor(private http: HttpClient) {}
	postUser(data): any {
		return this.http.post<any>('http://localhost:9854/user/add', data, {
			headers: new HttpHeaders({
				'Content-TYpe': 'application/json'
			})
		});
	}
}
