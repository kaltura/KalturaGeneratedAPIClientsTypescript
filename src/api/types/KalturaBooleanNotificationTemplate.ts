
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEventNotificationTemplate, KalturaEventNotificationTemplateArgs } from './KalturaEventNotificationTemplate';

export interface KalturaBooleanNotificationTemplateArgs  extends KalturaEventNotificationTemplateArgs {
    
}


export class KalturaBooleanNotificationTemplate extends KalturaEventNotificationTemplate {

    

    constructor(data? : KalturaBooleanNotificationTemplateArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBooleanNotificationTemplate' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBooleanNotificationTemplate',KalturaBooleanNotificationTemplate);
