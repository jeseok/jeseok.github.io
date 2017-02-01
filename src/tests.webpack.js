var context = require.context('./tests', true, /_spec\.js$/); //make sure you have your directory and regex test set correctly!
context.keys().forEach(context);
