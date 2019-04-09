
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadResult, KalturaBulkUploadResultArgs } from './KalturaBulkUploadResult';

export interface KalturaBulkUploadResultUserEntryArgs  extends KalturaBulkUploadResultArgs {
    userEntryId? : number;
}


export class KalturaBulkUploadResultUserEntry extends KalturaBulkUploadResult {

    userEntryId : number;

    constructor(data? : KalturaBulkUploadResultUserEntryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadResultUserEntry' },
				userEntryId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadResultUserEntry',KalturaBulkUploadResultUserEntry);
