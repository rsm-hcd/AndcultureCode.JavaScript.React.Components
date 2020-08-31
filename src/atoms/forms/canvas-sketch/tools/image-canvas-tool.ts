import { CanvasToolType } from "../enums/canvas-tool-type";
import { CoreUtils } from "../../../../utilities/core-utils";

// -------------------------------------------------------------------------------------------------
// #region Interfaces
// -------------------------------------------------------------------------------------------------

export interface ImageSettings {
    destRecEndX?: number;
    destRecEndY?: number;
    destRecStartX?: number;
    destRecStartY?: number;
    src: string; // URL
}

export interface ImageConfig {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
}

// #endregion Interfaces

class ImageCanvasTool {
    public toolType: CanvasToolType;

    private _config: ImageConfig;
    private _shouldCenterInDestRectangle: boolean;
    private _shouldFitInCanvas: boolean;
    private _shouldScaleToFitDestRectangle: boolean;

    constructor(config: ImageConfig) {
        this._config = config;
        this._shouldCenterInDestRectangle = false;
        this._shouldFitInCanvas = false;
        this._shouldScaleToFitDestRectangle = false;

        this.toolType = CanvasToolType.image;

        CoreUtils.bindAll(this);
    }

    // ---------------------------------------------------------------------------------------------
    // #region Public Methods
    // ---------------------------------------------------------------------------------------------

    public dispose(): void {}

    public drawImages(images: ImageSettings[]): void {
        (images as ImageSettings[]).forEach(
            (image: ImageSettings, imageI: number) => {
                this.drawImage(image);
            }
        );
    }

    public drawImage(image: ImageSettings): void {
        this._drawImage(
            image.destRecEndX,
            image.destRecEndY,
            image.destRecStartX,
            image.destRecStartY,
            image.src
        );
    }

    public initialize(): void {}

    public setShouldCenterInDestRectangle(
        shouldCenterInDestRectangle: boolean
    ): void {
        this._shouldCenterInDestRectangle = shouldCenterInDestRectangle;
    }

    public setShouldFitInCanvas(shouldFitInCanvas: boolean): void {
        this._shouldFitInCanvas = shouldFitInCanvas;
    }

    public setShouldScaleToFitDestRectangle(
        shouldScaleToFitDestRectangle: boolean
    ): void {
        this._shouldScaleToFitDestRectangle = shouldScaleToFitDestRectangle;
    }

    // #endregion Public Methods

    // ---------------------------------------------------------------------------------------------
    // #region Private Methods
    // ---------------------------------------------------------------------------------------------

    /**
     * Draws the image url to the canvas
     *
     * @param url
     * @param destRecStartX
     * @param destRecStartY
     * @param destRecEndX
     * @param destRecEndY
     */
    private _drawImage(
        destRecEndX?: number,
        destRecEndY?: number,
        destRecStartX?: number,
        destRecStartY?: number,
        url?: string
    ): void {
        const image = new Image();
        image.onload = () => {
            if (destRecStartX == null) {
                destRecStartX = 0;
            }
            if (destRecStartY == null) {
                destRecStartY = 0;
            }
            if (destRecEndX == null) {
                destRecEndX = image.width;
            }
            if (destRecEndY == null) {
                destRecEndY = image.height;
            }

            // get destination rectangle dimensions and aspect ratio
            const destRectWidth = destRecEndX - destRecStartX;
            const destRectHeight = destRecEndY - destRecStartY;

            let newDestRecStartX: number = destRecStartX;
            let newDestRecStartY: number = destRecStartY;

            let newImageWidth = image.width;
            let newImageHeight = image.height;

            if (
                this._shouldFitInCanvas &&
                (image.width > this._config.canvas.width ||
                    image.height > this._config.canvas.height)
            ) {
                // scale down the image dimensions to fit inside the canvas
                const canvasAspectRatio =
                    this._config.canvas.width / this._config.canvas.height;
                newImageWidth = image.width / canvasAspectRatio;
                newImageHeight = image.height / canvasAspectRatio;
            }

            if (
                this._shouldScaleToFitDestRectangle &&
                (image.width > destRectWidth || image.height > destRectHeight)
            ) {
                // scale down the image dimension to fit the destination rectangle canvas space
                const destRectAspectRatio = destRectWidth / destRectHeight;
                newImageWidth = image.width / destRectAspectRatio;
                newImageHeight = image.height / destRectAspectRatio;
            }

            if (this._shouldCenterInDestRectangle) {
                // define the new rect space in order to center the image in the canvas
                newDestRecStartX =
                    destRecStartX + (destRectWidth - newImageWidth) / 2;
                newDestRecStartY =
                    destRecStartY + (destRectHeight - newImageHeight) / 2;
            }

            this._config.context.drawImage(
                image,
                0, // start of image clipping X
                0, // start of image clipping Y
                image.width, // finish of image clipping X
                image.height, // finish of image clipping Y
                newDestRecStartX, // start of destination rectangle X
                newDestRecStartY, // start of destination rectangle Y
                newImageWidth, // new rectangle width
                newImageHeight
            ); // new rectangle height
        };

        if (url != null) {
            image.src = url;
        }
    }

    // #endregion Private Methods
}

export { ImageCanvasTool };
