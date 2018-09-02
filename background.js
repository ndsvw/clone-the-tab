let duplicate = async () => {
  let cur = await browser.tabs.query({ active: true });
  await browser.tabs.duplicate(cur[0].id);
}

browser.browserAction.onClicked.addListener(async () => {
  await duplicate()
});

browser.commands.onCommand.addListener(async command => {
  if (command == "execute") {
    await duplicate()
  }
});