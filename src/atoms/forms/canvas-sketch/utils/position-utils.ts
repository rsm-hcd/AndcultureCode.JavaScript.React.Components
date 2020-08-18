import { PointerPosition } from "../interfaces/pointer-position";

/**
 * Get the current mouse position relative to the top-left of the canvas
 *
 * @param e The mouse event
 */
const getMousePosition = (e: MouseEvent): PointerPosition | null => {
    if (!e) {
        e = event as MouseEvent;
    }

    if (e.offsetX) {
        return {
            x: e.offsetX,
            y: e.offsetY,
        };
    }
    else if ((e as any).layerX) { // fallback if mousing outside canvas
        return {
            x: (e as any).layerX,
            y: (e as any).layerY,
        };
    }

    return null;
};

/**
 * Gets the current touch position relative to the top-left of the canvas
 *
 * @param e The touch event
 */
const getTouchPosition = (e: TouchEvent, canvas: HTMLCanvasElement): PointerPosition => {
    if (!e) {
        e = event as TouchEvent;
    }

    if (e.touches) {

        const viewportOffset = canvas.getBoundingClientRect();
        return {
            x: (e.touches[0].clientX - viewportOffset.left),
            y: (e.touches[0].clientY - viewportOffset.top),
        };
    }

    return null;
};

export const PositionUtils = {
    getMousePosition,
    getTouchPosition,
};
