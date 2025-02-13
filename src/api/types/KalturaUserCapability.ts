
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserCapabilityType } from './KalturaUserCapabilityType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUserCapabilityArgs  extends KalturaObjectBaseArgs {
    capability? : KalturaUserCapabilityType;
}


export class KalturaUserCapability extends KalturaObjectBase {

    capability : KalturaUserCapabilityType;

    constructor(data? : KalturaUserCapabilityArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserCapability' },
				capability : { type : 'es', subTypeConstructor : KalturaUserCapabilityType, subType : 'KalturaUserCapabilityType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserCapability',KalturaUserCapability);
