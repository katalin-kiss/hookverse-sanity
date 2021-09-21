import { BiUser } from 'react-icons/bi';
import { isUniqueSlug } from '../lib/isUniqueSlug';

export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: BiUser,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Required',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
        isUnique: isUniqueSlug,
      },
      description: 'Required',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'coverImage',
      description: 'Optional',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'blockContent',
      description: 'Optional',
    },
  ],
  preview: {
    select: {
      name: 'name',
      avatar: 'avatar',
    },
    prepare({ name, avatar }) {
      return {
        title: name,
        media: avatar,
      };
    },
  },
};
