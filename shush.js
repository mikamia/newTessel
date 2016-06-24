var request = require('request');


module.exports = function () {
request({
  uri: 'https://hooks.slack.com/services/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',
  hostname: "hooks.slack.com",
  path: '/services/T1L5CHVR7/B1L55JECQ/wvHphlsxHAQ0X7h2wmXlp36k',
  method: "POST",
  headers: {
           'Content-Type': 'application/x-www-form-urlencoded'
       },
  json: {
    channel: "#juniors",
    username: "SHHHHHHHH",
    text: "working?",
    icon_emoji: ":ghost:"
  }
});
};
