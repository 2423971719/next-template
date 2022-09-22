/* eslint-disable @typescript-eslint/ban-types */
/*
 * @Author: W·S
 * @Date: 2022-09-08 18:51:20
 * @LastEditors: W·S
 * @LastEditTime: 2022-09-21 14:04:37
 * @Description: Description
 */

import type { NextPageContext } from "next/types";
import type { BaseContext } from "next/dist/shared/lib/utils";
import type { ComponentType } from "react";

declare global {
  /** @Description global api type Start */
  export type {
    NextApiRequest,
    NextApiResponse,
  } from "next/dist/shared/lib/utils";
  export type { GetServerSideProps, GetStaticProps } from "next/types";
  export type { PropsWithChildren, ReactNode } from "react";
  export interface PropTypesValidator {
    (
      props: {
        [key: string]: unknown;
      },
      propName: string,
      componentName: string,
      location: string,
      propFullName: string
    ): Error | null;
  }

  type NextComponentType<
    C extends BaseContext = NextPageContext,
    IP = {},
    P = {}
  > = ComponentType<P> & {
    /**
     * Used for initial page load data population. Data returned from `getInitialProps` is serialized when server rendered.
     * Make sure to return plain `Object` without using `Date`, `Map`, `Set`.
     * @param ctx Context of `page`
     */
    getServerSideProps?(context: C): IP | Promise<IP>;
    getStaticProps?(context: C): IP | Promise<IP>;
    getLayout?(page: JSX.Element): JSX.Element;
  };
  export type NextPage<P = {}, IP = P> = NextComponentType<
    NextPageContext,
    IP,
    P
  >;
  export interface ResultInfo {
    /**
     * @description: 响应编码
     * @type {string} 0:成功, 1:普通失败, 2:无操作权限, 3:登录状态失效
     */
    code: number;
    /**
     * @description: 响应内容
     */
    data: T;
    /**
     * @description: 响应信息
     */
    message?: string;
  }
  /** @Description global api type END */
}
