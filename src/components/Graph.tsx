import {useQuery} from '@apollo/client';
import {useTranslation} from 'next-i18next';
import dynamic from 'next/dynamic';
import {useMemo} from 'react';
import type {AxisOptions, ChartOptions} from 'react-charts';
import {Spinner} from 'reactstrap';

import {
    GetGraphDocument,
    type GetGraphQuery,
    type GetGraphQueryVariables,
    type ServiceTime
} from '../graphql/generated';

const Chart = dynamic(() => import('react-charts').then((mod) => mod.Chart), {
    ssr: false
});

type PartialSerivceTime = Pick<ServiceTime, 'days' | 'isIndividual'> & {date: Date};

const primaryAxis: AxisOptions<PartialSerivceTime> = {
    getValue: (serviceTime) => serviceTime.date
};

const secondaryAxis: AxisOptions<PartialSerivceTime> = {
    getValue: (serviceTime) => serviceTime.days
};

export interface GraphProps {
    providerIds: string[];
    serviceIds: string[];
    serviceAgeGroupIds: string[];
    serviceTypeIds: string[];
}

export const Graph: React.FC<GraphProps> = ({providerIds, serviceIds, serviceAgeGroupIds, serviceTypeIds}) => {
    const {t} = useTranslation();

    const {loading, data, error} = useQuery<GetGraphQuery, GetGraphQueryVariables>(GetGraphDocument, {
        variables: {
            providerIds,
            serviceIds,
            serviceAgeGroupIds,
            serviceTypeIds
        }
    });

    const graphData = useMemo(
        () =>
            data
                ? data.graph.map(({data, ...series}) => ({
                      data: data.map(({date, ...serviceTime}) => ({
                          date: new Date(date),
                          ...serviceTime
                      })),
                      ...series
                  }))
                : [],
        [data]
    );

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        throw error;
    }

    if (!data) {
        return null;
    }

    return (
        <>
            <div className="mb-3" style={{height: '50vh'}}>
                {graphData.length === 0 && <p>{t('graph.noData', 'No data available for current parameters.')}</p>}

                {graphData.length > 0 && (
                    <Chart
                        // @ts-expect-error: options is not compatible due to the weird import
                        options={
                            {
                                data: graphData,
                                primaryAxis,
                                secondaryAxes: [secondaryAxis]
                            } as ChartOptions<PartialSerivceTime>
                        }
                    />
                )}
            </div>

            <b>{t('graph.list', 'Service offerings in graph')}</b>
            {graphData.length === 0 && <p>{t('graph.noData', 'No data available for current parameters.')}</p>}

            {graphData.length > 0 && (
                <ul>
                    {graphData.map((series) => (
                        <li key={series.id}>{series.label}</li>
                    ))}
                </ul>
            )}
        </>
    );
};
