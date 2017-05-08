
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryEntryDeleteActionArgs  extends KalturaRequestArgs {
    entryId : string;
	categoryId : number;
}

/** 
* Delete CategoryEntry
**/
export class CategoryEntryDeleteAction extends KalturaRequest<void> {

    entryId : string;
	categoryId : number;

    constructor(data : CategoryEntryDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'categoryentry' },
				action : { type : 'c', default : 'delete' },
				entryId : { type : 's' },
				categoryId : { type : 'n' }
            }
        );
        return result;
    }
}

