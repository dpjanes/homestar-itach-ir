/*
 *  How to use this module in IOTDB / HomeStar
 *  This is the best way to do this
 *  Note: to work, this package must have been installed by 'homestar install' 
 */

"use strict";

const iotdb = require('iotdb');
iotdb.use("homestar-itach-ir")

const things = iotdb.connect('ir-itach');
things.on("istate", function (thing) {
    console.log("+", "istate", thing.thing_id(), "\n ", thing.state("istate"));
});
things.on("meta", function (thing) {
    console.log("+", "meta", thing.thing_id(), "\n ", thing.state("meta"));
});
things.on("thing", function (thing) {
    console.log("+", "discovered", thing.thing_id(), "\n ", thing.state("meta"));
});
