
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaKafkaNotificationTemplateBaseFilter, KalturaKafkaNotificationTemplateBaseFilterArgs } from './KalturaKafkaNotificationTemplateBaseFilter';

export interface KalturaKafkaNotificationTemplateFilterArgs  extends KalturaKafkaNotificationTemplateBaseFilterArgs {
    
}


export class KalturaKafkaNotificationTemplateFilter extends KalturaKafkaNotificationTemplateBaseFilter {

    

    constructor(data? : KalturaKafkaNotificationTemplateFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaKafkaNotificationTemplateFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaKafkaNotificationTemplateFilter',KalturaKafkaNotificationTemplateFilter);
