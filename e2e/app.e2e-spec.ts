import { GhAppPage } from './app.po';

describe('gh-app App', function() {
  let page: GhAppPage;

  beforeEach(() => {
    page = new GhAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
