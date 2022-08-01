import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  htmlCode = `
        <div *ngFor="let hero of superHeroesCarousel$ | async">
            {{ hero.name }}
        </div>`;

  constructor() { }

  ngOnInit(): void {
  }

}
