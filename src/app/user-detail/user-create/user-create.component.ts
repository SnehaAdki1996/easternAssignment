import { UserService } from './../user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  @ViewChild('f') createUserForm : NgForm
  editForm : boolean = false;
  defaultName : string = ''
  defaultaddress_line2 : string = ''
  defaultCity : string = ''
  defaultaddress_line1 : string = ''
  defaultNumber : string = ''
  defaultpostal_code : string = ''
  updateID : number;

  constructor(private activatedRoute : ActivatedRoute,
              private router : Router,
              private userService : UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res=>{
      console.log(res)
      if(res['id']){
        this.editForm = true
        this.userService.getUserData(res['id']).subscribe(res=>{
          console.log(res)
          this.updateID = res['id']
          this.defaultName = res['name']
          this.defaultNumber = res['phone']
          this.defaultCity = res['address']['city']
          this.defaultaddress_line1 = res['address']['address_line1']
          this.defaultaddress_line2 = res['address']['address_line2']
          this.defaultpostal_code = res['address']['postal_code']
          // this.createUserForm.setValue({
          //   number :res['phone'] ,
          //   phoneNumber : res['name']
          // })
        })
      }
    })
  }

  onUpdate(){
      let index = this.userService.userDetails.findIndex(x => x.id ===this.updateID);
      this.userService.userDetails[index].address.address_line1 = this.createUserForm.form.value.address.address_line1
      this.userService.userDetails[index].address.address_line2 = this.createUserForm.form.value.address.address_line2
      this.userService.userDetails[index].address.city = this.createUserForm.form.value.address.city
      this.userService.userDetails[index].name = this.createUserForm.form.value.name
      this.userService.userDetails[index].phone = this.createUserForm.form.value.phone
      this.userService.userDetails[index].address.postal_code = this.createUserForm.form.value.address.postal_code
      this.navigateBackToHome()
  }  

  onSubmit(){
    let obj = {
      id : this.userService.userDetails.length+1,
      address : this.createUserForm.form.value.address,
      name : this.createUserForm.form.value.name,
      phone  :this.createUserForm.form.value.phone
    }
  this.userService.userDetails[this.userService.userDetails.length] = obj
  console.log(this.createUserForm.form.value)
  this.navigateBackToHome()
  }

  navigateBackToHome(){
    this.router.navigate([''])
  }
}
