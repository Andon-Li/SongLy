browser.browserAction.onClicked.addListener(function (tab) {
  console.log("nice!")
  browser.tabs.executeScript(tab.id,
  console.log("nice!!!")
  )
});
