
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBumper } from './KalturaBumper';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BumperAddActionArgs  extends KalturaRequestArgs {
    entryId : string;
	bumper : KalturaBumper;
}

/**
 * Build request payload for service 'bumper' action 'add'.
 *
 * Usage: Adds a bumper to an entry
 *
 * Server response type:         KalturaBumper
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class BumperAddAction extends KalturaRequest<KalturaBumper> {

    entryId : string;
	bumper : KalturaBumper;

    constructor(data : BumperAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				entryId : { type : 's' },
				bumper : { type : 'o', subTypeConstructor : KalturaBumper, subType : 'KalturaBumper' }
            }
        );
        return result;
    }
}

