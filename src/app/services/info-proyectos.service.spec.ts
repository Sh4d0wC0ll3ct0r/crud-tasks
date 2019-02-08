import { TestBed } from '@angular/core/testing';

import { InfoProyectosService } from './info-proyectos.service';

describe('InfoProyectosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoProyectosService = TestBed.get(InfoProyectosService);
    expect(service).toBeTruthy();
  });
});
