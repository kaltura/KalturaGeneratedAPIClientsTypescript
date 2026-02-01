
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorTaskData, KalturaVendorTaskDataArgs } from './KalturaVendorTaskData';

export interface KalturaSpeechToVideoVendorTaskDataArgs  extends KalturaVendorTaskDataArgs {
    avatarId? : string;
	conversionProfileId? : number;
}


export class KalturaSpeechToVideoVendorTaskData extends KalturaVendorTaskData {

    avatarId : string;
	conversionProfileId : number;

    constructor(data? : KalturaSpeechToVideoVendorTaskDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSpeechToVideoVendorTaskData' },
				avatarId : { type : 's' },
				conversionProfileId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSpeechToVideoVendorTaskData',KalturaSpeechToVideoVendorTaskData);
