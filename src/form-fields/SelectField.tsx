import { FC, memo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Select, SelectProps } from '@mui/material';

type SelectFieldProps = SelectProps & {
  name: string;
  defaultValue?: any;
};

const SelectField: FC<SelectFieldProps> = ({ name, defaultValue = '', children, ...props }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      defaultValue={defaultValue}
      control={control}
      name={name}
      render={({ field }) => (
        <Select
          {...field}
          value={field.value || ''}
          fullWidth
          variant="outlined"
          displayEmpty
          MenuProps={{
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left',
            },
            // getContentAnchorEl: null,
          }}
          {...props}
          error={!!errors[name]}
        >
          {children}
        </Select>
      )}
    />
  );
};

export default memo(SelectField);
