
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorVideoAnalysisType } from './KalturaVendorVideoAnalysisType';
import { KalturaVendorCatalogItem, KalturaVendorCatalogItemArgs } from './KalturaVendorCatalogItem';

export interface KalturaVendorVideoAnalysisCatalogItemArgs  extends KalturaVendorCatalogItemArgs {
    videoAnalysisType? : KalturaVendorVideoAnalysisType;
	maxVideoDuration? : number;
}


export class KalturaVendorVideoAnalysisCatalogItem extends KalturaVendorCatalogItem {

    videoAnalysisType : KalturaVendorVideoAnalysisType;
	maxVideoDuration : number;

    constructor(data? : KalturaVendorVideoAnalysisCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorVideoAnalysisCatalogItem' },
				videoAnalysisType : { type : 'en', subTypeConstructor : KalturaVendorVideoAnalysisType, subType : 'KalturaVendorVideoAnalysisType' },
				maxVideoDuration : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorVideoAnalysisCatalogItem',KalturaVendorVideoAnalysisCatalogItem);
