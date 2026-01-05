
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCortexApiCaptionDistributionInfo } from './KalturaCortexApiCaptionDistributionInfo';
import { KalturaMediaType } from './KalturaMediaType';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';

export interface KalturaCortexApiDistributionJobProviderDataArgs  extends KalturaConfigurableDistributionJobProviderDataArgs {
    videoAssetFilePath? : string;
	thumbAssetFilePath? : string;
	captionsInfo? : KalturaCortexApiCaptionDistributionInfo[];
	mediaType? : KalturaMediaType;
}


export class KalturaCortexApiDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {

    videoAssetFilePath : string;
	thumbAssetFilePath : string;
	captionsInfo : KalturaCortexApiCaptionDistributionInfo[];
	mediaType : KalturaMediaType;

    constructor(data? : KalturaCortexApiDistributionJobProviderDataArgs)
    {
        super(data);
        if (typeof this.captionsInfo === 'undefined') this.captionsInfo = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCortexApiDistributionJobProviderData' },
				videoAssetFilePath : { type : 's' },
				thumbAssetFilePath : { type : 's' },
				captionsInfo : { type : 'a', subTypeConstructor : KalturaCortexApiCaptionDistributionInfo, subType : 'KalturaCortexApiCaptionDistributionInfo' },
				mediaType : { type : 'en', subTypeConstructor : KalturaMediaType, subType : 'KalturaMediaType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCortexApiDistributionJobProviderData',KalturaCortexApiDistributionJobProviderData);
