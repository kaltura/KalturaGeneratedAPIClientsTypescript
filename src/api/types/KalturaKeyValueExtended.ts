
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaKeyValue, KalturaKeyValueArgs } from './KalturaKeyValue';

export interface KalturaKeyValueExtendedArgs  extends KalturaKeyValueArgs {
    predefinedFormat? : KalturaNullableBoolean;
}


export class KalturaKeyValueExtended extends KalturaKeyValue {

    predefinedFormat : KalturaNullableBoolean;

    constructor(data? : KalturaKeyValueExtendedArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaKeyValueExtended' },
				predefinedFormat : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaKeyValueExtended',KalturaKeyValueExtended);
