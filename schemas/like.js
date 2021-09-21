import React from 'react';
import { BiLike } from 'react-icons/bi';

export default {
  name: 'like',
  title: 'Like',
  type: 'document',
  icon: BiLike,
  fields: [
    {
      name: 'numOfLikes',
      title: 'Number of likes',
      type: 'number',
      initialValue: 0,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'post',
      title: 'Post',
      type: 'reference',
      to: [{ type: 'post' }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      likes: 'numOfLikes',
      post: 'post.title',
    },
    prepare({ likes, post }) {
      return {
        media: <BiLike />,
        title: `${post} has ${likes} likes`,
      };
    },
  },
};
