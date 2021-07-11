(function(window, document) {
  var matcher = window.matchMedia("(prefers-color-scheme: dark)");
  var userPreference = matcher.matches;
  window.DARK_THEME = false;

  try {
    stored = window.localStorage.getItem("theme");
    window.DARK_THEME = stored
      ? stored === "dark" : userPreference;
  } catch (e) {
  }

  window.SET_DARK_THEME = function (enabled) {
    document.getElementsByTagName("html")[0]
      .setAttribute("class", enabled ? "dark" : "");
    try {
      window.localStorage.setItem("theme", enabled ? "dark" : "light");
    } catch (e) {
    }
    window.DARK_THEME = enabled;
  }
  window.SET_DARK_THEME(window.DARK_THEME);

  matcher.addListener(function() {
    window.SET_DARK_THEME(matcher.matches);
  });
})(window, document);
