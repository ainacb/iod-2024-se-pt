class Logger {
  log(callerId, message) {
    console.log(`[${new Date().toISOString()}] [ID:${callerId}] ${message}`);
  }
}

module.exports = Logger;
