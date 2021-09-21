import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import author from './author';
import blockContent from './block-content';
import blockImage from './block-image';
import coverImage from './cover-image';
import like from './like';
import news from './news';
import post from './post';
import seo from './seo';
import tag from './tag';
import youtube from './youtube';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    post,
    news,
    author,
    blockContent,
    blockImage,
    coverImage,
    like,
    seo,
    tag,
    youtube,
  ]),
});
