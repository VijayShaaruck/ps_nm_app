import { NetworkFrontEndPage } from './app.po';

describe('network-front-end App', () => {
  let page: NetworkFrontEndPage;

  beforeEach(() => {
    page = new NetworkFrontEndPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
