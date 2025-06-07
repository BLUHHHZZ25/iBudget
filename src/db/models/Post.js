// model/Post.js
import { Model } from '@nozbe/watermelondb'
import { text, field} from '@nozbe/watermelondb/decorators'

export default class Post extends Model {
  static table = 'posts'
  
  @text('title') title;
  @text('subtitle') subtitle;
  @text('body') body;
  @field('is_pinned') isPinned  ;
  
}