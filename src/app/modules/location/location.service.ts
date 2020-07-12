import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class LocationService {
	constructor(private http: HttpClient) {}
	getLocationList(): any {
		return this.http.get('http://localhost:9854/Location/all');
	}

	postLocation(data): any {
		return this.http.post<any>('http://localhost:9854/Location/addLocation/', data, {
			headers: new HttpHeaders({
				'Content-TYpe': 'application/json'
			})
		});
	}
	putLocation(data, location_id): any {
		return this.http.put<any>('http://localhost:9854/Location/updateLocation/' + location_id, data, {
			headers: new HttpHeaders({
				'Content-TYpe': 'application/json'
			})
		});
	}
}
