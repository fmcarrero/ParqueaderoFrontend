import { AppPage } from './app.po';

describe('parqueadero-web App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Parqueadero');
  });
});
