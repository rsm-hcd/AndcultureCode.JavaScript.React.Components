import Faker from "faker";
import { AccessibleList } from "./accessible-list";
import React from "react";
import { Button } from "../../atoms/buttons/button";
import { ButtonSizes } from "../../atoms/constants/button-sizes";
import { ButtonStyles } from "../../atoms/constants/button-styles";

export default {
    component: AccessibleList,
    title: "Molecules | Accessible List / Accessible List",
};

export const accessibleListDefault = () => (
    <AccessibleList focusFirstItem={true}>
        <Button style={ButtonStyles.Primary} size={ButtonSizes.Medium}>
            {Faker.lorem.words(5)}
        </Button>
    </AccessibleList>
);
