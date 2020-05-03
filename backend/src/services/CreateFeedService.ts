import { getCustomRepository } from 'typeorm';
import Feed from '../models/Feed';
import FeedRepository from '../repositories/FeedsRepository';

interface Request {
  name: string;
  image_profile: string;
  image_post: string;
}

class CreateFeedService {
  public async execute({
    name,
    image_profile,
    image_post,
  }: Request): Promise<Feed> {
    const feedsRepository = getCustomRepository(FeedRepository);

    const feed = feedsRepository.create({
      name,
      image_profile,
      image_post,
    });

    await feedsRepository.save(feed);

    return feed;
  }
}

export default CreateFeedService;
