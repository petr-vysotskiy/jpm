
var xpi = require("./xpi");
var createProfile = require("./profile");
var runFirefox = require("./firefox");

function run (manifest, options) {
  // Generate XPI and get the path
  console.log("creating the xpi");
  return xpi(manifest, options).then(function (xpiPath) {
    // Create a profile so we can instantiate an instance
    // of Firefox using the profile with the add-on installed
    console.log("creating the profile");
    return createProfile({
      xpi: xpiPath
    });
  }).then(function (profilePath) {
    return runFirefox({
      profile: profilePath,
      binary: options.binary
    });
  }).then(function (proc) {

  });
}
module.exports = run;