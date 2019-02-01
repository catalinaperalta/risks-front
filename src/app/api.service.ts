import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

	//Base urls for development and production environments
	baseurl_dev = "http://localhost:8000";
	baseurl = "https://peaceful-lake-83171.herokuapp.com";
	url = "";
	
	//HTTP headers sent with each request
	httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  	constructor(private http: HttpClient) { }

  	//Service to get all insurer information registered in the app
	getAllInsurers(): Observable<any>{
		return this.http.get(this.baseurl + '/api/insurers/', {headers: this.httpHeaders});
	}

	//Service to get all information related to risks
	getAllRisks(): Observable<any>{
		return this.http.get(this.baseurl + '/api/risks/', {headers: this.httpHeaders});
	}

	//Service to return information related to one particular risk field
	getSingleRiskField(param): Observable<any>{
		this.url = this.baseurl + '/api/riskfields/?search='+param;
		console.log(this.url);
		return this.http.get(this.url, {headers: this.httpHeaders});
	}

	//Service to return all additional risk fields that have been registered in the app
	getAllRiskFields(): Observable<any>{
		return this.http.get(this.baseurl + '/api/riskfields/', {headers: this.httpHeaders});
	}
}