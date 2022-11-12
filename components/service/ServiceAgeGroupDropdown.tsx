import {useTranslation} from 'next-i18next';

import {ServiceAgeGroupFragment} from '../../graphql/generated';
import {SelectDropdown} from '../SelectDropdown';

export interface ServiceAgeGroupDropdownProps {
    serviceAgeGroups: ServiceAgeGroupFragment[];
    value: string[];
    onChange: (services: string[]) => void;
}

export const ServiceAgeGroupDropdown: React.FC<ServiceAgeGroupDropdownProps> = ({serviceAgeGroups, value, onChange}) => {
    const {t} = useTranslation();

    return (
        <SelectDropdown
            label={t('serviceAgeGroups.name', 'Age groups')}
            options={serviceAgeGroups.map((ageGroup) => ({
                value: ageGroup.id,
                label: ageGroup.name
            }))}
            value={value}
            onChange={onChange}

            idPrefix="service-age-groups"
            // buttonLabel="Update"
            toggleProps={{color: 'primary', outline: true, style: {width: '10rem'}}}
            menuProps={{style: {width: '20rem'}}}
            wrapperProps={{style: {maxHeight: '50vh', overflowY: 'auto'}}}
        />
    );
};
