
class Log {
  info = text => {
    console.info(`[${getDate()}]`, '[INFO]', text);
  };
  warning = text => {
    console.warning(`[${getDate()}]`, '[WARN]', text);
  };
  error = text => {
    console.error(`[${getDate()}]`, '[ERROR]', text);
  };
  server = text => {
    console.info(`[${getDate()}]`, '[SERV]', text);
  }

}

function getDate() {
  const date = new Date();
  return date.toLocaleString('en-US', { timeZoneName: 'short' });
}

const log = new Log();
export default log;
