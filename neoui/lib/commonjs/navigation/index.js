"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Screen = require("./Screen");
Object.keys(_Screen).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Screen[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Screen[key];
    }
  });
});
//# sourceMappingURL=index.js.map