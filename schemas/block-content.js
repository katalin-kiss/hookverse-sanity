import React from 'react';
import { AiOutlineHighlight } from 'react-icons/ai';

const highlightIcon = () => (
  <span>
    <AiOutlineHighlight />
  </span>
);

const highlightRender = (props) => (
  <span style={{ backgroundColor: '#f5ab00' }}>{props.children}</span>
);

export default {
  name: 'blockContent',
  title: 'Content',
  type: 'array',
  of: [
    {
      name: 'block',
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Underline', value: 'underline' },
          {
            title: 'Highlight',
            value: 'highlight',
            blockEditor: {
              icon: highlightIcon,
              render: highlightRender,
            },
          },
        ],
        annotations: [
          {
            title: 'External Link',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    },
    {
      name: 'blockImage',
      title: 'Image',
      type: 'blockImage',
    },
    {
      type: 'youtube',
      name: 'youtube',
      title: 'Youtube',
    },
  ],
};
