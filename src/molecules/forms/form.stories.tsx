import Faker from "faker";
import { Form } from "./form";
import React from "react";
import { text } from "@storybook/addon-knobs";
import { SubmitButton } from "../../atoms/forms/submit-button";

export default {
    component: Form,
    title: "Molecules | Forms / Form",
};

const renderChildren = () => (
    <React.Fragment>
        <div className="c-form-field">
            <label>
                {Faker.hacker.noun()}
                <input type="text"></input>
            </label>
        </div>

        <SubmitButton />
    </React.Fragment>
);

export const formDefault = () => (
    <Form onSubmit={() => alert("form submitted")}>{renderChildren()}</Form>
);

export const formKnobs = () => (
    <Form
        buttonText={text("buttonText", "Submit")}
        cssClassName={text("cssClassName", "c-form")}
        onSubmit={() => alert("Form Submitted")}>
        {renderChildren()}
    </Form>
);
