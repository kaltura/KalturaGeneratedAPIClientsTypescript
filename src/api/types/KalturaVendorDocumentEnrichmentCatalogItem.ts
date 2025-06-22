
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorDocumentEnrichmentType } from './KalturaVendorDocumentEnrichmentType';
import { KalturaVendorCatalogItem, KalturaVendorCatalogItemArgs } from './KalturaVendorCatalogItem';

export interface KalturaVendorDocumentEnrichmentCatalogItemArgs  extends KalturaVendorCatalogItemArgs {
    documentEnrichmentType? : KalturaVendorDocumentEnrichmentType;
}


export class KalturaVendorDocumentEnrichmentCatalogItem extends KalturaVendorCatalogItem {

    documentEnrichmentType : KalturaVendorDocumentEnrichmentType;

    constructor(data? : KalturaVendorDocumentEnrichmentCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorDocumentEnrichmentCatalogItem' },
				documentEnrichmentType : { type : 'en', subTypeConstructor : KalturaVendorDocumentEnrichmentType, subType : 'KalturaVendorDocumentEnrichmentType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorDocumentEnrichmentCatalogItem',KalturaVendorDocumentEnrichmentCatalogItem);
