
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRegexCondition, KalturaRegexConditionArgs } from './KalturaRegexCondition';

export interface KalturaHttpHeaderConditionArgs  extends KalturaRegexConditionArgs {
    headerName? : string;
}


export class KalturaHttpHeaderCondition extends KalturaRegexCondition {

    headerName : string;

    constructor(data? : KalturaHttpHeaderConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHttpHeaderCondition' },
				headerName : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHttpHeaderCondition',KalturaHttpHeaderCondition);
