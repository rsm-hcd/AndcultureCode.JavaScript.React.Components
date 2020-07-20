// import { optionsKnob } from "@storybook/addon-knobs";
import { DropdownButton } from "./dropdown-button";
import React from "react";
// import { ButtonSizes } from "../../atoms/constants/button-sizes";
// import { ButtonStyles } from "../../atoms/constants/button-styles";
// import { Icon } from "../../atoms/icons/icon";
// import { Icons } from "../../atoms/constants/icons";

export default {
    component: DropdownButton,
    title: "Molecules | Dropdown Button",
};

export const dropdownButtonKnobs = () => {
    // const items: Array<DropdownItem> = [
    //     {
    //         component: "Item #1",
    //         onSelect: () => window.alert("Clicked dropdown item #1!"),
    //     },
    //     {
    //         component: "Item #2",
    //         onSelect: () => window.alert("Clicked dropdown item #2!"),
    //     },
    //     {
    //         component: "Item #3",
    //         onSelect: () => window.alert("Clicked dropdown item #3!"),
    //     },
    //     {
    //         component: "Item #4",
    //         onSelect: () => window.alert("Clicked dropdown item #4!"),
    //     },
    //     {
    //         component: "Item #5",
    //         onSelect: () => window.alert("Clicked dropdown item #5!"),
    //     },
    // ];

    return (
        <strong>
            TODO:
            https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/issues/22
        </strong>
        // <DropdownButton
        //     buttonContents={
        //         <React.Fragment>
        //             Dropdown
        //             <Icon type={Icons.ChevronDown} />
        //         </React.Fragment>
        //     }
        //     menuItems={items}
        //     size={optionsKnob(
        //         "Button Size",
        //         {
        //             small: ButtonSizes.Small,
        //             medium: ButtonSizes.Medium,
        //             large: ButtonSizes.Large,
        //         },
        //         ButtonSizes.Small,
        //         { display: "radio" }
        //     )}
        //     style={optionsKnob(
        //         "Button Style",
        //         {
        //             anchor: ButtonStyles.Anchor,
        //             destructive: ButtonStyles.Destructive,
        //             primary: ButtonStyles.Primary,
        //             secondary: ButtonStyles.Secondary,
        //             tertiary: ButtonStyles.Tertiary,
        //             tertiaryAlt: ButtonStyles.TertiaryAlt,
        //         },
        //         ButtonStyles.Primary,
        //         { display: "radio" }
        //     )}
        // />
    );
};
