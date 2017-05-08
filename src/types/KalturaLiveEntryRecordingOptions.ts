
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaLiveEntryRecordingOptionsArgs  extends KalturaObjectBaseArgs {
    shouldCopyEntitlement? : KalturaNullableBoolean;
	shouldCopyScheduling? : KalturaNullableBoolean;
	shouldCopyThumbnail? : KalturaNullableBoolean;
	shouldMakeHidden? : KalturaNullableBoolean;
}

/** 
* A representation of a live stream recording entry configuration
**/
export class KalturaLiveEntryRecordingOptions extends KalturaObjectBase {

    shouldCopyEntitlement : KalturaNullableBoolean;
	shouldCopyScheduling : KalturaNullableBoolean;
	shouldCopyThumbnail : KalturaNullableBoolean;
	shouldMakeHidden : KalturaNullableBoolean;

    constructor(data? : KalturaLiveEntryRecordingOptionsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaLiveEntryRecordingOptions'  },
				shouldCopyEntitlement : { type : 'en'   , subType : 'KalturaNullableBoolean'},
				shouldCopyScheduling : { type : 'en'   , subType : 'KalturaNullableBoolean'},
				shouldCopyThumbnail : { type : 'en'   , subType : 'KalturaNullableBoolean'},
				shouldMakeHidden : { type : 'en'   , subType : 'KalturaNullableBoolean'}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveEntryRecordingOptions',KalturaLiveEntryRecordingOptions);
