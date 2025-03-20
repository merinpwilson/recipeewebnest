import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  constructor(private activated: ActivatedRoute, private api: ApiService) { }
  product: any;
  ngOnInit(): void {
    let id = this.activated.snapshot.paramMap.get("id");

    this.api.getProductsById(id).subscribe((res: any) => {
      this.product = res;
      console.log(this.product);
      

    });
  }

}