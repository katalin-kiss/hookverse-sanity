import { isUniqueSlug } from '../lib/isUniqueSlug';
import { BiNews } from 'react-icons/bi';

export default {
  title: 'News',
  name: 'news',
  type: 'document',
  icon: BiNews,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Required',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: isUniqueSlug,
      },
      description: 'Required, must be unique',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'info',
      title: 'News Info',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: new Date().toISOString(),
      description: 'Required',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'expiresAt',
      title: 'Expires at',
      type: 'datetime',
      description: 'Optional',
    },
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      expiresAt: 'expiresAt',
    },
    prepare({ title, publishedAt, expiresAt }) {
      if (!expiresAt) {
        return {
          title: title,
          subtitle: `Published at ${publishedAt.split('T')[0]}`,
        };
      } else {
        return {
          title: title,
          subtitle: `Published at ${publishedAt.split('T')[0]}, expires at ${
            expiresAt.split(T)[0]
          }`,
        };
      }
    },
  },
};
