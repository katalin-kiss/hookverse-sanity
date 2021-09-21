import { AiOutlineYoutube } from 'react-icons/ai';

export default {
  name: 'youtube',
  title: 'Embed youtube video',
  type: 'object',
  icon: AiOutlineYoutube,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Video title',
      description: 'Required',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'url',
      type: 'url',
      title: 'Youtube video URL',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }).required(),
    },
    {
      name: 'startsAt',
      type: 'string',
      title: 'Video starts at',
      description: 'Optional',
      initialValue: '0:00',
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
