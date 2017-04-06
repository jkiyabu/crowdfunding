import { CrowdfundingPage } from './app.po';

describe('crowdfunding App', function() {
  let page: CrowdfundingPage;

  beforeEach(() => {
    page = new CrowdfundingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
