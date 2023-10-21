import { Component } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Condition } from 'src/app/models/condition';
import { Sneaker } from 'src/app/models/sneaker';
import { BrandService } from 'src/app/services/brand.service';
import { ConditionService } from 'src/app/services/condition.service';
import { SneakerService } from 'src/app/services/sneaker.service';

@Component({
  selector: 'app-sneaker',
  templateUrl: './sneaker.component.html',
  styleUrls: ['./sneaker.component.css'],
})
export class SneakerComponent {
  sneakers: Sneaker[] = [];
  brands: Brand[] = [];
  conditions: Condition[] = [];
  selected: Sneaker | null = null;
  newSneaker: Sneaker = new Sneaker();

  constructor(
    private sneakerService: SneakerService,
    private brandService: BrandService,
    private conditionService: ConditionService
  ) {}

  ngOnInit(): void {
    this.loadSneakers();
    this.loadBrands();
    this.loadConditions();
  }

  loadSneakers() {
    this.sneakerService.index().subscribe({
      next: (sneakers) => {
        this.sneakers = sneakers;
      },
      error: (oops) => {
        console.error('SneakerComponent.loadSneakers failed loading sneakers');
        console.error(oops);
      },
    });
  }

  loadBrands() {
    this.brandService.index().subscribe({
      next: (brands) => {
        this.brands = brands;
      },
      error: (oops) => {
        console.error('SneakerComponent.loadBrands failed loading brands');
        console.error(oops);
      },
    });
  }

  loadConditions() {
    this.conditionService.index().subscribe({
      next: (conditions) => {
        this.conditions = conditions;
      },
      error: (oops) => {
        console.error('SneakerComponent.loadConditions failed loading conditions');
        console.error(oops);
      },
    });
  }

  addSneaker(sneaker: Sneaker) {
    this.sneakerService.create(sneaker).subscribe({
      next: (sneaker) => {
        this.newSneaker = new Sneaker();
        this.loadSneakers();
      },
      error: (oops) => {
        console.error('SneakerComponent.addSneaker(): error adding sneaker');
        console.error(oops);
      },
    });
  }

  deleteSneaker(id: number) {
    this.sneakerService.destroy(id).subscribe({
      next: (result) => {
        this.loadSneakers();
      },
      error: (oops) => {
        console.error(
          'SneakerComponent.deleteSneaker(): error deleting sneaker'
        );
        console.error(oops);
      },
    });
  }
}
