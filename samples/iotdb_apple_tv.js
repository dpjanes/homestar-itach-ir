/*
 *  How to use this module in IOTDB / HomeStar
 *  This is the best way to do this
 *  Note: to work, this package must have been installed by 'homestar install' 
 */

"use strict";

const iotdb = require('iotdb');
iotdb.use("homestar-itach-ir")

const command = ":media.exit";
if (process.argv.length > 2) {
    command = ":media." + process.argv[2];
}

const things = iotdb.connect('IRAppleTV');
things.on("thing", function (thing) {
    console.log("+", "discovered", thing.thing_id(), "\n ", thing.state("meta"));

    things.set(command, true);
    setTimeout(process.exit, 2 * 1000);
});
things.on("meta", function (thing) {
    console.log("+", "meta", thing.thing_id(), "\n ", thing.state("meta"));
});
