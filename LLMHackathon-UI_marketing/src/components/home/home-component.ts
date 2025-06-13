import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {Router} from "@angular/router"

@Component({
  selector: 'app-home-component',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent {
  
  prompt:string | undefined;

  promptList: string[] = [
    "Top 5 Most Booked Hotels for February, March, April 2025:  3-star (or higher) properties in Cancun, Mexico, known as good for family travel. This marketing content/campaign would be used to market for Spring Break family travel in 2026.",
    "Top 5 Most Booked Hotels in 2024 Christmas with 4 stars and above with Highest Margins, This is for specific campaign for Christmas 2025.",
    "Top 5 Most Booked in Hotels in last 5 years in Christmas with 5 stars, This is for specific campaign for Premium travellers in Christmas 2025."
  ];

  constructor( private router: Router) {}

  generatePrompt(val:string){
    console.log(val);
    this.prompt = val;
    console.log(this.prompt);
    this.prompt='';
    this.router.navigate(['/list'])
    
  }


  SetText(val:string){
    this.prompt = val;
    console.log(this.prompt);
  }
}
