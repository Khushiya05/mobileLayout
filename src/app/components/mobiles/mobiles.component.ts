import { Component, OnInit } from '@angular/core';
import { mobileProducts } from 'src/app/const/const';
import { ImobileProduct } from 'src/app/interface/interface';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.scss']
})
export class MobilesComponent implements OnInit {
isnotAvl! :boolean;
  constructor() { }
mobileData:Array<ImobileProduct>=mobileProducts
  ngOnInit(): void {
    this.isnotAvl=false
  }

}
