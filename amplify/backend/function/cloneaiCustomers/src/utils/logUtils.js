const logUtils = {
    logError(message, log = '') {
      console.log(`\x1b[31mError: ${message}\x1b[0m`, log);
    },
  
    logInfo(message, log = '') {
      console.log(`\x1b[36mInfo: ${message}\x1b[0m`, log);
    },
  
    logSuccess(message, log = '') {
      console.log(`\x1b[32mSuccess: ${message}\x1b[0m`, log);
    },
  };

  module.exports = logUtils;