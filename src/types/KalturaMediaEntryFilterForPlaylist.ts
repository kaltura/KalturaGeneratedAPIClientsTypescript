
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMediaEntryFilter, KalturaMediaEntryFilterArgs } from './KalturaMediaEntryFilter';

export interface KalturaMediaEntryFilterForPlaylistArgs  extends KalturaMediaEntryFilterArgs {
    limit? : number;
}


export class KalturaMediaEntryFilterForPlaylist extends KalturaMediaEntryFilter {

    limit : number;

    constructor(data? : KalturaMediaEntryFilterForPlaylistArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMediaEntryFilterForPlaylist' },
				limit : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMediaEntryFilterForPlaylist',KalturaMediaEntryFilterForPlaylist);
