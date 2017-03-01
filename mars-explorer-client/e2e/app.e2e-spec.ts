import { MarsExplorerClientPage } from './app.po';

describe('mars-explorer-client App', () => {
  let page: MarsExplorerClientPage;

  beforeEach(() => {
    page = new MarsExplorerClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
