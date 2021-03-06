/*
 *  ITachIR.js
 *
 *  David Janes
 *  IOTDB
 *  2015-06-27
 *
 *  This will just send the "command"
 */

const iotdb = require("iotdb");
const _ = iotdb._;

exports.binding = {
    bridge: require('../../ITachIRBridge').Bridge,
    model: require("./model.json"),
    discover: false
};
