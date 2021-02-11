import * as express from 'express'

class App {
  public express

  constructor() {
    this.express = express()
    this.routes()
  }

  private routes() : void {
    const router = express.Router()
    router.get('/', (req, res) => {
      const testJson = {
        'message': 'First Message!'
      }
      res.json(testJson)
    })
    this.express.use('/', router)
  }
}

export default new App().express
