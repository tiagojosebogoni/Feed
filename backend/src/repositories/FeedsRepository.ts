import { EntityRepository, Repository } from 'typeorm';
import Feed from '../models/Feed';

@EntityRepository(Feed)
class FeedsRepository extends Repository<Feed> {}

export default FeedsRepository;
