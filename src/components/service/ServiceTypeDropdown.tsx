import {useTranslation} from 'next-i18next';

import type {ServiceTypeFragment} from '../../graphql/generated';
import {SelectDropdown} from '../SelectDropdown';

export interface ServiceTypeDropdownProps {
    serviceTypes: ServiceTypeFragment[];
    value: string[];
    onChange: (services: string[]) => void;
}

export const ServiceTypeDropdown: React.FC<ServiceTypeDropdownProps> = ({serviceTypes, value, onChange}) => {
    const {t} = useTranslation();

    return (
        <SelectDropdown
            label={t('serviceTypes.name', 'Types')}
            options={serviceTypes.map((serviceType) => ({
                value: serviceType.id,
                label: serviceType.name
            }))}
            value={value}
            onChange={onChange}
            idPrefix="service-types"
            // buttonLabel="Update"
            toggleProps={{color: 'primary', outline: true, style: {width: '10rem'}}}
            menuProps={{style: {width: '20rem'}}}
            wrapperProps={{style: {maxHeight: '50vh', overflowY: 'auto'}}}
        />
    );
};
