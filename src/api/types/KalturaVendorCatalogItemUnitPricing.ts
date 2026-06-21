
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorCatalogItemPricing } from './KalturaVendorCatalogItemPricing';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaVendorCatalogItemUnitPricingArgs  extends KalturaObjectBaseArgs {
    serviceName? : string;
	priceUnit? : KalturaVendorCatalogItemPricing;
}


export class KalturaVendorCatalogItemUnitPricing extends KalturaObjectBase {

    serviceName : string;
	priceUnit : KalturaVendorCatalogItemPricing;

    constructor(data? : KalturaVendorCatalogItemUnitPricingArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorCatalogItemUnitPricing' },
				serviceName : { type : 's' },
				priceUnit : { type : 'o', subTypeConstructor : KalturaVendorCatalogItemPricing, subType : 'KalturaVendorCatalogItemPricing' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorCatalogItemUnitPricing',KalturaVendorCatalogItemUnitPricing);
