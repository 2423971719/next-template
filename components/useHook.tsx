/*
 * @Author: W·S
 * @Date: 2022-09-20 13:31:58
 * @LastEditors: W·S
 * @LastEditTime: 2022-09-20 20:09:07
 * @Description: Description
 */
import { useTranslation } from "next-i18next";
import { useRouter } from "next/dist/client/router";

export const useHook = (translation?: string[]) => {
  const router = useRouter();
  const { t } = useTranslation(translation || "");

  const routerBack = () => router.back();

  const routerPush = async (
    url: string | object,
    as?: string,
    options?: {
      shallow?: boolean;
      locale?: string | false;
      scroll?: boolean;
      unstable_skipClientCache?: boolean;
    }
  ): Promise<boolean> => await router.push(url, as, options);

  const routerReplace = async (
    url: string | object,
    as?: string,
    options?: {
      shallow?: boolean;
      locale?: string | false;
      scroll?: boolean;
      unstable_skipClientCache?: boolean;
    }
  ): Promise<boolean> => await router.replace(url, as, options);

  const getQuery = (queryData: unknown) => {
    return queryData;
  };

  return { t, routerPush, routerReplace, routerBack, getQuery, router };
};
