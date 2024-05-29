import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Entity } from './interfaces/entity';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'lab1-2f';
  entityList: Entity[] = [];
  service: any;

  getEntities(): void {

    this.service.getEntities().subscribe(

      (entities: Entity[]) => {
        this.entityList = entities;
      }
    )
  }

  }