
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBumper } from './KalturaBumper';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BumperDeleteActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/**
 * Build request payload for service 'bumper' action 'delete'.
 *
 * Usage: Delete bumper by EntryId
 *
 * Server response type:         KalturaBumper
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class BumperDeleteAction extends KalturaRequest<KalturaBumper> {

    entryId : string;

    constructor(data : BumperDeleteActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBumper', responseConstructor : KalturaBumper  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'bumper_bumper' },
				action : { type : 'c', default : 'delete' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}

