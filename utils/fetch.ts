/*
 * @Author: W·S
 * @Date: 2022-09-21 14:06:15
 * @LastEditors: W·S
 * @LastEditTime: 2022-09-21 15:04:54
 * @Description: Description
 */

/**
 *
 * @param url Url 地址
 * @param data 传输的数据
 * @param option
 * @returns
 */
export const getFetch = async (
  url: string,
  data?: object | null,
  option?: RequestInit
) => {
  let method = "GET",
    headers: HeadersInit = new Headers({});

  if (data) {
    method = "POST";
    headers = new Headers({
      "Content-type": "application/json",
    });
  }

  headers = option?.headers || headers;
  method = option?.method || method;

  const feRes = await fetch(url, {
    body: data ? JSON.stringify(data) : null,
    method,
    headers,
    ...option,
  });

  const _data = await feRes.json();

  return _data;
};
