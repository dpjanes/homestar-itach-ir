const iotdb = require("iotdb");
const _ = iotdb._;

const cmdd = require("../data/ir-lg-tv.json");

exports.binding = {
    bridge: require('../../ITachIRBridge').Bridge,
    discover: false,
    model: require("./model.json"),
    connectd: {
        data_out: function (paramd) {
            var ir;

            paramd.rawd.irs = [];

            for (var key in paramd.cookd) {
                ir = cmdd[key];
                if (ir) {
                    paramd.rawd.irs.push(ir);
                }
            }

            if (paramd.cookd.band) {
                var band = _.ld.compact(paramd.cookd.band);
                band = band.replace(/^iot-purpose:/, "");
                ir = cmdd[band];
                if (ir) {
                    paramd.rawd.irs.push(ir);
                }
            }
        }
    },
};
