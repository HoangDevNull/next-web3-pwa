import React, { FC } from 'react';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, PasswordField, CheckBoxField } from '@/form-fields';
import { useMutation } from 'react-query';
import { checkActive2FARequest, IAuthParams, loginRequest, useUser } from '@/api/auth';
import { TOKEN_KEY, setCookies } from '@/lib/cookies';
import { LoadingButton } from '@mui/lab';
import { toggleForgotPasswordModal, toggleSignInModal } from '@/store/ducks/auth/slice';
import { useAppDispatch } from 'hooks/useRedux';
import { useRouter } from 'next/router';
import { Button, Grid } from '@mui/material';

interface IFormInput {
  email: string;
  password: string;
}

interface Props {
  onLoginWith2FA: (authParams: IAuthParams) => void;
}

const schema = yup.object().shape({
  email: yup.string().email('Email must be a valid email').required('Email is a required field'),
  password: yup.string().required('Password is a required field'),
  remberme: yup.boolean(),
});

const LoginForm: FC<Props> = ({ onLoginWith2FA }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { refetch } = useUser();

  const { mutate: login, isLoading } = useMutation(loginRequest, {
    onSuccess: (data) => {
      setCookies(TOKEN_KEY, data.token);
      refetch();
      if (router.query?.form === 'login') {
        router.replace(router.pathname);
      }
      dispatch(toggleSignInModal());
    },
  });

  const { mutate: checkActive2FA, isLoading: loading2FA } = useMutation(checkActive2FARequest, {
    onSuccess: (data, variable) => {
      if (data !== 0) {
        onLoginWith2FA(variable);
      } else {
        login(variable);
      }
    },
  });

  const methods = useForm<IFormInput>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {},
  });

  const formSubmitHandler: SubmitHandler<IFormInput> = async (formData) => {
    checkActive2FA({
      email: formData.email,
      password: formData.password,
    });
  };

  const handleForgotPassword = () => {
    dispatch(toggleSignInModal());
    dispatch(toggleForgotPasswordModal());
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(formSubmitHandler)} style={{ margin: 'auto', padding: '0 30px' }}>
          <TextField name="email" label="Enter your email" />
          <PasswordField name="password" label="Password" />

          <Grid container justifyContent="space-between">
            <CheckBoxField size="small" label="Remember me" name="rememberMe" />
            <Button
              size="small"
              onClick={handleForgotPassword}
              sx={{ fontWeight: 300 }}
              disableTouchRipple
              variant="text"
            >
              Forgot password?
            </Button>
          </Grid>

          <LoadingButton
            disabled={!methods.formState.isValid}
            loading={isLoading || loading2FA}
            type="submit"
            variant="contained"
            sx={{ my: 2 }}
            fullWidth
          >
            LOG IN
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

export default LoginForm;
