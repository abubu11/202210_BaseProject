import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantaListComponent } from './planta-list/planta-list.component';

@NgModule({
  imports: [CommonModule],
  exports: [PlantaListComponent],
  declarations: [PlantaListComponent],
})
export class PlantaModule {}
