
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FileAssetServeActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'fileAsset' action 'serve'.
 *
 * Usage: Serve file asset by id
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class FileAssetServeAction extends KalturaRequest<string> {

    id : number;

    constructor(data : FileAssetServeActionArgs)
    {
        super(data, {responseType : 'f', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'fileasset' },
				action : { type : 'c', default : 'serve' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

