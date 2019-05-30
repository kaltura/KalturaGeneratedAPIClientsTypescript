
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaScheduleEventType } from './KalturaScheduleEventType';
import { KalturaBulkUploadScheduleEventJobData, KalturaBulkUploadScheduleEventJobDataArgs } from './KalturaBulkUploadScheduleEventJobData';

export interface KalturaBulkUploadICalJobDataArgs  extends KalturaBulkUploadScheduleEventJobDataArgs {
    eventsType? : KalturaScheduleEventType;
}


export class KalturaBulkUploadICalJobData extends KalturaBulkUploadScheduleEventJobData {

    eventsType : KalturaScheduleEventType;

    constructor(data? : KalturaBulkUploadICalJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadICalJobData' },
				eventsType : { type : 'en', subTypeConstructor : KalturaScheduleEventType, subType : 'KalturaScheduleEventType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadICalJobData',KalturaBulkUploadICalJobData);
