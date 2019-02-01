import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {

  //Variables used to control what is displayed in the front end of the application
  show_div = false;
  stay_visible = false;
  new_field_count = 0;

  //Variables used to store information returned from the service providers
  risk_fields = [];
  risk_field = [];
  insurers = [];
  risks = [];

  //Constructor used to call all necessary information for the initial information display
  constructor(private api: ApiService) {
  	this.getInsurers();
    this.getRisks();
    this.getRiskField("CarAge")
  }

  // Function to show additional fields div
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

  // FUTURE function that will be used to display the appropriate data field based on field_type selection
  checkFieldType = (select_choice) => {
    if (select_choice == 'options-1')
      return true;
  }

  // Function to call the insurer service provider and return information about all the insurers registered in the app
  getInsurers = () => {
  	this.api.getAllInsurers().subscribe(
  		data => {
  			this.insurers = data;
  		},
  		error => {
  			console.log(error);
  		});
  }

  //Function to return all the risks registered in the app. In FUTURE add insurer_id to search for risk based on insurer id
   getRisks = () => {
    this.api.getAllRisks().subscribe(
      data => {
        this.risks = data;
      },
      error => {
        console.log(error);
      });
  }

  //Function to return all additional risk fields registered in the app
   getRiskFields = () => {
    this.api.getAllRiskFields().subscribe(
      data => {
        this.risk_fields = data;
      },
      error => {
        console.log(error);
      });
  }

  //Function to return a particular risk field based on the additional field's name
  getRiskField = (param) => {
    this.api.getSingleRiskField(param).subscribe(
      data => {
        this.risk_field = data;
        console.log(data)
      },
      error => {
        console.log(error);
      });
  }
}
