# homestar-itach
[IOTDB](https://github.com/dpjanes/node-iotdb) Bridge for [iTach IR](http://www.globalcache.com/products/itach/wf2irspecs/) Controllers

# About 

This will let you send IR commands to devices.

* [Read about Bridges](https://github.com/dpjanes/node-iotdb/blob/master/docs/bridges.md)

## Links

* [http://www.globalcache.com/products/itach/wf2irspecs/](Global Cache iTach)
* [https://irdb.globalcache.com/](IR codes)


# Installation

* [Read this first](https://github.com/dpjanes/node-iotdb/blob/master/docs/install.md)

Then:

    $ npm install homestar-itach

# Use

## Turn on LG Smart TV

This demonstrates just using the command. This form
is pretty useful if you just want to blast some IR

    const iotdb = require("iotdb")
    iotdb.use("homestar-itach-ir")

    const things = iotdb.connect('ir-itach')
    things.set(":command", "sendir,1:1,1,38000,1,69,343,172,21,22,21,22,21,65,21,22,21,22,21,22,21,22,21,22,21,65,21,65,21,22,21,65,21,65,21,65,21,65,21,65,21,22,21,22,21,65,21,22,21,22,21,22,21,65,21,65,21,65,21,65,21,22,21,65,21,65,21,65,21,22,21,22,21,1673,343,86,21,3732");

## Turn on LG Smart TV - better way

This demonstrates with a Model. Note this Model only does one thing, 
turn on the TV. The [LG Smart TV](https://github.com/dpjanes/homestar-lg-smart-tv)
Module can handle the rest.

    const iotdb = require("iotdb")
    iotdb.use("homestar-itach-ir")

    const things = iotdb.connect('ir-lg-tv-on')
    things.set(":on", true);
