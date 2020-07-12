import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	constructor(private http: HttpClient) {}
	getProductList(): any {
		return this.http.get<any>('http://localhost:9854/product/getAll');
	}
	postProduct(data): any {
		return this.http.post<any>('http://localhost:9854/product/addProduct/', data, {
			headers: new HttpHeaders({
				'Content-TYpe': 'application/json'
			})
		});
	}
	putProduct(data, product_id): any {
		return this.http.put<any>('http://localhost:9854/product/updateProduct/' + product_id, data, {
			headers: new HttpHeaders({
				'Content-TYpe': 'application/json'
			})
		});
	}
}
