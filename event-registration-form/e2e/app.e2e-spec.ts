import { AppPage } from './app.po';
import { element, by } from 'protractor';

describe('event-registration-form App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display header text', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Event Registration Form');
  });

  it('should display registrations when navigated to from the front page', () => {
    page.navigateTo();
    element(by.linkText('Registrations')).click();
    expect(page.getPageHeader()).toEqual('Registrations list');
  });

  it('should display registration form when navigated to from the front page', () => {
    page.navigateTo();
    element(by.linkText('New Registration')).click();
    expect(page.getPageHeader()).toEqual('Registration form');
  });
});
