
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaScheduleEventStatus } from './KalturaScheduleEventStatus';
import { KalturaScheduleEventClassificationType } from './KalturaScheduleEventClassificationType';
import { KalturaScheduleEventRecurrenceType } from './KalturaScheduleEventRecurrenceType';
import { KalturaScheduleEventRecurrence } from './KalturaScheduleEventRecurrence';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaScheduleEventArgs  extends KalturaObjectBaseArgs {
    summary? : string;
	description? : string;
	startDate? : number;
	endDate? : number;
	referenceId? : string;
	classificationType? : KalturaScheduleEventClassificationType;
	geoLatitude? : number;
	geoLongitude? : number;
	location? : string;
	organizer? : string;
	ownerId? : string;
	priority? : number;
	sequence? : number;
	recurrenceType? : KalturaScheduleEventRecurrenceType;
	duration? : number;
	contact? : string;
	comment? : string;
	tags? : string;
	recurrence? : KalturaScheduleEventRecurrence;
}


export class KalturaScheduleEvent extends KalturaObjectBase {

    readonly id : number;
	readonly partnerId : number;
	readonly parentId : number;
	summary : string;
	description : string;
	readonly status : KalturaScheduleEventStatus;
	startDate : number;
	endDate : number;
	referenceId : string;
	classificationType : KalturaScheduleEventClassificationType;
	geoLatitude : number;
	geoLongitude : number;
	location : string;
	organizer : string;
	ownerId : string;
	priority : number;
	sequence : number;
	recurrenceType : KalturaScheduleEventRecurrenceType;
	duration : number;
	contact : string;
	comment : string;
	tags : string;
	readonly createdAt : number;
	readonly updatedAt : number;
	recurrence : KalturaScheduleEventRecurrence;

    constructor(data? : KalturaScheduleEventArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaScheduleEvent' },
				id : { type : 'n'  , readOnly : true},
				partnerId : { type : 'n'  , readOnly : true},
				parentId : { type : 'n'  , readOnly : true},
				summary : { type : 's'  },
				description : { type : 's'  },
				status : { type : 'en'  , readOnly : true, subType : 'KalturaScheduleEventStatus'},
				startDate : { type : 'n'  },
				endDate : { type : 'n'  },
				referenceId : { type : 's'  },
				classificationType : { type : 'en'  , subType : 'KalturaScheduleEventClassificationType'},
				geoLatitude : { type : 'n'  },
				geoLongitude : { type : 'n'  },
				location : { type : 's'  },
				organizer : { type : 's'  },
				ownerId : { type : 's'  },
				priority : { type : 'n'  },
				sequence : { type : 'n'  },
				recurrenceType : { type : 'en'  , subType : 'KalturaScheduleEventRecurrenceType'},
				duration : { type : 'n'  },
				contact : { type : 's'  },
				comment : { type : 's'  },
				tags : { type : 's'  },
				createdAt : { type : 'n'  , readOnly : true},
				updatedAt : { type : 'n'  , readOnly : true},
				recurrence : { type : 'o'  , subType : 'KalturaScheduleEventRecurrence'}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaScheduleEvent',KalturaScheduleEvent);
