
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBumper } from './KalturaBumper';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BumperGetActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/**
 * Build request payload for service 'bumper' action 'get'.
 *
 * Usage: Allows to get the bumper
 *
 * Server response type:         KalturaBumper
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class BumperGetAction extends KalturaRequest<KalturaBumper> {

    entryId : string;

    constructor(data : BumperGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}

