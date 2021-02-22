import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/MockData/data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  search : string = ''
  userDetails 
  constructor(private router : Router,
              private userService : UserService) { }

  ngOnInit(): void {
    this.userDetails = this.userService.userDetails
    console.log(this.userDetails)
    this.validatePhoneNumber()
  }

  validatePhoneNumber(){
    this.userDetails.map(ele => {
      this.userDetails[this.userDetails.indexOf(ele)].phone = +ele.phone ? parseInt(ele.phone) : "NA" 
    })
  }

  searchPayList(searchValue) {
    let filterData = [];
    this.search = searchValue.trim().toLowerCase();
    
    if (this.search == "") {
      // this.getBudgetList();
      this.userDetails = UserData.data
    } else {
      filterData = this.userDetails.filter(elem => {
        // let id="";
        // id= elem.id ? elem.id.toString().includes(this.search) : ""
        let name = "";
        name = elem.name ? elem.name.toLowerCase().includes(this.search) : ""
        // let phone = "";
        // phone = elem.phone ? elem.phone.toString().includes(this.search) : ""
        // let status = ''
        // status = elem.payment_status ? elem.payment_status.toLowerCase().includes(this.search) : ''
        // let address_line1 = ''
        // address_line1 = elem.address.address_line1 ? elem.address.address_line1.toLowerCase().includes(this.search) : ''
        // let address_line2 = ''
        // address_line2= elem.address.address_line2 ? elem.address.address_line2.toLowerCase().includes(this.search) : ''
        let city = ''
        city = elem.address.city ? elem.address.city.toLowerCase().includes(this.search) : ''
        return (name || city );
      });
      this.userDetails = filterData;
    }
  }

  navigateToAddUser(){
    this.router.navigate(['userData/add'])
  }

  navigateToEdit(event){
    console.log(event)
    this.router.navigate([`userData/${event.id}/edit`])
  }
}
