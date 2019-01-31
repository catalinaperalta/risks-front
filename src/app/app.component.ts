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
  show_div = false;
  stay_visible = false;
  new_field_count = 0;
  risk_fields = [];
  risk_field = [];
  insurers = [];
  risks = [];

  constructor(private api: ApiService) {
  	this.getInsurers();
    this.getRisks();
  }

  checkAddField = () => {
    this.new_field_count += 1;
    
    if (this.stay_visible)
    {
      return this.show_div;
    }
    else 
    {
      this.stay_visible = true;
     this.show_div = !this.show_div;
     return this.show_div;
    }
     
  }

  checkFieldType = (select_choice) => {
    if (select_choice == 'options-1')
      return true;
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
