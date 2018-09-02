let duplicate = async () => {
  let cur = await browser.tabs.query({ active: true });
  await browser.tabs.create({ url: cur[0].url });
}

browser.browserAction.onClicked.addListener(async () => {
  await duplicate()
});

browser.commands.onCommand.addListener(async command => {
  if (command == "execute") {
    await duplicate()
  }
});