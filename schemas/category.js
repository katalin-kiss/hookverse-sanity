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
      name: 'lightColor',
      title: 'Light color',
      type: 'color',
      description: 'Required',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'darkColor',
      title: 'Dark Color',
      type: 'color',
      description: 'Required',
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
      lightColor: 'lightColor.hex',
      darkColor: 'darkColor.hex',
    },
    prepare({ name, lightColor, darkColor }) {
      return {
        media: (
          <div>
            <div
              style={{
                backgroundColor: lightColor,
                width: '35px',
                height: '35px',
              }}
            />
            <div
              style={{
                backgroundColor: darkColor,
                width: '35px',
                height: '35px',
              }}
            />
          </div>
        ),
        title: name,
      };
    },
  },
};
