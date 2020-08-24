import React from "react";
import { text, number, select, boolean } from "@storybook/addon-knobs";
import { ReactCanvasSketch } from "./react-canvas-sketch";
import { CanvasDrawToolSettings } from "./tools/base-canvas-draw-tool";
import { CanvasToolType } from "./enums/canvas-tool-type";

export default {
    component: ReactCanvasSketch,
    title: "Atoms | Forms / Canvas Sketch",
};

const canvasToolTypes = [
    CanvasToolType.line,
    CanvasToolType.pan,
    CanvasToolType.pencil,
];

export const reactCanvasSketch = () => (
    <ReactCanvasSketch
        backgroundImageUrl={text("Background Image URL", "https://rlv.zcache.com/yellow_emoji_birthday_party_happy_face_symbol_classic_round_sticker-r821c9ad7d35943228f0f0e973050e063_0ugmm_8byvr_704.jpg")}
        canvasHeight={number("Canvas Height", 500)}
        canvasWidth={number("Canvas Width", 1000)}
        className={text("Class Name", "")}
        containerHeight={number("Container Height", 300)}
        containerWidth={number("Container Width", 600)}
        onAddedStroke={(strokeSettings: CanvasDrawToolSettings) => { console.log(`onAddedStroke: ${JSON.stringify(strokeSettings)}`) }}
        redrawIncrement={number("Redraw Trigger Increment", 1)}
        canvasToolType={select("Tool Type", canvasToolTypes, CanvasToolType.pencil)}
        showCanvasBorder={boolean("Show Border", true)}
        toolWidth={number("Tool Width", 1)}
        toolColor={text("Tool Color", "FFFFFF")}
        value={{ currentObjectIndex: -1, objects: [] }}
    />
);
