const // 
  createError = require('http-errors'),
  express = require('express'),
  path = require('path'),
  cookieParser = require('cookie-parser'),
  logger = require('morgan'),
  indexRouter = require('./routes/index'),
  adminRouter = require('./routes/admin'),
  app = express(),
  // BDD
  Database = require('nedb')

function loadDB(name, uniqueField) {
  const collection = new Database({
    filename: `./data/${name}`,
    autoload: true
  })
  if (uniqueField) {
    collection.ensureIndex({
      fieldName: uniqueField,
      unique: true
    })
  }
  console.log(`chargement collection ${name}`)
  return collection
}

const db = { // liste des collections chargées au démarrage
  managers: loadDB('managers', 'email'),
  places: loadDB('places', 'nom'),
  salons: loadDB('salons', 'nom'),
  users: loadDB('users', 'email'),
  news: loadDB('news', '_id'),
  evenements: loadDB('evenements', '_id')
}

const middlewareDB = (req, res, next) => {
  req.db = db // passe la DB par reference dans req.db
  next()
}
///

app
  // view engine setup
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'hbs')

  .use(logger('dev'))
  .use(express.json())
  .use(express.urlencoded({
    extended: false
  }))
  .use(cookieParser())
  .use(express.static(path.join(__dirname, 'public')))

  .use('/', middlewareDB, indexRouter)
  .use('/admin', middlewareDB, adminRouter)

  // catch 404 and forward to error handler
  .use((req, res, next) => {
    next(createError(404));
  })

  // error handler
  .use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

module.exports = app;