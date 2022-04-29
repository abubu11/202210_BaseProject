/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlantaListComponent } from './planta-list.component';
import { faker } from '@faker-js/faker';
import { Planta, TipoPlanta } from '../planta';
import { HttpClientModule } from '@angular/common/http';
import { PlantaService } from '../planta.service';

describe('PlantaListComponent', () => {
  let component: PlantaListComponent;
  let fixture: ComponentFixture<PlantaListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PlantaListComponent],
      providers: [PlantaService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaListComponent);
    component = fixture.componentInstance;

    function createFakePlanta(): Planta {
      return new Planta(
        faker.datatype.number(),
        faker.lorem.word(),
        faker.lorem.word(),
        TipoPlanta.INTERIOR,
        faker.datatype.number(),
        faker.lorem.word(),
        faker.lorem.sentence()
      );
    }

    component.plantas = [
      createFakePlanta(),
      createFakePlanta(),
      createFakePlanta(),
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display three plants', () => {
    const plantElements = debug.queryAll(By.css('.table-group-item-action'));
    expect(plantElements.length).toBe(3);
  });
});
