
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMixEntry } from './KalturaMixEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MixingAddActionArgs  extends KalturaRequestArgs {
    mixEntry : KalturaMixEntry;
}

/** 
* Adds a new mix.   If the dataContent is null, a default timeline will be
* created.
**/
export class MixingAddAction extends KalturaRequest<KalturaMixEntry> {

    mixEntry : KalturaMixEntry;

    constructor(data : MixingAddActionArgs)
    {
        super(data, 'o', 'KalturaMixEntry');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'mixing' },
				action : { type : 'c' , default : 'add' },
				mixEntry : { type : 'o'  , subType : 'KalturaMixEntry'}
            }
        );
        return result;
    }
}

