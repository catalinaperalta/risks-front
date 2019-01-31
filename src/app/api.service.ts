import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

	baseurl_dev = "http://localhost:8000";
	baseurl = "https://peaceful-lake-83171.herokuapp.com";
	url = "";
	
	httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  	constructor(private http: HttpClient) { }

	getAllInsurers(): Observable<any>{
		return this.http.get(this.baseurl + '/api/insurers/', {headers: this.httpHeaders});
	}

	getAllRisks(): Observable<any>{
		return this.http.get(this.baseurl + '/api/risks/', {headers: this.httpHeaders});
	}

	getSingleRiskField(id): Observable<any>{
		this.url = this.baseurl + '/api/riskfields/?search='+id;
		console.log(this.url);
		return this.http.get(this.url, {headers: this.httpHeaders});
	}

	getAllRiskFields(): Observable<any>{
		return this.http.get(this.baseurl + '/api/riskfields/', {headers: this.httpHeaders});
	}
}