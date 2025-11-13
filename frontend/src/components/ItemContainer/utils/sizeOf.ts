import { Blook } from "@blacket/types";

const SMALL_W = 65;
const SMALL_H = 80;
const BIG_W = SMALL_W * 1.3;
const BIG_H = SMALL_H * 1.3;

export function sizeOf(blook: Blook): { w: number; h: number } {
    return blook.isBig ? { w: BIG_W, h: BIG_H } : { w: SMALL_W, h: SMALL_H };
}
