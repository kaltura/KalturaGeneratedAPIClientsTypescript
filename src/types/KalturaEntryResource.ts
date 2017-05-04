
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaContentResource, KalturaContentResourceArgs } from './KalturaContentResource';

export interface KalturaEntryResourceArgs  extends KalturaContentResourceArgs {
    entryId? : string;
	flavorParamsId? : number;
}

/** 
* Used to ingest media that is already ingested to Kaltura system as a different
* entry in the past, the new created flavor asset will be ready immediately using
* a file sync of link type that will point to the existing file sync of the
* existing entry.
**/
export class KalturaEntryResource extends KalturaContentResource {

    entryId : string;
	flavorParamsId : number;

    constructor(data? : KalturaEntryResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaEntryResource' },
				entryId : { type : 's'  },
				flavorParamsId : { type : 'n'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEntryResource',KalturaEntryResource);
