
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetType } from './KalturaAssetType';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaCaptureThumbJobDataArgs  extends KalturaJobDataArgs {
    srcFileSyncLocalPath? : string;
	actualSrcFileSyncLocalPath? : string;
	srcFileSyncRemoteUrl? : string;
	thumbParamsOutputId? : number;
	thumbAssetId? : string;
	srcAssetId? : string;
	srcAssetType? : KalturaAssetType;
	thumbPath? : string;
}


export class KalturaCaptureThumbJobData extends KalturaJobData {

    srcFileSyncLocalPath : string;
	actualSrcFileSyncLocalPath : string;
	srcFileSyncRemoteUrl : string;
	thumbParamsOutputId : number;
	thumbAssetId : string;
	srcAssetId : string;
	srcAssetType : KalturaAssetType;
	thumbPath : string;

    constructor(data? : KalturaCaptureThumbJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCaptureThumbJobData' },
				srcFileSyncLocalPath : { type : 's' },
				actualSrcFileSyncLocalPath : { type : 's' },
				srcFileSyncRemoteUrl : { type : 's' },
				thumbParamsOutputId : { type : 'n' },
				thumbAssetId : { type : 's' },
				srcAssetId : { type : 's' },
				srcAssetType : { type : 'es', subTypeConstructor : KalturaAssetType, subType : 'KalturaAssetType' },
				thumbPath : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCaptureThumbJobData',KalturaCaptureThumbJobData);
