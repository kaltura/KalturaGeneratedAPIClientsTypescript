
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface XInternalXAddBulkDownloadActionArgs  extends KalturaRequestArgs {
    entryIds : string;
	flavorParamsId? : string;
}

/**
 * Build request payload for service 'xInternal' action 'xAddBulkDownload'.
 *
 * Usage: Creates new download job for multiple entry ids (comma separated), an email will be sent when the job is done
 * This sevice support the following entries:
 * - MediaEntry
 * - Video will be converted using the flavor params id
 * - Audio will be downloaded as MP3
 * - Image will be downloaded as Jpeg
 * - MixEntry will be flattened using the flavor params id
 * - Other entry types are not supported
 * Returns the admin email that the email message will be sent to
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class XInternalXAddBulkDownloadAction extends KalturaRequest<string> {

    entryIds : string;
	flavorParamsId : string;

    constructor(data : XInternalXAddBulkDownloadActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'xinternal' },
				action : { type : 'c', default : 'xAddBulkDownload' },
				entryIds : { type : 's' },
				flavorParamsId : { type : 's' }
            }
        );
        return result;
    }
}

