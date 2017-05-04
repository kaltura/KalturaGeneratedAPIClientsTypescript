
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaWidget } from './KalturaWidget';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface WidgetCloneActionArgs  extends KalturaRequestArgs {
    widget : KalturaWidget;
}

/** 
* Add widget based on existing widget.   Must provide valid sourceWidgetId
**/
export class WidgetCloneAction extends KalturaRequest<KalturaWidget> {

    widget : KalturaWidget;

    constructor(data : WidgetCloneActionArgs)
    {
        super(data, 'o', 'KalturaWidget');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'widget' },
				action : { type : 'c' , default : 'clone' },
				widget : { type : 'o'  , subType : 'KalturaWidget'}
            }
        );
        return result;
    }
}

