import * as React from "react";
import { PropsWithChildren } from "react";
import "./form.scss";

const COMPONENT_CLASS = "c-form";

interface FormProps {
    action?: string;
    buttonText?: string;
    cssClassName?: string;
    id?: string;
    method?: string;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormProps> = (props: PropsWithChildren<FormProps>) => (
    <form
        action={props.action}
        className={props.cssClassName ?? COMPONENT_CLASS}
        id={props.id}
        method={props.method}
        onSubmit={props.onSubmit}>
        {props.children}
    </form>
);

export { Form };
