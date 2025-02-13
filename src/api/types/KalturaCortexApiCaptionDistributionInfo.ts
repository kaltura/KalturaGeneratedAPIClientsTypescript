
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCortexApiDistributionCaptionAction } from './KalturaCortexApiDistributionCaptionAction';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCortexApiCaptionDistributionInfoArgs  extends KalturaObjectBaseArgs {
    language? : string;
	label? : string;
	filePath? : string;
	remoteId? : string;
	action? : KalturaCortexApiDistributionCaptionAction;
	version? : string;
	assetId? : string;
	fileExt? : string;
}


export class KalturaCortexApiCaptionDistributionInfo extends KalturaObjectBase {

    language : string;
	label : string;
	filePath : string;
	remoteId : string;
	action : KalturaCortexApiDistributionCaptionAction;
	version : string;
	assetId : string;
	fileExt : string;

    constructor(data? : KalturaCortexApiCaptionDistributionInfoArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCortexApiCaptionDistributionInfo' },
				language : { type : 's' },
				label : { type : 's' },
				filePath : { type : 's' },
				remoteId : { type : 's' },
				action : { type : 'en', subTypeConstructor : KalturaCortexApiDistributionCaptionAction, subType : 'KalturaCortexApiDistributionCaptionAction' },
				version : { type : 's' },
				assetId : { type : 's' },
				fileExt : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCortexApiCaptionDistributionInfo',KalturaCortexApiCaptionDistributionInfo);
