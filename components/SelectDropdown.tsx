import {DetailedHTMLProps, HTMLAttributes, useState} from 'react';
import {
    Button,
    ButtonProps,
    Dropdown,
    DropdownMenu,
    DropdownMenuProps,
    DropdownProps,
    DropdownToggle,
    DropdownToggleProps,
    FormGroup,
    Input,
    Label
} from 'reactstrap';

export interface SelectDropdownProps extends DropdownProps {
    label: string;
    options: {
        value: string;
        label: string;
    }[];

    idPrefix?: string;
    buttonLabel?: string;
    buttonProps?: ButtonProps;

    toggleProps?: DropdownToggleProps;
    menuProps?: DropdownMenuProps;
    wrapperProps?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

export const SelectDropdown: React.FC<SelectDropdownProps> = ({
    label, options, idPrefix, buttonLabel, buttonProps, toggleProps, menuProps, wrapperProps, ...props
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dropdown isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} {...props}>
            <DropdownToggle caret {...toggleProps}>
                {label}
            </DropdownToggle>
            <DropdownMenu className="p-3" {...menuProps}>
                <div {...wrapperProps}>
                    {options.map(({value, label}) => (
                        <FormGroup key={value} check>
                            <Input id={idPrefix ? `${idPrefix}-${value}` : undefined} type="checkbox" />
                            <Label for={idPrefix ? `${idPrefix}-${value}` : undefined} check>
                                {label}
                            </Label>
                        </FormGroup>
                    ))}
                </div>

                {buttonLabel && (
                    <div className="d-grid mt-2">
                        <Button color="primary" {...buttonProps}>{buttonLabel}</Button>
                    </div>
                )}
            </DropdownMenu>
        </Dropdown>
    );
};
