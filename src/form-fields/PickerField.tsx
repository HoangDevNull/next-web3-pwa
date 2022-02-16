/* eslint-disable react/jsx-no-duplicate-props */
import { FC, memo, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Box, FormControl, InputLabel, TextFieldProps } from '@mui/material';
import { TextInput } from '@/ui/TextInput';
import { DesktopDatePicker, DesktopDatePickerProps } from '@mui/lab';
import dayjs from 'dayjs';

type Props = {
  name: string;
  label?: any;
  defaultValue?: any;
  hideError?: boolean;
};

const PickerField: FC<Props> = ({ name, defaultValue = dayjs(), hideError, label, ...props }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      defaultValue={defaultValue}
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <Box sx={{ position: 'relative' }}>
            <FormControl error={!!errors[name]} variant="standard" sx={{ pb: 2 }} fullWidth>
              <InputLabel shrink sx={{ color: (theme) => theme.palette.text.primary }}>
                {label}
              </InputLabel>

              <DesktopDatePicker
                value={field.value}
                onChange={(value) => field.onChange(value)}
                renderInput={(params) => (
                  <TextInput
                    {...params}
                    fullWidth
                    error={!!errors[name]}
                    helperText={!hideError && errors[name] ? errors[name].message : ''}
                  />
                )}
              />
            </FormControl>
          </Box>
        );
      }}
    />
  );
};

export default memo(PickerField);
