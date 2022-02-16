import React, { FC } from 'react';
import { Typography, Button } from '@mui/material';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { CheckBoxField, PasswordField, TextField } from '@/form-fields';
import { useMutation } from 'react-query';
import { registerRequest } from '@/api/auth';
import { LoadingButton } from '@mui/lab';

interface IFormInput {
  email: string;
  password: string;
  confirmPassword: string;
  agree: boolean;
}

const schema = yup.object().shape({
  email: yup.string().email('Email must be a valid email').required('Email is a required field'),
  password: yup.string().required('Password is a required field').min(8),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Password must match'),
  agree: yup.boolean(),
});

interface Props {
  onSubmited: (email: string) => void;
}

const SignUpForm: FC<Props> = ({ onSubmited }) => {
  const { mutate, isLoading } = useMutation(registerRequest, {
    onSuccess: async (_, variable) => {
      onSubmited(variable.email);
    },
  });

  const methods = useForm<IFormInput>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {},
  });

  const formSubmitHandler: SubmitHandler<IFormInput> = async (formData) => {
    mutate({
      email: formData.email,
      password: formData.password,
    });
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(formSubmitHandler)} style={{ margin: 'auto', padding: '0 30px' }}>
          <TextField name="email" label="Enter your email" />
          <PasswordField name="password" label="Password" />
          <PasswordField name="confirmPassword" label="Confirm Password" />

          <CheckBoxField
            name="agree"
            label={
              <Typography sx={{ fontSize: '14px' }}>
                I agree to the <span style={{ color: '#42a7f5' }}>Terms & Conditions</span>
              </Typography>
            }
          />

          <LoadingButton
            disabled={!methods.formState.isValid || !methods.watch('agree')}
            type="submit"
            variant="contained"
            sx={{ py: 1, mt: 2 }}
            fullWidth
            loading={isLoading}
          >
            SIGN UP
          </LoadingButton>
        </form>
      </FormProvider>

      {/* <Typography sx={{ py: 2, fontWeight: 900, color: 'primary.main' }} align="center">
        Or sign in with
      </Typography>
      <Grid container justifyContent="space-between" style={{ padding: '0 30px' }}>
        <Grid item>
          <SocialButton startIcon={<TwitterIcon style={{ color: 'primary.main' }} />}>TWITTER</SocialButton>
        </Grid>
        <Grid item>
          <SocialButton startIcon={<GoogleIcon style={{ color: 'primary.main' }} />}>TWITTER</SocialButton>
        </Grid>
      </Grid> */}
    </>
  );
};

export default SignUpForm;
