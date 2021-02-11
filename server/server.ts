import app from './app'

const serverPort = 3000;

app.listen(serverPort, (err) => {
  if (err) return console.log(err)
  return console.log('Express Server is running in port:', serverPort);
})
