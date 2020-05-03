import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import FeedService from '../services/CreateFeedService';
import FeedsRepository from '../repositories/FeedsRepository';

const feedRouter = Router();

feedRouter.get('/', async (request, response) => {
  const feedRepository = getCustomRepository(FeedsRepository);
  const feeds = await feedRepository.find();

  return response.json(feeds);
});

feedRouter.post('/', async (request, response) => {
  const { name, image_profile, image_post } = request.body;

  const feedService = new FeedService();

  const feed = await feedService.execute({
    name,
    image_profile,
    image_post,
  });

  return response.json(feed);
});

feedRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { name, image_post } = request.body;

  try {
    const feedRepository = getCustomRepository(FeedsRepository);

    const feed = await feedRepository.findOne(id);

    if (!feed) {
      return response.status(400).json({ message: 'Feed not found.' });
    }

    feed.name = name;
    feed.image_post = image_post;

    return response.json({});
  } catch (e) {
    return response.status(400).json({ message: 'Feed not found.' });
  }
});

feedRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const feedRepository = getCustomRepository(FeedsRepository);

  try {
    const feed = await feedRepository.findOne(id);

    if (!feed) {
      return response.status(400).json({ message: 'Feed not found.' });
    }

    await feedRepository.remove(feed);
  } catch (err) {
    return response.status(400).json({ message: 'Feed not found.' });
  }

  return response.json({});
});

export default feedRouter;
