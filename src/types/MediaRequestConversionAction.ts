
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaRequestConversionActionArgs  extends KalturaRequestArgs {
    entryId : string;
	fileFormat : string;
}

/** 
* Request a new conversion job, this can be used to convert the media entry to a
* different format
**/
export class MediaRequestConversionAction extends KalturaRequest<number> {

    entryId : string;
	fileFormat : string;

    constructor(data : MediaRequestConversionActionArgs)
    {
        super(data, {responseType : 'n', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'media' },
				action : { type : 'c', default : 'requestConversion' },
				entryId : { type : 's' },
				fileFormat : { type : 's' }
            }
        );
        return result;
    }
}

