import { BazookaBlogPage } from './app.po';

describe('bazooka-blog App', function() {
  let page: BazookaBlogPage;

  beforeEach(() => {
    page = new BazookaBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
