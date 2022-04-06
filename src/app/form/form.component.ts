import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  addForm = new FormGroup({
    fname : new FormControl("",[Validators.required]),
    lname : new FormControl("",[Validators.required]),
    email : new FormControl("",[Validators.required]),
    pnum : new FormControl("",[Validators.required]),
    loc : new FormControl("",[Validators.required])
  })

  get fname()
  {
    return this.addForm.get('fname')
  }
  get lname()
  {
    return this.addForm.get('lname')
  }
  get email()
  {
    return this.addForm.get('email')
  }
  get pnum()
  {
    return this.addForm.get('pnum')
  }
  get loc()
  {
    return this.addForm.get('loc')
  }

  onSubmit()
  {
    console.log(this.addForm.value);
  }

}
