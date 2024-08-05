class Plain extends cds.ApplicationService {
  init() {
      this.on('theAnswer', req => {
          return 42;
      });

      this.on('highestValue', req => {
          const array = req.data.input;
          if (!array || array.length === 0) {
              req.error(400, 'Input array is required and cannot be empty');
              return;
          }

          let max = array[0];
          for (let i = 1; i < array.length; i++) {
              if (array[i] > max) {
                  max = array[i];
              }
          }
          return max;
      });

      return super.init();
  }
}

module.exports = Plain;