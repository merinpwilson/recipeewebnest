import { Component} from '@angular/core';
import { CardComponent } from "../../ui/card/card.component";
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone:true,
  imports: [CardComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  data:any=[];
  
  constructor(private api: ApiService) { }

  
  ngOnInit() {
    this.api.getProducts().subscribe((res:any) => {
      this.data = res.recipes;
      console.log(this.data);
      
    });
  }

}