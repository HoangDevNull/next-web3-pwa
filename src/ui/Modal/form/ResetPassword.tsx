import { FC } from 'react';
import { LoadingButton } from '@mui/lab';
import { TextField } from '@/form-fields';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from 'hooks/useRedux';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { sendMailResetPasswordRequest } from '@/api/auth';
import toast from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Typography } from '@mui/material';

interface IFormInput {
  email: string;
}

const schema = yup.object().shape({
  email: yup.string().email('Email must be a valid email').required('Email is a required field'),
});

const ResetPassword: FC = () => {
  const { mutate, isLoading } = useMutation(sendMailResetPasswordRequest, {
    onSuccess: (data) => {
      toast.success('Password reset email has been sent!');
    },
  });

  const methods = useForm<IFormInput>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {},
  });

  const formSubmitHandler: SubmitHandler<IFormInput> = async (formData) => {
    mutate({ email: formData.email });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Having trouble accessing your account ?<br />
        </Typography>
        <Typography>
          Note that you can only recover the password of email and password based accounts (excluding Twitter and
          Google).
        </Typography>
        <TextField name="email" placeholder="Email" />
        <LoadingButton
          disabled={!methods.formState.isValid}
          loading={isLoading}
          type="submit"
          variant="contained"
          fullWidth
        >
          RESET
        </LoadingButton>
      </form>
    </FormProvider>
  );
};

export default ResetPassword;
