import { BiImage } from 'react-icons/bi';

export default {
  name: 'blockImage',
  title: 'Image in Text',
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
    {
      name: 'size',
      title: 'Size in Text',
      type: 'string',
      options: {
        list: [
          { title: 'Normal', value: 'normal' },
          { title: 'Large', value: 'large' },
        ],
        layout: 'radio',
        direction: 'horizontal',
        isHighlighted: true,
      },
      initialValue: 'normal',
    },
  ],
  options: {
    hotspot: true,
  },
};
