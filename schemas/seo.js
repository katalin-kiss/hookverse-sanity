import CustomTextArea from '../components/CustomTextArea';

export default {
  name: 'seo',
  title: 'Seo attributes',
  type: 'object',
  fields: [
    { name: 'url', title: 'Post Url', type: 'string' },
    {
      name: 'description',
      title: 'Post description',
      type: 'text',
      inputComponent: CustomTextArea,
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          name: 'tag',
          title: 'Tag',
          type: 'reference',
          to: [{ type: 'tag' }],
        },
      ],
    },
  ],
};
