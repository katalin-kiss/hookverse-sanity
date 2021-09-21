import React from 'react';

import { PatchEvent, set } from 'part:@sanity/form-builder/patch-event';
import FormField from 'part:@sanity/components/formfields/default';

import { TextArea } from '@sanity/ui';

const CustomTextArea = React.forwardRef((props, ref) => {
  const { type, onChange } = props;
  return (
    <FormField label={type.title} description={type.description}>
      <TextArea
        rows='3'
        ref={ref}
        value={props.value}
        placeholder='TextArea'
        onChange={(event) => {
          onChange(PatchEvent.from(set(event.target.value)));
        }}
      />
    </FormField>
  );
});

export default CustomTextArea;
