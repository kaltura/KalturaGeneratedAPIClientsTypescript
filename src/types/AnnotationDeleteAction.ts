
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AnnotationDeleteActionArgs  extends KalturaRequestArgs {
    id : string;
}

/**
 * Build request payload for service 'annotation' action 'delete'.
 *
 * Usage: delete cue point by id, and delete all children cue points
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AnnotationDeleteAction extends KalturaRequest<void> {

    id : string;

    constructor(data : AnnotationDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'annotation_annotation' },
				action : { type : 'c', default : 'delete' },
				id : { type : 's' }
            }
        );
        return result;
    }
}

