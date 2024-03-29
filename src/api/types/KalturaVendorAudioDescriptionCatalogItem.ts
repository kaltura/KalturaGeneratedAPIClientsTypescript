
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorCatalogItem, KalturaVendorCatalogItemArgs } from './KalturaVendorCatalogItem';

export interface KalturaVendorAudioDescriptionCatalogItemArgs  extends KalturaVendorCatalogItemArgs {
    flavorParamsId? : number;
	clearAudioFlavorParamsId? : number;
}


export class KalturaVendorAudioDescriptionCatalogItem extends KalturaVendorCatalogItem {

    flavorParamsId : number;
	clearAudioFlavorParamsId : number;

    constructor(data? : KalturaVendorAudioDescriptionCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorAudioDescriptionCatalogItem' },
				flavorParamsId : { type : 'n' },
				clearAudioFlavorParamsId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorAudioDescriptionCatalogItem',KalturaVendorAudioDescriptionCatalogItem);
