import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ProductionService {
	constructor(private http: HttpClient) {}
	getProductionlist(): any {
		return this.http.get<any>('http://localhost:9854/Production/all');
	}
	getConcessionlist(): any {
		return this.http.get<any>('http://localhost:9854/concession/all');
	}
	getProductList(): any {
		return this.http.get<any>('http://localhost:9854/product/getAll');
	}
	getWellList(): any {
		return this.http.get<any>('http://localhost:9854/well/all');
	}
	postProduction(data, concession_id, product_id, well_id): any {
		return this.http.post<any>(
			'http://localhost:9854/Production/newProductionLine/' + concession_id + '/' + product_id + '/' + well_id,
			data,
			{
				headers: new HttpHeaders({
					'Content-TYpe': 'application/json'
				})
			}
		);
	}
	putProduction(data, production_id, concession_id, product_id, well_id): any {
		return this.http.put<any>(
			'http://localhost:9854/Production/updateProductionLine/' +
				production_id +
				'/' +
				concession_id +
				'/' +
				product_id +
				'/' +
				well_id,
			data,
			{
				headers: new HttpHeaders({
					'Content-TYpe': 'application/json'
				})
			}
		);
	}
}
