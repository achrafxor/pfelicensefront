import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PartserviceService {
	constructor(private http: HttpClient) {}
	getPartList(): any {
		return this.http.get<any>('http://localhost:9854/Part/all');
	}
}
