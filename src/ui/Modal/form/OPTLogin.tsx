import { DialogContent, Typography } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { Dialog, DialogTitle } from '@/ui/Dialog';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getOpenSignInModal, toggleSignInModal } from '@/store/ducks/auth/slice';
import { Undefined } from '@/types/util.types';
import { IAuthParams, loginRequest, useUser } from '@/api/auth';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import NumberField from 'form-fields/NumberField';
import { useMutation } from 'react-query';
import { setCookies, TOKEN_KEY } from '@/lib/cookies';
import { useRouter } from 'next/router';
import { LoadingButton } from '@mui/lab';

interface IFormInput {
  code: string;
}

const schema = yup.object().shape({
  code: yup.string().required('Verification code is a required'),
});

const OTPLogin: FC<{ credential: IAuthParams }> = ({ credential }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { refetch } = useUser();

  const { mutate, isLoading } = useMutation(loginRequest, {
    onSuccess: (data) => {
      setCookies(TOKEN_KEY, data.token);
      refetch();
      if (router.query?.form === 'login') {
        router.replace(router.pathname);
      }
      dispatch(toggleSignInModal());
    },
  });

  const methods = useForm<IFormInput>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {},
  });

  const formSubmitHandler: SubmitHandler<IFormInput> = async (formData) => {
    mutate({ ...credential, twofa: formData.code });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
        <NumberField name="code" label="Verification code" />
        <LoadingButton
          disabled={!methods.formState.isValid}
          loading={isLoading}
          type="submit"
          variant="contained"
          sx={{ mt: 2 }}
          fullWidth
        >
          SUBMIT
        </LoadingButton>
      </form>
    </FormProvider>
  );
};

export default OTPLogin;
