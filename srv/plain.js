const cds = require('@sap/cds');

class Plain extends cds.ApplicationService {
    init() {
        this.on('theAnswer', req => {
            return 42;
        });
      return super.init()
    };
  };

  module.exports = Plain