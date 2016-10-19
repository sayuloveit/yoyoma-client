import { YoyomaUiPage } from './app.po';

describe('yoyoma-ui App', function() {
  let page: YoyomaUiPage;

  beforeEach(() => {
    page = new YoyomaUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
