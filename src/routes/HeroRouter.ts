import {Router, Request, Response, NextFunction} from 'express';
const Heroes = require('../heroData');

export class HeroRouter {
  router: Router

  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * GET all Heroes.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
    res.send(Heroes);
  }

  /**
   * GET a Hero by ID.
   */
  public getHero(req: Request, res: Response, next: NextFunction) {
    const heroID = parseInt(req.params.id);
    const hero = Heroes.find(hero => hero.id === heroID);
    if (hero) {
      res.status(200)
        .send({
          message: 'Success',
          status: res.status,
          hero
        });
    }
    else {
      res.status(404)
        .send({
          message: 'No hero found with the given id.',
          status: res.status
        });
    }
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.getAll);
    this.router.get('/:id', this.getHero);
  }

}

// Create the HeroRouter, and export its configured Express.Router
const heroRouter = new HeroRouter();
heroRouter.init();

export default heroRouter.router;