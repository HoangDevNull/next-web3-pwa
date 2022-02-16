import { Checkbox, CheckboxProps, FormControlLabel } from '@mui/material';
import { FC, memo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

type CheckBoxFieldProps = CheckboxProps & {
  name: string;
  label: any;
  defaultValue?: boolean;
  className?: string;
};

const CheckBoxField: FC<CheckBoxFieldProps> = ({ className, name, label, defaultValue = false, ...props }) => {
  const { control } = useFormContext();

  return (
    <FormControlLabel
      className={className}
      control={
        <Controller
          defaultValue={defaultValue}
          control={control}
          name={name}
          render={({ field }) => <Checkbox {...field} checked={field.value} {...props} />}
        />
      }
      label={label}
    />
  );
};

export default memo(CheckBoxField);
