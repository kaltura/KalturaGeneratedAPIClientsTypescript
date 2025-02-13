
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBumper } from './KalturaBumper';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BumperUpdateActionArgs  extends KalturaRequestArgs {
    entryId : string;
	bumper : KalturaBumper;
}

/**
 * Build request payload for service 'bumper' action 'update'.
 *
 * Usage: Allows to update a bumper
 *
 * Server response type:         KalturaBumper
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class BumperUpdateAction extends KalturaRequest<KalturaBumper> {

    entryId : string;
	bumper : KalturaBumper;

    constructor(data : BumperUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				entryId : { type : 's' },
				bumper : { type : 'o', subTypeConstructor : KalturaBumper, subType : 'KalturaBumper' }
            }
        );
        return result;
    }
}

