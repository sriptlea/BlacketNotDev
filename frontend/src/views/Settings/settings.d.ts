import { HTMLAttributes } from "react";

export interface NavbarItem {
    element: IntrinsicAttributes;
    icon: string;
    text: string;
    element?: Element | (() => JSX.Element);
    path: string;
}

export interface SettingsContainerProps extends HTMLAttributes<HTMLDivElement> {
    header: {
        icon: string;
        text: string;
    };
}

export interface DividerProps {
    margin: number;
}
