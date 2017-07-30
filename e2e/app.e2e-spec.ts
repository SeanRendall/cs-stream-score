import { CsStreamScoreboardPage } from './app.po';

describe('cs-stream-scoreboard App', () => {
  let page: CsStreamScoreboardPage;

  beforeEach(() => {
    page = new CsStreamScoreboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
