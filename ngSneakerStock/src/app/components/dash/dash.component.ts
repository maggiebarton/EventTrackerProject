import { Component, OnInit, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { BrandService } from 'src/app/services/brand.service';
import { ConditionService } from 'src/app/services/condition.service';
import { SneakerService } from 'src/app/services/sneaker.service';
import { Brand } from 'src/app/models/brand';
import { Condition } from 'src/app/models/condition';
import { Sneaker } from 'src/app/models/sneaker';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
})
export class DashComponent implements OnInit {
  sneakers: Sneaker[] = [];
  brands: Brand[] = [];
  conditions: Condition[] = [];
  totalCount: number = 0;
  mostPopularBrand: string = '';
  avgCondition: string = '';

  constructor(private sneakerService: SneakerService) {}

  ngOnInit(): void {
    this.loadSneakers();
  }

  loadSneakers() {
    this.sneakerService.index().subscribe({
      next: (sneakers) => {
        this.sneakers = sneakers;
        this.totalCount = sneakers.length;
        this.findMostPopularBrand(sneakers);
        this.findAvgCondition(sneakers);
      },
      error: (oops) => {
        console.error('DashComponent.loadSneakers failed loading sneakers');
        console.error(oops);
      },
    });
  }

  findMostPopularBrand(sneakers: Sneaker[]) {
    let maxCount = 0;
    for (let i = 0; i < sneakers.length; i++) {
      let count = 0;
      for (let j = 0; j < sneakers.length; j++){
        if (sneakers[i].brand.name == sneakers[j].brand.name){
          count++;
        }
      }
      if (count > maxCount) {
        maxCount = count;
        this.mostPopularBrand = sneakers[i].brand.name;
      }
    }
  }

  findAvgCondition(sneakers: Sneaker[]) {
    let maxCount = 0;
    for (let i = 0; i < sneakers.length; i++) {
      let count = 0;
      for (let j = 0; j < sneakers.length; j++){
        if (sneakers[i].condition.title == sneakers[j].condition.title){
          count++;
        }
      }
      if (count > maxCount) {
        maxCount = count;
        this.avgCondition = sneakers[i].condition.title;
      }
    }
  }

}
