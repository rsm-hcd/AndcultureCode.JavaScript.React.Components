import { FunctionComponent, SVGProps } from "react";

export interface SvgIcon {
    base: FunctionComponent<SVGProps<SVGSVGElement>>;
    large: FunctionComponent<SVGProps<SVGSVGElement>>;
    type: string; // TODO: attempt typing this value
}
