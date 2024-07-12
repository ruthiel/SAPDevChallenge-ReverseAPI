const cds = require('@sap/cds');

class Basic extends cds.ApplicationService {
    init() {
        this.on('ping', req => 'pong')
        this.on('hello', req => `Hello ${req.data.to}!`)
        this.on('sum', req => {
          const { a, b } = req.data;
          return a + b;
        })
      return super.init()
    };
  };

  module.exports = Basic