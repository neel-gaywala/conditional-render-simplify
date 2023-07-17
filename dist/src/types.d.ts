import React from "react";
export declare type Element = React.ReactNode | JSX.Element | null;
export declare type Elements = {
    [name: string]: Element;
};
export declare type ElementNames = string[];
export declare type ConditionObject = {
    [key: string]: boolean;
};
export declare type SimplifyProps = {
    conditions: string | ConditionObject;
    multiple?: boolean;
    [key: string]: any;
};
export declare type IfProps = {
    condition: boolean;
    true?: Element;
    false?: Element;
};
