import { isUniqueSlug } from '../lib/isUniqueSlug';
import { AiOutlineTag } from 'react-icons/ai';

export default {
  name: 'tag',
  title: 'Tag',
  type: 'document',
  icon: AiOutlineTag,
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
      description: 'Required, must be unique',
      validation: (Rule) => Rule.required(),
    },
  ],
};
