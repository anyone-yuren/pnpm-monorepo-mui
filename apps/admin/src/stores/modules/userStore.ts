// import { getItem } from '@gbeata/utils';
// import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from '@/stores/admin';
import { App } from 'antd';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { getLoginUserPermission, loginApi, type LoginParams, logoutApi } from '@/api/auth';

// import { getItem, removeItem, setItem } from '@/utils/storage';
// 由于无法在异步函数中使用 persist, 所以这里无法使用，使用其他的持久化管理方式
// import { persist } from 'zustand/middleware';
import type { Permission } from '#/entity';

/**
 * This function is a custom hook for signing in a user. It uses a mutation to
 * call the login API and handles the success and error cases by updating the
 * user token and info, showing notifications, and navigating to the home page.
 *
 * @param {LoginParams} data - The login parameters including username and password
 * @return {function} A memoized callback function for signing in
 */
export const useSignIn = () => {
  const { t } = useTranslation();
  const { notification, message } = App.useApp();
  const { setUserToken } = useAuthStore((state) => {
    return {
      setUserToken: state.setUserToken,
    };
  });

  // const signInMutation = useMutation({
  //   mutationFn: loginApi,
  // });

  /**
   * An asynchronous function for signing in with the given LoginParams.
   *
   * @param {LoginParams} data - the parameters for signing in
   * @return {Promise<void>}
   */
  const signIn = async (data: LoginParams): Promise<any> => {
    try {
      const res = await loginApi(data);
      setUserToken(res.resultData);
      // 暂未提供，后续再决定权限如何处理
      notification.success({
        message: t('登录成功'),
        description: `欢迎回来: ${data.username}`,
        duration: 3,
      });
      return await Promise.resolve(res);
    } catch (error: any) {
      message.error({
        content: error.message,
        duration: 3,
      });
      return Promise.reject(error);
    }
  };

  return useCallback(signIn, []);
};

/**
 * Returns a function that asynchronously retrieves the user's permissions and updates the user info.
 *
 * @return {() => Promise<any>} A function that returns a promise that resolves with the user's permissions or rejects with an error.
 */
export const usePermissions = () => {
  const { message } = App.useApp();
  const { setUserInfo } = useAuthStore((state) => {
    return {
      setUserInfo: state.setUserInfo,
    };
  });

  const getUserPermissions = async () => {
    try {
      const res = await getLoginUserPermission();
      setUserInfo(res);
      return await Promise.resolve(res);
    } catch (error: any) {
      message.error({
        content: error.message,
        duration: 3,
      });
      return Promise.reject(error);
    }
  };
  return useCallback(getUserPermissions, []);
};

export const useSignOut = () => {
  const { message } = App.useApp();
  const { clearUserInfoAndToken } = useAuthStore((state) => {
    return {
      clearUserInfoAndToken: state.clearUserInfoAndToken,
    };
  });

  const signOut = async (goLogin = true) => {
    try {
      const res = await logoutApi();
      if (res) {
        clearUserInfoAndToken();
        goLogin && (window.location.href = '/login');
        return await Promise.resolve(res);
      }
      return await Promise.reject(res);
    } catch (error: any) {
      message.error({
        content: error.message,
        duration: 3,
      });
      return Promise.reject(error);
    }
  };
  return signOut;
};
