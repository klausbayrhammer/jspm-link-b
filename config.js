System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "none",
  paths: {
    "github:*": "jspm_packages/github/*",
    "jspm:*": "jspm_packages/jspm/*"
  },

  map: {
    "jspm-link-c": "github:klausbayrhammer/jspm-link-c@0.0.1"
  }
});
