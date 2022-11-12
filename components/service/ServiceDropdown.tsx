import {useTranslation} from 'next-i18next';

import {ServiceFragment} from '../../graphql/generated';
import {FlatTreeItem} from '../../util/tree';
import {SelectDropdown} from '../SelectDropdown';

export interface ServiceDropdownProps {
    services: FlatTreeItem<ServiceFragment>[];
    value: string[];
    onChange: (services: string[]) => void;
}

export const ServiceDropdown: React.FC<ServiceDropdownProps> = ({services, value, onChange}) => {
    const {t} = useTranslation();

    return (
        <SelectDropdown
            label={t('services.name', 'Services')}
            options={services.map(([service, depth]) => ({
                value: service.id,
                label: service.name,
                style: {
                    marginLeft: `${2 * depth}rem`
                }
            }))}
            value={value}
            onChange={onChange}

            idPrefix="services"
            // buttonLabel="Update"
            toggleProps={{color: 'primary', outline: true, style: {width: '10rem'}}}
            menuProps={{style: {width: '20rem'}}}
            wrapperProps={{style: {maxHeight: '50vh', overflowY: 'auto'}}}
        />
    );
};
