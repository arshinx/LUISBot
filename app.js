// Microsoft Bot based on Microsoft Bot Framework and Microsoft LUIS

var builder = require('botbuilder');

// Create LUIS Dialog that points at our model and add it as the root '/' dialog for our Cortana Bot.
var model = 'https://api.projectoxford.ai/luis/v1/application?id=c413b2ef-382c-45bd-8ff0-f76d60e2a821&subscription-key=d628a77deb694925bb8893c056dea7fb&q=';
var dialog = new builder.LuisDialog(model);
var cortanaBot = new builder.TextBot();
cortanaBot.add('/', dialog);

// Add intent handlers
/*
dialog.on('builtin.intent.alarm.set_alarm', builder.DialogAction.send('Creating Alarm'));
dialog.on('builtin.intent.alarm.delete_alarm', builder.DialogAction.send('Deleting Alarm'));
dialog.onDefault(builder.DialogAction.send("I'm sorry I didn't understand. I can only create & delete alarms."));
*/

// Adding Alarm Functionality

cortanaBot.listenStdin();