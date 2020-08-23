export default {
  /**
   * In some cases, especially with chrome driver, webdriver click methods do not work properly.
   * When an element is scrolled to and clicked, chromedriver occassionally throws an exception
   * stating that `Element is not clickable at point (x,y)`
   *
   * To work around, we will be implementing native click events when this exception occurs often.
   * Please see https://github.com/webdriverio/webdriverio/issues/2866
   *
   * @param {String} ref - The element selector
   * @returns {null} - the returned value of `browser.execute`, which is null in this case
   */
  scriptClick(ref) {
    return browser.execute(
      (domRef) => {
        document.querySelector(domRef).click();
      },
      [ref]
    );
  },
  /**
   * A convenience utility to wait for an element to exist.
   * Once existing, the element is scrolled to if not already in the viewport
   *
   * We use $(ref) directly instead of setting it to a local variable to prevent StaleElementReferenceException
   *
   * @param {String} ref - The element selector
   * @returns {Element} node - returns the selected webdriver element
   */
  waitAndScrollTo(ref) {
    if (!$(ref).isExisting()) {
      $(ref).waitForDisplayed();
    }

    if (!$(ref).isDisplayedInViewport()) {
      $(ref).scrollIntoView();
    }
    return $(ref);
  },
};
