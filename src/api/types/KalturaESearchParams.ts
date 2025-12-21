
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchOrderBy } from './KalturaESearchOrderBy';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaESearchScoreFunctionParams } from './KalturaESearchScoreFunctionParams';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaESearchParamsArgs  extends KalturaObjectBaseArgs {
    objectStatuses? : string;
	objectId? : string;
	orderBy? : KalturaESearchOrderBy;
	ignoreSynonym? : boolean;
	objectIds? : string;
	objectIdsNotIn? : KalturaNullableBoolean;
	scoreFunctionParams? : KalturaESearchScoreFunctionParams;
}


export class KalturaESearchParams extends KalturaObjectBase {

    objectStatuses : string;
	objectId : string;
	orderBy : KalturaESearchOrderBy;
	ignoreSynonym : boolean;
	objectIds : string;
	objectIdsNotIn : KalturaNullableBoolean;
	scoreFunctionParams : KalturaESearchScoreFunctionParams;

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
				objectStatuses : { type : 's' },
				objectId : { type : 's' },
				orderBy : { type : 'o', subTypeConstructor : KalturaESearchOrderBy, subType : 'KalturaESearchOrderBy' },
				ignoreSynonym : { type : 'b' },
				objectIds : { type : 's' },
				objectIdsNotIn : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				scoreFunctionParams : { type : 'o', subTypeConstructor : KalturaESearchScoreFunctionParams, subType : 'KalturaESearchScoreFunctionParams' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchParams',KalturaESearchParams);
