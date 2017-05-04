
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AnnotationDeleteActionArgs  extends KalturaRequestArgs {
    id : string;
}

/** 
* delete cue point by id, and delete all children cue points
**/
export class AnnotationDeleteAction extends KalturaRequest<void> {

    id : string;

    constructor(data : AnnotationDeleteActionArgs)
    {
        super(data, 'v', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'annotation_annotation' },
				action : { type : 'c' , default : 'delete' },
				id : { type : 's'  }
            }
        );
        return result;
    }
}

