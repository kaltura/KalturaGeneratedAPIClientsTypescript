
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PlaylistDeleteActionArgs  extends KalturaRequestArgs {
    id : string;
}

/** 
* Delete existing playlist
**/
export class PlaylistDeleteAction extends KalturaRequest<void> {

    id : string;

    constructor(data : PlaylistDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'playlist'  },
				action : { type : 'c' , default : 'delete'  },
				id : { type : 's'   }
            }
        );
        return result;
    }
}

