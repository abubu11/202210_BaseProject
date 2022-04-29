import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-planta-list',
  templateUrl: './planta-list.component.html',
  styleUrls: ['./planta-list.component.css'],
})
export class PlantaListComponent implements OnInit {
  plantas: Array<Planta> = [];

  constructor(private plantaService: PlantaService) {}

  getPlantas(): void {
    this.plantaService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
    });
  }

  getPlantasInterior(): number {
    let plantasInterior = 0;
    for (let index = 0; index < this.plantas.length; index++) {
      if (this.plantas[index].tipo == 'Interior') {
        plantasInterior++;
      }
    }
    return plantasInterior;
  }
  getPlantasExterior(): number {
    let plantasExterior = 0;
    for (let index = 0; index < this.plantas.length; index++) {
      if (this.plantas[index].tipo == 'Exterior') {
        plantasExterior++;
      }
    }
    return plantasExterior;
  }

  ngOnInit() {
    this.getPlantas();
    this.getPlantasExterior();
    this.getPlantasInterior();
  }
}
