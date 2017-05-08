
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLiveChannelSegmentType } from './KalturaLiveChannelSegmentType';
import { KalturaLiveChannelSegmentStatus } from './KalturaLiveChannelSegmentStatus';
import { KalturaLiveChannelSegmentTriggerType } from './KalturaLiveChannelSegmentTriggerType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaLiveChannelSegmentArgs  extends KalturaObjectBaseArgs {
    name? : string;
	description? : string;
	tags? : string;
	type? : KalturaLiveChannelSegmentType;
	channelId? : string;
	entryId? : string;
	triggerType? : KalturaLiveChannelSegmentTriggerType;
	triggerSegmentId? : string;
	startTime? : number;
	duration? : number;
}


export class KalturaLiveChannelSegment extends KalturaObjectBase {

    readonly id : string;
	readonly partnerId : number;
	readonly createdAt : number;
	readonly updatedAt : number;
	name : string;
	description : string;
	tags : string;
	type : KalturaLiveChannelSegmentType;
	readonly status : KalturaLiveChannelSegmentStatus;
	channelId : string;
	entryId : string;
	triggerType : KalturaLiveChannelSegmentTriggerType;
	triggerSegmentId : string;
	startTime : number;
	duration : number;

    constructor(data? : KalturaLiveChannelSegmentArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaLiveChannelSegment'  },
				id : { type : 's'  , readOnly : true },
				partnerId : { type : 'n'  , readOnly : true },
				createdAt : { type : 'n'  , readOnly : true },
				updatedAt : { type : 'n'  , readOnly : true },
				name : { type : 's'   },
				description : { type : 's'   },
				tags : { type : 's'   },
				type : { type : 'es'   , subType : 'KalturaLiveChannelSegmentType'},
				status : { type : 'es'  , readOnly : true , subType : 'KalturaLiveChannelSegmentStatus'},
				channelId : { type : 's'   },
				entryId : { type : 's'   },
				triggerType : { type : 'es'   , subType : 'KalturaLiveChannelSegmentTriggerType'},
				triggerSegmentId : { type : 's'   },
				startTime : { type : 'n'   },
				duration : { type : 'n'   }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveChannelSegment',KalturaLiveChannelSegment);
