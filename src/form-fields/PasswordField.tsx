import { FC, memo } from 'react';
import { FormControl, IconButton, InputAdornment, InputLabel, TextField, TextFieldProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

import { useToggle } from 'hooks/useToggle';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { TextInput } from '@/ui/TextInput';

type PasswordFieldProps = TextFieldProps & {
  name?: string;
  label?: string;
  defaultValue?: string;
  hideError?: boolean;
};

const PasswordField: FC<PasswordFieldProps> = ({
  label,
  name = 'password',
  defaultValue = '',
  hideError,
  ...props
}) => {
  const [show, toggleShow] = useToggle(false);
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
        <FormControl error={!!errors[name]} variant="standard" sx={{ pb: 2 }} fullWidth>
          <InputLabel shrink sx={{ color: (theme) => theme.palette.text.primary }}>
            {label}
          </InputLabel>
          <TextInput
            {...field}
            type={show ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleShow}>
                    {show ? (
                      <VisibilityIcon fontSize="small" sx={{ color: (theme) => theme.palette.text.primary }} />
                    ) : (
                      <VisibilityOffIcon fontSize="small" sx={{ color: (theme) => theme.palette.text.primary }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            fullWidth
            variant="outlined"
            error={!!errors[name]}
            helperText={!hideError && errors[name] ? errors[name].message : ''}
            {...props}
          />
        </FormControl>
      )}
    />
  );
};

export default memo(PasswordField);
