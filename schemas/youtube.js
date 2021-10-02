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
      description: 'Optional',
    },
    {
      name: 'url',
      type: 'url',
      title: 'Youtube video URL',
      description: 'Required, add embed url with optional start time.',
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
