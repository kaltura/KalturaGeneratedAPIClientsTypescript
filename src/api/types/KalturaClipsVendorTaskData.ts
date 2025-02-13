
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorTaskData, KalturaVendorTaskDataArgs } from './KalturaVendorTaskData';

export interface KalturaClipsVendorTaskDataArgs  extends KalturaVendorTaskDataArgs {
    clipsDuration? : number;
	eventSessionContextId? : string;
	instruction? : string;
	clipsOutputJson? : string;
}


export class KalturaClipsVendorTaskData extends KalturaVendorTaskData {

    clipsDuration : number;
	eventSessionContextId : string;
	instruction : string;
	clipsOutputJson : string;

    constructor(data? : KalturaClipsVendorTaskDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaClipsVendorTaskData' },
				clipsDuration : { type : 'n' },
				eventSessionContextId : { type : 's' },
				instruction : { type : 's' },
				clipsOutputJson : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaClipsVendorTaskData',KalturaClipsVendorTaskData);
