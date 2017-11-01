import { AppPage } from './app.po';

describe('event-registration-form App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display header text', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Event Registration Form');
  });
});
