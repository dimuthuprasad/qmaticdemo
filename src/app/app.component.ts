import { LANGUAGE_CHANGE } from './../redux/language-change.reducer';
import { IRoute } from './../models/route';
import { Store } from '@ngrx/store';
import { AppState } from './../redux/app-state';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  route: Observable<IRoute>;

  constructor(private translate: TranslateService, private store: Store<AppState> ) {
    this.translate.setDefaultLang('en');
    this.route = this.store.select( state => state.language);
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.store.dispatch( {
      type :LANGUAGE_CHANGE,
      payload: language
    });
  }
}
