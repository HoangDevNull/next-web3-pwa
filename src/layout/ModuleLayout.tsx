import React, { FC, useEffect } from 'react';
import { WalletModal } from '@/ui/Modal';
import { Toaster } from 'react-hot-toast';
import styles from './Toast.module.css';
import AccountModal from '@/ui/Modal/AccountModal';
import { useRouter } from 'next/router';
import { useAppDispatch } from 'hooks/useRedux';
import { toggleSignInModal } from '@/store/ducks/auth/slice';

const ModuleLayout: FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    const { form } = router.query;

    if (form === 'login') {
      dispatch(toggleSignInModal());
    }
  }, [dispatch, router.query]);

  return (
    <>
      {children}
      <WalletModal />
      <AccountModal />
      <Toaster
        toastOptions={{
          success: { className: styles.success },
          error: { className: styles.error },
        }}
      />
    </>
  );
};

export default ModuleLayout;
