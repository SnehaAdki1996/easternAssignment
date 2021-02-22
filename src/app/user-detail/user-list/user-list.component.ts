import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/MockData/data';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  search : string = ''
  userDetails 
  constructor() { }

  ngOnInit(): void {
    this.userDetails = UserData.data
    console.log(this.userDetails)
  }
  searchPayList(searchValue) {
    let filterData = [];
    this.search = searchValue.trim().toLowerCase();
    
    if (this.search == "") {
      // this.getBudgetList();
      this.userDetails = UserData.data
    } else {
      filterData = this.userDetails.filter(elem => {
        let id="";
        id= elem.id ? elem.id.toString().includes(this.search) : ""
        let name = "";
        name = elem.name ? elem.name.toLowerCase().includes(this.search) : ""
        let phone = "";
        phone = elem.phone ? elem.phone.toString().includes(this.search) : ""
        let status = ''
        status = elem.payment_status ? elem.payment_status.toLowerCase().includes(this.search) : ''
        let address_line1 = ''
        address_line1 = elem.address.address_line1 ? elem.address.address_line1.toLowerCase().includes(this.search) : ''
        let address_line2 = ''
        address_line2= elem.address.address_line2 ? elem.address.address_line2.toLowerCase().includes(this.search) : ''
        let city = ''
        city = elem.address.city ? elem.address.city.toLowerCase().includes(this.search) : ''
        return (id || phone || name || status || address_line2 || city || address_line1);
      });
      this.userDetails = filterData;
    }
  }

}
