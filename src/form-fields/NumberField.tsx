/* eslint-disable react/jsx-no-duplicate-props */
import { FC, memo, useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Box, FormControl, InputAdornment, InputLabel, TextFieldProps, Typography } from '@mui/material';
import { TextInput } from '@/ui/TextInput';
import NumberFormat, { NumberFormatProps } from 'react-number-format';

type Props = NumberFormatProps & {
  name: string;
  label?: any;
  defaultValue?: string;
  icon?: any;
  hideError?: boolean;
  counter?: boolean;
  limit?: number;
};

const NumberField: FC<Props> = ({ icon, name, defaultValue = '', limit, counter, hideError, label, ...props }) => {
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
        <Box sx={{ position: 'relative' }}>
          <FormControl error={!!errors[name]} variant="standard" sx={{ pb: 2 }} fullWidth>
            <InputLabel shrink sx={{ color: (theme) => theme.palette.text.primary }}>
              {label}
            </InputLabel>
            <NumberFormat customInput={TextInput as any} {...field} {...props} />
            {!hideError && errors[name] ? (
              <Typography sx={{ m: '3px 14px 0px 14px' }} variant="caption" color="error">
                {errors[name].message}
              </Typography>
            ) : null}
          </FormControl>

          {counter && (
            <Box
              sx={{
                position: 'absolute',
                bottom: -5,
                right: 5,
                color: '#AEB0C1',
                fontSize: 13,
                lineHeight: '24px',
              }}
            >
              {field.value.length}/{limit}
            </Box>
          )}
        </Box>
      )}
    />
  );
};

export default memo(NumberField);
