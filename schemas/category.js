import React from 'react';
import { HiOutlineColorSwatch } from 'react-icons/hi';
import CustomTextArea from '../components/CustomTextArea';
import { isUniqueSlug } from '../lib/isUniqueSlug';

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: HiOutlineColorSwatch,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Required',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'color',
      title: 'Color',
      type: 'color',
      options: {
        disableAlpha: false,
      },
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
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      inputComponent: CustomTextArea,
      description: 'Optional',
    },
  ],
  preview: {
    select: {
      name: 'name',
      color: 'color.hex',
    },
    prepare({ name, color }) {
      return {
        media: (
          <div
            style={{ backgroundColor: color, width: '80px', height: '80px' }}
          >
            {color}
          </div>
        ),
        title: name,
      };
    },
  },
};
