import { Component, input } from '@angular/core';
import { Template } from '../../models/template.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as fs from 'fs';

@Component({
  selector: 'app-list-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './list-component.html',
  styleUrl: './list-component.css'
})
export class ListComponent {

  tempArr: any[] = [];
  input: number = 0
  select: string = "Hotel List";
  publishStatus: boolean = false;
  listResult: Template[] = [
    {
      code: 101,
      countryCode: "IND",
      countryName: "India",
      stateCode : "TN",
      state : "Tamil Nadu",
      cityCode: 44,
      cityName: "Chennai",
      rating: 4.5,
      name: "Grand Ocean Hotel",
      imageUrl: '../../assets/images/Hotel1.jpg',
      description: "A luxurious 5-star beachfront hotel offering world-class amenities and breathtaking ocean views.",
      isActive: true
    },
    {
      code: 102,
      countryCode: "IND",
      countryName: "India",
      stateCode : "TN",
      state : "Tamil Nadu",
      cityCode: 44,
      cityName: "Chennai",
      rating: 4.5,
      name: "Grand Ocean Hotel",
      imageUrl: '../../assets/images/Hotel2.jpg',
      description: "A luxurious 5-star beachfront hotel offering world-class amenities and breathtaking ocean views.",
      isActive: true
    },
    {
      code: 103,
      countryCode: "IND",
      countryName: "India",
      stateCode : "TN",
      state : "Tamil Nadu",
      cityCode: 44,
      cityName: "Chennai",
      rating: 4.5,
      name: "Grand Ocean Hotel",
      imageUrl: '../../assets/images/Hotel3.jpg',
      description: "A luxurious 5-star beachfront hotel offering world-class amenities and breathtaking ocean views.",
      isActive: true
    },
    {
      code: 104,
      countryCode: "IND",
      countryName: "India",
      stateCode : "TN",
      state : "Tamil Nadu",
      cityCode: 44,
      cityName: "Chennai",
      rating: 4.5,
      name: "Grand Ocean Hotel",
      imageUrl: '../../assets/images/Hotel4.jpg',
      description: "A luxurious 5-star beachfront hotel offering world-class amenities and breathtaking ocean views.",
      isActive: true
    }
  ];

  PublishHotels() {
      const filePath = '../../../filteredData.json'; // Specify the path where you want to save the file

      // for (var val of this.tempArr) {
      //   console.log(val); // prints values: 10, 20, 30, 40
      //   var data = this.listResult.filter(item => filterArray.includes(item.id));
      //   fs.writeFile(filePath, val, (err) => {
      //     if (err) {
      //       console.error('Error writing to file:', err);
      //     } else {
      //       console.log('Data written to file successfully.');
      //     }
      //   });

      //}

      const filteredData = this.listResult.filter(item => this.tempArr.includes(item.code));
      
      // fs.writeFile('../../../filteredData.json', JSON.stringify(filteredData, null, 2), 'utf-8', (err) => {
      //  if (err) {
      //    console.error('Error writing to file:', err);
      //  } else {
      //    console.log('JSON data written to file successfully.');
      //  }
      //});

      const file = new Blob([JSON.stringify(filteredData, null, 2)], { type: 'application/json' });
      const fileURL = URL.createObjectURL(file);
      const a = document.createElement('a');
      a.href = fileURL;
      a.download = 'filteredData.json';
      document.body.appendChild(a);
      a.click();  
      console.log(filteredData);
      this.publishStatus=true
      // Logic to publish hotels can be added here
  }

    onChange( event: any, cat:number|undefined){ // Use appropriate model type instead of any
      // if(isChecked) {
      //   this.tempArr.push(cat.name);
      // } else {
      //   let index = this.listResult.indexOf(email);
      //   this.tempArr.splice(index,1);
      // }
    
      this.tempArr.push(cat);
      console.log("Selected Categories: ", cat, event.target.checked);
    }

}
