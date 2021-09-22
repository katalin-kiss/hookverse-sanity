import { RiFileList3Line } from 'react-icons/ri';
import { BiBookBookmark } from 'react-icons/bi';
import { isUniqueSlug } from '../lib/isUniqueSlug';

export default {
  title: 'Post',
  name: 'post',
  type: 'document',
  icon: RiFileList3Line,
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
      name: 'mainImage',
      title: 'Main image',
      type: 'coverImage',
      description: 'Optional',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      description: 'Required',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      description: 'Required',
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
      name: 'seo',
      title: 'Seo for post',
      type: 'seo',
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      date: 'publishedAt',
      category: 'category.name',
    },
    prepare({ author, title, media, date, category }) {
      return {
        title: `${title} in ${category}`,
        media: media,
        subtitle: `By ${author}, ${date.split('T')[0]}`,
      };
    },
  },
};
