import React from "react";

export type Element = React.ReactNode | JSX.Element | null;

export type Elements = {
  [name: string]: Element;
};

export type ElementNames = string[];

export type SimplifyProps = {
  conditions: string | object;
  multiple: boolean;
};

export type IfProps = {
  condition: boolean;
  true?: Element;
  false?: Element;
};
