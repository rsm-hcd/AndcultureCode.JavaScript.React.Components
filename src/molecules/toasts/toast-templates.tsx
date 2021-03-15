import { IconSizes } from "../../atoms/constants/icon-sizes";
import { Icon } from "../../atoms/icons/icon";
import { Icons } from "../../atoms/constants/icons";
import React from "react";
import { ToastContent } from "react-toastify";
import "./toast.scss";

const COMPONENT_CLASS = "c-toast-content";
const ICON_CLASS = `${COMPONENT_CLASS}__icon`;
const ICON_CONTAINER_CLASS = `${ICON_CLASS}-container`;

const getTemplate = (
    icon: Icons,
    content: string | ToastContent
): ToastContent => (
    <div className={COMPONENT_CLASS}>
        <div className={ICON_CONTAINER_CLASS}>
            <Icon
                cssClassName={`${ICON_CONTAINER_CLASS}__icon`}
                size={IconSizes.Large}
                type={icon}
            />
        </div>
        <div className={`${COMPONENT_CLASS}__body`}>{content}</div>
    </div>
);

class ToastTemplates {
    static error(content: string | ToastContent): ToastContent {
        return getTemplate(Icons.Warning, content);
    }

    static info(content: string | ToastContent): ToastContent {
        return getTemplate(Icons.Information, content);
    }

    static success(content: string | ToastContent): ToastContent {
        return getTemplate(Icons.Checkmark, content);
    }

    static warning(content: string | ToastContent): ToastContent {
        // warning uses same icon as error, just colored differently
        return ToastTemplates.error(content);
    }
}

export { ToastTemplates };
