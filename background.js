let duplicate = async () => {
  let curWindow = await browser.windows.getCurrent({populate: true});
  let curTab = (await browser.tabs.query({ active: true, windowId: curWindow.id}))[0];
  await browser.tabs.duplicate(curTab.id);
}

browser.browserAction.onClicked.addListener(async () => {
  await duplicate()
});

browser.commands.onCommand.addListener(async command => {
  if (command == "execute") {
    await duplicate()
  }
});