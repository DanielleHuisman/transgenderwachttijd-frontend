import {useTranslation} from 'next-i18next';

import {ProviderFragment} from '../../graphql/generated';
import {SelectDropdown} from '../SelectDropdown';

export interface ProviderDropdownProps {
    providers: ProviderFragment[];
    value: string[];
    onChange: (providers: string[]) => void;
}

export const ProviderDropdown: React.FC<ProviderDropdownProps> = ({providers, value, onChange}) => {
    const {t} = useTranslation();

    return (
        <SelectDropdown
            label={t('providers.name', 'Providers')}
            options={providers.map((provider) => ({
                value: provider.id,
                label: provider.name
            }))}
            value={value}
            onChange={onChange}

            idPrefix="providers"
            // buttonLabel="Update"
            toggleProps={{color: 'primary', outline: true, style: {width: '10rem'}}}
            menuProps={{style: {width: '20rem'}}}
            wrapperProps={{style: {maxHeight: '50vh', overflowY: 'auto'}}}
        />
    );
};
