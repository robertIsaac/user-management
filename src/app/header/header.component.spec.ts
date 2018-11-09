import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {TestModule} from '../test.module';
import {environment} from '../../environments/environment';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [TestModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('navbar in mobile start hidden', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.showNavbar).toEqual(false);
  });

  it('navbar show when click on .navbar-toggler', () => {
    const app = fixture.debugElement.componentInstance;
    const buttonEl = fixture.nativeElement.querySelector('.navbar-toggler');
    buttonEl.click();
    expect(app.showNavbar).toEqual(true);
  });

  it('navbar hide when click twice on .navbar-toggler', () => {
    const app = fixture.debugElement.componentInstance;
    const buttonEl = fixture.nativeElement.querySelector('.navbar-toggler');
    buttonEl.click();
    buttonEl.click();
    expect(app.showNavbar).toEqual(false);
  });

  it('logout remove local storage data', () => {
    const app = fixture.debugElement.componentInstance;
    localStorage.setItem(environment.localStorage.token, 'value');
    expect(localStorage.getItem(environment.localStorage.token)).toEqual('value');
    app.logout();
    expect(localStorage.getItem(environment.localStorage.token)).toEqual(null);
  });
});
