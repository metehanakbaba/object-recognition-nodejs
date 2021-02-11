import { Request, Response, NextFunction } from 'express';
import Controller, {Methods} from '../typings/Controller';

export default class RecognizeController extends Controller {
  path = '/recognize';

  routes = [
    {
      path: '/upload',
      method: Methods.GET,
      handler: this.handleUpload
    }
  ];

  constructor() {
    super();
  };

  async handleUpload(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      console.log(req)
      super.responseSuccess(res, {})
    } catch(e) {
      super.responseError(res)
    }
  }
}
