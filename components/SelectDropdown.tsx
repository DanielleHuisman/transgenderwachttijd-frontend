import {CSSProperties, DetailedHTMLProps, HTMLAttributes, useState} from 'react';
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

export interface SelectDropdownProps extends Omit<DropdownProps, 'onChange'> {
    label: string;
    options: {
        value: string;
        label: string;
        className?: string;
        style?: CSSProperties;
    }[];
    value: string[];
    onChange: (value: string[]) => void;
    onButtonClick?: () => void;

    idPrefix?: string;
    buttonLabel?: string;
    buttonProps?: ButtonProps;

    toggleProps?: DropdownToggleProps;
    menuProps?: DropdownMenuProps;
    wrapperProps?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

export const SelectDropdown: React.FC<SelectDropdownProps> = ({
    label, options, value, onChange, onButtonClick, idPrefix, buttonLabel, buttonProps, toggleProps, menuProps, wrapperProps, ...props
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleButtonClick = () => {
        if (onButtonClick) {
            onButtonClick();
        }
        setIsOpen(false);
    };

    return (
        <Dropdown isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} {...props}>
            <DropdownToggle caret {...toggleProps}>
                {label}
            </DropdownToggle>
            <DropdownMenu className="p-3" {...menuProps}>
                <div className="p-1" {...wrapperProps}>
                    {options.map(({value: optionValue, label, className, style}) => {
                        const isChecked = value.includes(optionValue);

                        return (
                            <FormGroup key={optionValue} className={className} style={style} check>
                                <Input
                                    id={idPrefix ? `${idPrefix}-${optionValue}` : undefined}
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={() => onChange(isChecked ? value.filter((v) => v !== optionValue) : value.concat([optionValue]))}
                                />
                                <Label for={idPrefix ? `${idPrefix}-${optionValue}` : undefined} check>
                                    {label}
                                </Label>
                            </FormGroup>
                        );
                    })}
                </div>

                {buttonLabel && (
                    <div className="d-grid mt-2">
                        <Button color="primary" onClick={handleButtonClick} {...buttonProps}>{buttonLabel}</Button>
                    </div>
                )}
            </DropdownMenu>
        </Dropdown>
    );
};
