const express = require('express');
const { db, Page, User } = require('./models');


const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));



app.get('/', (req, res) => {
  res.send('Hello World');
})

// db.authenticate()
// .then(() => {
//   console.log('connected to the database');
// })

const port = 3000

const init = async () => {
  // await Page.sync()
  // await User.sync();
  await db.sync({force: true})

  app.listen(port, () => {
    console.log(`listening in port ${port}`)
  })
}

init();




