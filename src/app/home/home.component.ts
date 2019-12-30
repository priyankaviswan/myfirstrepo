import { Component, OnInit } from '@angular/core';
import { DeviceData } from '../models/globalmodel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  deviceArray:DeviceData[] = [];
  
  constructor() { }

  ngOnInit(){
    this.deviceArray.push(new DeviceData("Samsung","s8",new Date(),"EY","priyanka"),
    new DeviceData("iPhone","6",new Date(),"EY","Rahul"),
    new DeviceData("iPhone","8",new Date(),"EY","srikant"),
    new DeviceData("iPhone","XR",new Date(),"EY","avijith"),
    new DeviceData("Redmi","note7",new Date(),"EY","sajeev"),
    new DeviceData("Redmi","notepro",new Date(),"EY","anu")
    );
  }

  onDeviceDataClicked(event){
    console.log(name);
  }
 
}
