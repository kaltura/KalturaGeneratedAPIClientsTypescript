
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSessionType } from './KalturaSessionType';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaSessionTypeConditionArgs  extends KalturaConditionArgs {
    sessionType? : KalturaSessionType;
}


export class KalturaSessionTypeCondition extends KalturaCondition {

    sessionType : KalturaSessionType;

    constructor(data? : KalturaSessionTypeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSessionTypeCondition' },
				sessionType : { type : 'en', subTypeConstructor : KalturaSessionType, subType : 'KalturaSessionType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSessionTypeCondition',KalturaSessionTypeCondition);
