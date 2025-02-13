
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserEntryExtendedStatus } from './KalturaUserEntryExtendedStatus';
import { KalturaUserEntry, KalturaUserEntryArgs } from './KalturaUserEntry';

export interface KalturaViewHistoryUserEntryArgs  extends KalturaUserEntryArgs {
    playbackContext? : string;
	lastTimeReached? : number;
	lastUpdateTime? : Date;
	playlistLastEntryId? : string;
	extendedStatus? : KalturaUserEntryExtendedStatus;
}


export class KalturaViewHistoryUserEntry extends KalturaUserEntry {

    playbackContext : string;
	lastTimeReached : number;
	lastUpdateTime : Date;
	playlistLastEntryId : string;
	extendedStatus : KalturaUserEntryExtendedStatus;

    constructor(data? : KalturaViewHistoryUserEntryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaViewHistoryUserEntry' },
				playbackContext : { type : 's' },
				lastTimeReached : { type : 'n' },
				lastUpdateTime : { type : 'd' },
				playlistLastEntryId : { type : 's' },
				extendedStatus : { type : 'es', subTypeConstructor : KalturaUserEntryExtendedStatus, subType : 'KalturaUserEntryExtendedStatus' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaViewHistoryUserEntry',KalturaViewHistoryUserEntry);
