var exec = require('child_process').exec;

var test = function () {
  exec("curl -X POST --data-urlencode 'payload={\"channel\": \"#juniors\", \"username\": \"SHHHHHHHH\", \"text\": \"hello from inside node\", \"icon_emoji\": \":ghost:\"}' https://hooks.slack.com/services/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");
};

module.exports = test;
