import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { DeviceData } from '../models/globalmodel';

@Component({
  selector: 'app-devicedetails',
  templateUrl: './devicedetails.component.html',
  styleUrls: ['./devicedetails.component.css']
})
export class DevicedetailsComponent implements OnInit {
  @Input('DeviceData') deviceData:DeviceData;
  @Output() clickDeviceData = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    console.log(this.deviceData);
  }
  onClickDeviceName(name) {
      this.clickDeviceData.emit(name);
  }
}
