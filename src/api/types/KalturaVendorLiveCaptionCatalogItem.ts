
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorLiveCatalogItem, KalturaVendorLiveCatalogItemArgs } from './KalturaVendorLiveCatalogItem';

export interface KalturaVendorLiveCaptionCatalogItemArgs  extends KalturaVendorLiveCatalogItemArgs {
    startTimeBuffer? : number;
	endTimeBuffer? : number;
}


export class KalturaVendorLiveCaptionCatalogItem extends KalturaVendorLiveCatalogItem {

    startTimeBuffer : number;
	endTimeBuffer : number;

    constructor(data? : KalturaVendorLiveCaptionCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorLiveCaptionCatalogItem' },
				startTimeBuffer : { type : 'n' },
				endTimeBuffer : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorLiveCaptionCatalogItem',KalturaVendorLiveCaptionCatalogItem);
