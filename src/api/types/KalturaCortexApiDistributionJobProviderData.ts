
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCortexApiCaptionDistributionInfo } from './KalturaCortexApiCaptionDistributionInfo';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';

export interface KalturaCortexApiDistributionJobProviderDataArgs  extends KalturaConfigurableDistributionJobProviderDataArgs {
    videoAssetFilePath? : string;
	thumbAssetFilePath? : string;
	captionsInfo? : KalturaCortexApiCaptionDistributionInfo[];
}


export class KalturaCortexApiDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {

    videoAssetFilePath : string;
	thumbAssetFilePath : string;
	captionsInfo : KalturaCortexApiCaptionDistributionInfo[];

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
				captionsInfo : { type : 'a', subTypeConstructor : KalturaCortexApiCaptionDistributionInfo, subType : 'KalturaCortexApiCaptionDistributionInfo' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCortexApiDistributionJobProviderData',KalturaCortexApiDistributionJobProviderData);
