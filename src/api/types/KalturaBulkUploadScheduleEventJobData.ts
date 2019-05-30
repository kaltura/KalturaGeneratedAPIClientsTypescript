
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadJobData, KalturaBulkUploadJobDataArgs } from './KalturaBulkUploadJobData';

export interface KalturaBulkUploadScheduleEventJobDataArgs  extends KalturaBulkUploadJobDataArgs {
    
}


export class KalturaBulkUploadScheduleEventJobData extends KalturaBulkUploadJobData {

    

    constructor(data? : KalturaBulkUploadScheduleEventJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadScheduleEventJobData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadScheduleEventJobData',KalturaBulkUploadScheduleEventJobData);
