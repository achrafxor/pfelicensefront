import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ShareholdersService {
	constructor(private http: HttpClient) {}
	getTierlist(): any {
		return this.http.get<any>('http://localhost:9854/Tier/all');
	}
	getLocationList(): any {
		return this.http.get('http://localhost:9854/Location/all');
	}
	posttier(data, location_id): any {
		return this.http.post<any>('http://localhost:9854/Tier/addTier/' + location_id, data, {
			headers: new HttpHeaders({
				'Content-TYpe': 'application/json'
			})
		});
	}
	puttier(data, tier_id, lieu_id): any {
		return this.http.put<any>('http://localhost:9854/Tier/updateTier/' + tier_id + '/' + lieu_id, data, {
			headers: new HttpHeaders({
				'Content-TYpe': 'application/json'
			})
		});
	}
}
