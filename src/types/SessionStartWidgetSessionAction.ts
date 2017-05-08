
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStartWidgetSessionResponse } from './KalturaStartWidgetSessionResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SessionStartWidgetSessionActionArgs  extends KalturaRequestArgs {
    widgetId : string;
	expiry? : number;
}

/** 
* Start a session for Kaltura's flash widgets
**/
export class SessionStartWidgetSessionAction extends KalturaRequest<KalturaStartWidgetSessionResponse> {

    widgetId : string;
	expiry : number;

    constructor(data : SessionStartWidgetSessionActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaStartWidgetSessionResponse', responseConstructor : KalturaStartWidgetSessionResponse  });
        if (typeof this.expiry === 'undefined') this.expiry = 86400;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'session' },
				action : { type : 'c', default : 'startWidgetSession' },
				widgetId : { type : 's' },
				expiry : { type : 'n' }
            }
        );
        return result;
    }
}

