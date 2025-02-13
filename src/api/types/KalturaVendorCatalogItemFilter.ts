
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorCatalogItemBaseFilter, KalturaVendorCatalogItemBaseFilterArgs } from './KalturaVendorCatalogItemBaseFilter';

export interface KalturaVendorCatalogItemFilterArgs  extends KalturaVendorCatalogItemBaseFilterArgs {
    partnerIdEqual? : number;
	catalogItemIdEqual? : number;
}


export class KalturaVendorCatalogItemFilter extends KalturaVendorCatalogItemBaseFilter {

    partnerIdEqual : number;
	catalogItemIdEqual : number;

    constructor(data? : KalturaVendorCatalogItemFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorCatalogItemFilter' },
				partnerIdEqual : { type : 'n' },
				catalogItemIdEqual : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorCatalogItemFilter',KalturaVendorCatalogItemFilter);
