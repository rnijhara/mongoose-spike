import app from './app';

app.listen(app.get('port'), (err: Error) => {
  if (err) {
    console.log(err);
  }
  console.log('Server up and running on ' + app.get('port'));
});
