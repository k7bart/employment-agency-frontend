import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Area } from '../models/area.model';

@Injectable({ providedIn: 'root' })
export class AreasService {
  private http = inject(HttpClient);

  getAreas() {
    return this.http.get<Area[]>('http://localhost:8080/areas');
  }

  getAreaById(id: Area['_id']) {
    return this.http.get<Area>(`http://localhost:8080/areas/${id}`);
  }

  addArea(area: Area) {
    return this.http.post<Area>('http://localhost:8080/areas', area);
  }
}
