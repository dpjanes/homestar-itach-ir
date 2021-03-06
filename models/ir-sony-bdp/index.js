/*
 *  IRSonyBDP.js
 *
 *  David Janes
 *  IOTDB
 *  2015-06-29
 */

const iotdb = require("iotdb");
const _ = iotdb._;

const cmdd = require("../data/ir-sony-bdp.json");

cmdd["media.pause"] = cmdd["media.play"];

exports.binding = {
    bridge: require('../../ITachIRBridge').Bridge,
    model: require("./model.json"),
    discover: false,
    metad: {
        "schema:name": "Sony BDP BluRay Player",
    },
    connectd: {
        data_out: function (paramd) {
            paramd.rawd.irs = [];

            for (var key in paramd.cookd) {
                var ir = cmdd[key];
                if (ir) {
                    paramd.rawd.irs.push(ir);
                }
            }
        }
    },
};
