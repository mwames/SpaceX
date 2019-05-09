import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RocketsComponent } from 'src/app/components/rockets/rockets.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormatKey } from './pipes/format-key';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RocketsComponent,
        FormatKey
      ],
      imports: [
          FontAwesomeModule,
          HttpClientTestingModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
