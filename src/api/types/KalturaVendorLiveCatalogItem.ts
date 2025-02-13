
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorCaptionsCatalogItem, KalturaVendorCaptionsCatalogItemArgs } from './KalturaVendorCaptionsCatalogItem';

export interface KalturaVendorLiveCatalogItemArgs  extends KalturaVendorCaptionsCatalogItemArgs {
    minimalRefundTime? : number;
	minimalOrderTime? : number;
	durationLimit? : number;
}


export class KalturaVendorLiveCatalogItem extends KalturaVendorCaptionsCatalogItem {

    minimalRefundTime : number;
	minimalOrderTime : number;
	durationLimit : number;

    constructor(data? : KalturaVendorLiveCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorLiveCatalogItem' },
				minimalRefundTime : { type : 'n' },
				minimalOrderTime : { type : 'n' },
				durationLimit : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorLiveCatalogItem',KalturaVendorLiveCatalogItem);
