const cds = require('@sap/cds');

class Basic extends cds.ApplicationService {
    init() {
        this.on('ping', req => {
            return 'pong';
        })
      return super.init()
    };
  };

  module.exports = Basic