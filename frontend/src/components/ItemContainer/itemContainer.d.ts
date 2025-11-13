import { HTMLAttributes } from "react";
import { PrivateUser, UserBlook, UserItem } from "@blacket/types";

export type FlatCell = {
    key: string; // stable key for the visual cell
    blook: Blook;
    shiny: boolean;
    amount: number;
    locked: boolean;
    userBlook: UserBlook | null;
    w: number;
    h: number;
};

export type PositionedCell = FlatCell & { x: number; y: number };

export interface ItemContainerOptions {
    showItems?: boolean;
    showBlooks?: boolean;
    showShiny?: boolean;
    showLocked?: boolean;
    showPacks?: boolean;

    rarities?: number[];
    searchQuery?: string;
}

export enum SelectedTypeEnum {
    BLOOK,
    ITEM
}

export interface ItemClickEvent {
    type: SelectedTypeEnum;
    item?: UserBlook | UserItem | null;
}

export interface ItemContainerProps extends HTMLAttributes<HTMLDivElement> {
    user: PrivateUser;
    options?: ItemContainerOptions;
    onClick?: (item: ItemClickEvent) => void;
}
