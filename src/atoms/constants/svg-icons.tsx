import { Icons } from "./icons";
import { SvgIcon } from "../interfaces/svg-icon";
import { ReactComponent as Checkmark } from "../../assets/icons/16px/Checkmark.svg";
import { ReactComponent as CheckmarkLarge } from "../../assets/icons/24px/Checkmark.svg";
import { ReactComponent as ChevronDown } from "../../assets/icons/16px/Chevron-Down.svg";
import { ReactComponent as ChevronLeft } from "../../assets/icons/16px/Chevron-Left.svg";
import { ReactComponent as ChevronRight } from "../../assets/icons/16px/Chevron-Right.svg";
import { ReactComponent as ChevronUp } from "../../assets/icons/16px/Chevron-Up.svg";
import { ReactComponent as ChevronDownLarge } from "../../assets/icons/24px/Chevron-Down.svg";
import { ReactComponent as ChevronLeftLarge } from "../../assets/icons/24px/Chevron-Left.svg";
import { ReactComponent as ChevronRightLarge } from "../../assets/icons/24px/Chevron-Right.svg";
import { ReactComponent as ChevronUpLarge } from "../../assets/icons/24px/Chevron-Up.svg";
import { ReactComponent as Close } from "../../assets/icons/16px/Close.svg";
import { ReactComponent as CloseLarge } from "../../assets/icons/24px/Close.svg";
import { ReactComponent as DragAndDrop } from "../../assets/icons/16px/DragAndDrop.svg";
import { ReactComponent as Information } from "../../assets/icons/16px/Information.svg";
import { ReactComponent as InformationLarge } from "../../assets/icons/24px/Information.svg";
import { ReactComponent as Lightbulb } from "../../assets/icons/16px/Lightbulb.svg";
import { ReactComponent as ListLarge } from "../../assets/icons/24px/List.svg";
import { ReactComponent as Plus } from "../../assets/icons/16px/Plus.svg";
import { ReactComponent as PlusLarge } from "../../assets/icons/24px/Plus.svg";
import { ReactComponent as SearchLarge } from "../../assets/icons/24px/Search.svg";
import { ReactComponent as SettingsLarge } from "../../assets/icons/24px/Settings.svg";
import { ReactComponent as Share } from "../../assets/icons/16px/Share.svg";
import { ReactComponent as Trashcan } from "../../assets/icons/16px/Trashcan.svg";
import { ReactComponent as WarningLarge } from "../../assets/icons/24px/Warning.svg";

const SvgIcons: SvgIcon[] = [
    { type: Icons.Checkmark, base: Checkmark, large: CheckmarkLarge },
    { type: Icons.ChevronDown, base: ChevronDown, large: ChevronDownLarge },
    { type: Icons.ChevronLeft, base: ChevronLeft, large: ChevronLeftLarge },
    { type: Icons.ChevronRight, base: ChevronRight, large: ChevronRightLarge },
    { type: Icons.ChevronUp, base: ChevronUp, large: ChevronUpLarge },
    { type: Icons.Close, base: Close, large: CloseLarge },
    { type: Icons.DragAndDrop, base: DragAndDrop, large: DragAndDrop },
    { type: Icons.Information, base: Information, large: InformationLarge },
    { type: Icons.Lightbulb, base: Lightbulb, large: Lightbulb },
    { type: Icons.List, base: ListLarge, large: ListLarge },
    { type: Icons.Plus, base: Plus, large: PlusLarge },
    { type: Icons.Search, base: SearchLarge, large: SearchLarge },
    { type: Icons.Settings, base: SettingsLarge, large: SettingsLarge },
    { type: Icons.Share, base: Share, large: Share },
    { type: Icons.Trashcan, base: Trashcan, large: Trashcan },
    { type: Icons.Warning, base: WarningLarge, large: WarningLarge },
];

export { SvgIcons };
