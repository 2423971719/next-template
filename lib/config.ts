/*
 * @Author: W·S
 * @Date: 2022-09-15 14:40:16
 * @LastEditors: W·S
 * @LastEditTime: 2022-09-22 16:23:14
 * @Description: Description
 */
import type { SVGProps } from "react";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
export const Navigation: Navigations = {
  Main: [],
  Home: [
    {
      isSubTitle: false,
      code: "1",
      icon: AcademicCapIcon,
      pathName: "/demo",
      cnName: "Demo",
      enName: "Demo",
      limmit: "",
      children: [
        {
          isSubTitle: true,
          code: "9",
          pathName: "",
          cnName: "测试",
          enName: "Test",
          limmit: "",
        },
        {
          isSubTitle: false,
          code: "10",
          pathName: "/demo/1",
          cnName: "列表组件",
          enName: "Demo-List",
          limmit: "",
        },
        {
          isSubTitle: false,
          code: "11",
          pathName: "/demo/form-demo",
          cnName: "Form组件",
          enName: "Demo-Form",
          limmit: "",
        },
        {
          isSubTitle: false,
          code: "12",
          pathName: "/demo/details/details",
          cnName: "Details组件",
          enName: "Demo-Details",
          limmit: "",
        },
      ],
    },
  ],
  user: [
    {
      isSubTitle: false,
      code: "13",
      pathName: "/main-index",
      cnName: "Your Profile",
      enName: "Your Profile",
      limmit: "",
    },
    {
      isSubTitle: false,
      code: "14",
      pathName: "/main-index1",
      cnName: "Settings",
      enName: "Settings",
      limmit: "",
    },
    {
      isSubTitle: false,
      code: "SignOut",
      pathName: "/",
      cnName: "Sign out",
      enName: "Sign out",
      limmit: "",
    },
  ],
};

interface Navigations {
  [arg: string]: {
    code: string;
    icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    isSubTitle: boolean;
    pathName: string;
    cnName: string;
    enName: string;
    limmit: string;
    children?: {
      isSubTitle: boolean;
      code: string;
      icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
      pathName: string;
      cnName: string;
      enName: string;
      limmit: string;
      children?: [];
    }[];
  }[];
}
