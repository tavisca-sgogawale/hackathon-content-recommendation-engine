import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-travel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './travel.component.html',
  styleUrl: './travel.component.css'
})
export class TravelComponent {
  noOfVisibleCards= 3;
  language= 'en-us';
  dataSource= 'hackathon';
  cardType= 'Ink';
  city ='';
 
  constructor(private readonly route: ActivatedRoute){
    this.cardType = this.route.snapshot.paramMap.get('cardType') ?? '';
    this.city = this.route.snapshot.paramMap.get('city') ?? '';
  }
}
