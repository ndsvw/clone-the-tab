let duplicate = async () => {
  let currentWindow = await browser.windows.getCurrent({populate: true});
  let currentTab = (await browser.tabs.query({ active: true, windowId: currentWindow.id}))[0];
  await browser.tabs.duplicate(currentTab.id);
};

browser.browserAction.onClicked.addListener(async () => {
  await duplicate();
});

browser.commands.onCommand.addListener(async command => {
  if (command == "execute") {
    await duplicate();
  }
});