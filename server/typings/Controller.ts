import {Response, Request, NextFunction, Router} from 'express';

export enum Methods {
  PUT = 'PUT',
  DELETE = 'DELETE',
  GET = 'GET',
  POST = 'POST',
}

interface IRoute {
  path: string;
  method: Methods;
  handler: (req: Request, res: Response, next: NextFunction) => void | Promise<void>;
}

export default abstract class Controller {
  public router: Router = Router();
  public abstract path: string;
  protected abstract readonly routes: Array<IRoute> = [];

  public bindRoutes = (): Router => {
    for (const { method, path, handler } of this.routes) {
      if (method == Methods.GET) {
        this.router.get(path, handler);
      } else if (method == Methods.POST) {
        this.router.post(path, handler);
      } else if (method == Methods.DELETE) {
        this.router.delete(path, handler);
      } else if (method == Methods.PUT) {
        this.router.put(path, handler);
      }
    }

    return this.router;
  }

  protected responseSuccess(res: Response, data: object, message?: string): Response {
    return res.status(200).json({
      message: message || 'success',
      data: data
    });
  };

  protected responseError(res: Response, message?: string): Response {
    return res.status(500).json({
      message: message || 'internal server error',
    });
  };

};
