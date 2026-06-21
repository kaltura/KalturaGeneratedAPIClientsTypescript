
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaEntryVendorTaskUnitArgs  extends KalturaObjectBaseArgs {
    unitsUsed? : number;
	serviceName? : string;
}


export class KalturaEntryVendorTaskUnit extends KalturaObjectBase {

    unitsUsed : number;
	serviceName : string;

    constructor(data? : KalturaEntryVendorTaskUnitArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntryVendorTaskUnit' },
				unitsUsed : { type : 'n' },
				serviceName : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEntryVendorTaskUnit',KalturaEntryVendorTaskUnit);
