import { Component,Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card',
  imports: [RouterLink,CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  
  @Input() data:any;
  getStarArray(rating: number): boolean[] {
    // Return an array of booleans representing filled and empty stars
    return Array(5)
      .fill(false)
      .map((_, index) => index < rating);
  }

}