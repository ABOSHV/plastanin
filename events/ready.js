const client = require('..')
client.on('ready', () => {
  client.user.setStatus('online')
  client.user.setActivity("Free Palestine 🇵🇸.", { type: 3 });
})
