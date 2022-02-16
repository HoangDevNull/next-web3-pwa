/* eslint-disable react/jsx-no-duplicate-props */
import { FC, memo, useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Box, FormControl, InputAdornment, InputLabel, TextFieldProps } from '@mui/material';
import { TextInput } from '@/ui/TextInput';

type Props = TextFieldProps & {
  name: string;
  label?: any;
  defaultValue?: string;
  icon?: any;
  hideError?: boolean;
  counter?: boolean;
  limit?: number;
};

const TextField: FC<Props> = ({ icon, name, defaultValue = '', limit, counter, hideError, label, ...props }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const startIcon = useMemo(() => {
    if (!icon) return;
    return <InputAdornment position="start">{icon}</InputAdornment>;
  }, [icon]);

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
            <TextInput
              {...field}
              InputProps={{
                startAdornment: startIcon,
              }}
              inputProps={{
                maxLength: limit || Infinity,
              }}
              fullWidth
              variant="outlined"
              error={!!errors[name]}
              helperText={!hideError && errors[name] ? errors[name].message : ''}
              {...props}
            />
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

export default memo(TextField);
