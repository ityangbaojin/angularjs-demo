it('should load and compile correct template', function() {
  element(by.linkText('Moby: Ch1')).click();
  var content = element(by.css('[ng-views]')).getText();
  expect(content).toMatch(/controller\: ChapterCtrl/);
  expect(content).toMatch(/Book Id\: Moby/);
  expect(content).toMatch(/Chapter Id\: 1/);

  element(by.partialLinkText('Scarlet')).click();

  content = element(by.css('[ng-views]')).getText();
  expect(content).toMatch(/controller\: BookCtrl/);
  expect(content).toMatch(/Book Id\: Scarlet/);
});