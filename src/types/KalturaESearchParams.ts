
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchOperator } from './KalturaESearchOperator';
import { KalturaESearchOrderBy } from './KalturaESearchOrderBy';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaESearchParamsArgs  extends KalturaObjectBaseArgs {
    searchOperator? : KalturaESearchOperator;
	objectStatuses? : string;
	orderBy? : KalturaESearchOrderBy;
}


export class KalturaESearchParams extends KalturaObjectBase {

    searchOperator : KalturaESearchOperator;
	objectStatuses : string;
	orderBy : KalturaESearchOrderBy;

    constructor(data? : KalturaESearchParamsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchParams' },
				searchOperator : { type : 'o', subTypeConstructor : KalturaESearchOperator, subType : 'KalturaESearchOperator' },
				objectStatuses : { type : 's' },
				orderBy : { type : 'o', subTypeConstructor : KalturaESearchOrderBy, subType : 'KalturaESearchOrderBy' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchParams',KalturaESearchParams);
