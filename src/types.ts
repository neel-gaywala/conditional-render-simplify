import React from "react";

export type Element = React.ReactNode | JSX.Element | null;

export type Elements = {
  [name: string]: Element;
};

export type ElementNames = string[];

export type ConditionObject = {
  [key: string]: boolean;
};

export type SimplifyProps = {
  conditions: string | ConditionObject;
  multiple?: boolean;
  [key: string]: any;
};

export type IfProps = {
  condition: boolean;
  true?: Element;
  false?: Element;
};

export type ResponsiveConditionObject = {
  [key: string]: number;
};

export type ResponsiveProps = {
  breakpoints: ResponsiveConditionObject;
  defaultLayout: Element;
  [key: string]: any;
};
