
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaVendorTaskDataArgs  extends KalturaObjectBaseArgs {
    vendorComment? : string;
}


export class KalturaVendorTaskData extends KalturaObjectBase {

    readonly entryDuration : number;
	vendorComment : string;

    constructor(data? : KalturaVendorTaskDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorTaskData' },
				entryDuration : { type : 'n', readOnly : true },
				vendorComment : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorTaskData',KalturaVendorTaskData);
