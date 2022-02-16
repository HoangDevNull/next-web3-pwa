import { Switch } from '@mui/material';
import { FC, memo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface SwitchFieldProps {
  name: string;
  defaultValue?: boolean;
}

const SwitchField: FC<SwitchFieldProps> = ({ name, defaultValue = false }) => {
  const { control } = useFormContext();

  return (
    <Controller
      defaultValue={defaultValue}
      control={control}
      name={name}
      render={({ field }) => <Switch {...field} checked={field.value} color="default" />}
    />
  );
};

export default memo(SwitchField);
