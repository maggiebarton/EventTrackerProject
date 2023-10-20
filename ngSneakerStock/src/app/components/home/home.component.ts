import { Component, OnInit } from '@angular/core';
import { Sneaker } from 'src/app/models/sneaker';
import { SneakerService } from 'src/app/services/sneaker.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  sneakers: Sneaker[] = [];
  selected: Sneaker | null = null;

  constructor(private sneakerService: SneakerService) {}

  ngOnInit(): void {
    this.loadSneakers();
  }

  loadSneakers() {
    this.sneakerService.index().subscribe({
      next: (sneakers) => {
        this.sneakers = sneakers;
      },
      error: (oops) => {
        console.error('HomeComponent.loadSneakers failed loading sneakers');
        console.error(oops);
      },
    });
  }
}
