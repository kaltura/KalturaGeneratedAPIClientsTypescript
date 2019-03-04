
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBeaconScheduledResourceOperator } from './KalturaBeaconScheduledResourceOperator';
import { KalturaBeaconSearchScheduledResourceOrderBy } from './KalturaBeaconSearchScheduledResourceOrderBy';
import { KalturaBeaconSearchParams, KalturaBeaconSearchParamsArgs } from './KalturaBeaconSearchParams';

export interface KalturaBeaconScheduledResourceSearchParamsArgs  extends KalturaBeaconSearchParamsArgs {
    searchOperator? : KalturaBeaconScheduledResourceOperator;
	orderBy? : KalturaBeaconSearchScheduledResourceOrderBy;
}


export class KalturaBeaconScheduledResourceSearchParams extends KalturaBeaconSearchParams {

    searchOperator : KalturaBeaconScheduledResourceOperator;
	orderBy : KalturaBeaconSearchScheduledResourceOrderBy;

    constructor(data? : KalturaBeaconScheduledResourceSearchParamsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBeaconScheduledResourceSearchParams' },
				searchOperator : { type : 'o', subTypeConstructor : KalturaBeaconScheduledResourceOperator, subType : 'KalturaBeaconScheduledResourceOperator' },
				orderBy : { type : 'o', subTypeConstructor : KalturaBeaconSearchScheduledResourceOrderBy, subType : 'KalturaBeaconSearchScheduledResourceOrderBy' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBeaconScheduledResourceSearchParams',KalturaBeaconScheduledResourceSearchParams);
