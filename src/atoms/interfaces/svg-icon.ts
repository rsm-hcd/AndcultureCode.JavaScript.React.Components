import { FunctionComponent, SVGProps } from "react";
import { Icons } from "atoms/constants/icons";

export interface SvgIcon {
    base: FunctionComponent<SVGProps<SVGSVGElement>>;
    large: FunctionComponent<SVGProps<SVGSVGElement>>;
    type: Icons;
}
