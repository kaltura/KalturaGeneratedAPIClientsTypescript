
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DataDeleteActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/** 
* Delete a data entry.
**/
export class DataDeleteAction extends KalturaRequest<void> {

    entryId : string;

    constructor(data : DataDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'data' },
				action : { type : 'c', default : 'delete' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}

