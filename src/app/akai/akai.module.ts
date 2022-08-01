import {NgModule} from '@angular/core';

import {AkaiRoutingModule} from './akai-routing.module';
import {SharedModule} from "../shared/shared.module";
import {ArticlesComponent} from "./articles/articles.component";
import {ArticleComponent} from "./articles/article/article.component";


@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleComponent
  ],
  imports: [
    SharedModule,
    AkaiRoutingModule,
  ]
})
export class AkaiModule { }
