
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryServerNodeValidateRegisteredEntryServerNodeActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Validates server node still registered on entry
**/
export class EntryServerNodeValidateRegisteredEntryServerNodeAction extends KalturaRequest<void> {

    id : number;

    constructor(data : EntryServerNodeValidateRegisteredEntryServerNodeActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'entryservernode' },
				action : { type : 'c', default : 'validateRegisteredEntryServerNode' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

