
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaEventNotificationEventObjectType } from './KalturaEventNotificationEventObjectType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BusinessProcessCaseServeDiagramActionArgs  extends KalturaRequestArgs {
    objectType : KalturaEventNotificationEventObjectType;
	objectId : string;
	businessProcessStartNotificationTemplateId : number;
}

/**
 * Build request payload for service 'businessProcessCase' action 'serveDiagram'.
 *
 * Usage: Server business-process case diagram
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class BusinessProcessCaseServeDiagramAction extends KalturaRequest<string> {

    objectType : KalturaEventNotificationEventObjectType;
	objectId : string;
	businessProcessStartNotificationTemplateId : number;

    constructor(data : BusinessProcessCaseServeDiagramActionArgs)
    {
        super(data, {responseType : 'f', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'businessprocessnotification_businessprocesscase' },
				action : { type : 'c', default : 'serveDiagram' },
				objectType : { type : 'es', subTypeConstructor : KalturaEventNotificationEventObjectType, subType : 'KalturaEventNotificationEventObjectType' },
				objectId : { type : 's' },
				businessProcessStartNotificationTemplateId : { type : 'n' }
            }
        );
        return result;
    }
}

