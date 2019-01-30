import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  title = 'front';

  risk = {}
  risks = [{name: 'Car', amount: 10000}];
  risk_fields = [{name: 'Car', amount: 10000}];
  risk_field = [{name: 'Car', amount: 10000}];
  insurers = [{name: 'Car', amount: 10000}];

  constructor(private api: ApiService) {
  	this.getInsurers();
    this.getRisks();
    /*this.getRiskFields();*/

    /*console.log(this.risks)*/

    /*this.risk["prev"] = risk[0].risk.id;
    @Component.angular.forEach(this.risk_fields, function(value, key) {
      if (value.risk.id == this.risk["prev"])
      this.risk.push(key + ': ' + value);
    }, log)*/;
  }

  getInsurers = () => {
  	this.api.getAllInsurers().subscribe(
  		data => {
  			this.insurers = data;
  		},
  		error => {
  			console.log(error);
  		});
  }

   getRisks = () => {
    this.api.getAllRisks().subscribe(
      data => {
        this.risks = data;
      },
      error => {
        console.log(error);
      });
  }

   getRiskFields = () => {
    this.api.getAllRiskFields().subscribe(
      data => {
        this.risk_fields = data;
      },
      error => {
        console.log(error);
      });
  }

  getRiskField = (id) => {
    this.api.getSingleRiskField(id).subscribe(
      data => {
        this.risk_field = data;
        console.log(data)
      },
      error => {
        console.log(error);
      });
  }
}
