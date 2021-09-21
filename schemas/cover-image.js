import { BiImage } from 'react-icons/bi';

export default {
  name: 'coverImage',
  title: 'Image',
  type: 'image',
  icon: BiImage,
  fields: [
    {
      name: 'imageAlt',
      title: 'Image Description',
      type: 'string',
      options: {
        isHighlighted: true,
      },
    },
  ],
  options: {
    hotspot: true,
  },
};
