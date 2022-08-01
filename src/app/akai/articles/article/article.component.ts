import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  htmlCode = `        <div *ngFor="let hero of superHeroesCarousel$ | async">
            {{ hero.name }}
        </div>`;

  VSimperative = `        // Impérative :
        A = 1;
        B = A + 1;
        C = B + 1;
        A = 100;
        // Résultat :
        A = 100;
        B = 2;
        C = 3`;

  VSdeclarative = `        // Réactive
        A = 1;
        B = A + 1;
        C = B + 1;
        A = 100;
        // Résultat :
        A = 100;
        B = 101;
        C = 102;`;

  imperativeCode = `      search: FormControl = new FormControl('');
      superHeroes: SuperHero[] = [];
      baseUrl: string = 'https://fakeurl.com';

      constructor(private http: HttpClient) {}

      ngOnInit() {
        this.search.valueChanges.subscribe((searchText: string) =>
          this.http.get(this.baseUrl + searchText).subscribe((results) => {
            interval(1500).subscribe((int) => this.superHeroes = results.superHeroes);
          });
        });
      }`;

  reactiveCode = `      search: FormControl = new FormControl('');
      baseUrl: string = 'https://fakeurl.com';

      superHeroes$: Observable${'<\SuperHero[]>'} = this.search.valueChanges.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((searchText: string) => this.http.get(this.baseUrl + searchText))
      );

      triggeredInterval$: Observable${'<any>'} = this.superHeroes$.pipe(
        switchMap((results) => interval(1500))
      );

      superHeroesCarousel$: Observable${'<\SuperHero[]>'} = combineLatest(this.superHeroes$, this.triggeredInterval$).pipe(
        map(([superHeroes, int]) => superHeroes)
      );

      constructor(private http: HttpClient) {}`;

  constructor() {
  }

  ngOnInit(): void {
  }

}
