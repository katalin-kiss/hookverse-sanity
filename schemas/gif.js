import { AiOutlineGif } from 'react-icons/ai';

export default {
  name: 'gif',
  title: 'Embed GIF',
  type: 'object',
  icon: AiOutlineGif,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Gif title',
      description: 'Required',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'url',
      type: 'url',
      title: 'Gif URL',
      description: 'Required',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }).required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title,
      };
    },
  },
};
