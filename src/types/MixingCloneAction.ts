
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMixEntry } from './KalturaMixEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MixingCloneActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/** 
* Clones an existing mix.
**/
export class MixingCloneAction extends KalturaRequest<KalturaMixEntry> {

    entryId : string;

    constructor(data : MixingCloneActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMixEntry', responseConstructor : KalturaMixEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'mixing' },
				action : { type : 'c', default : 'clone' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}

