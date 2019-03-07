
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorCredit, KalturaVendorCreditArgs } from './KalturaVendorCredit';

export interface KalturaTimeRangeVendorCreditArgs  extends KalturaVendorCreditArgs {
    toDate? : Date;
}


export class KalturaTimeRangeVendorCredit extends KalturaVendorCredit {

    toDate : Date;

    constructor(data? : KalturaTimeRangeVendorCreditArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTimeRangeVendorCredit' },
				toDate : { type : 'd' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTimeRangeVendorCredit',KalturaTimeRangeVendorCredit);
