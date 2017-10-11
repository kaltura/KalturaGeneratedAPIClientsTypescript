
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUploadTokenStatus } from './KalturaUploadTokenStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUploadTokenArgs  extends KalturaObjectBaseArgs {
    fileName? : string;
	fileSize? : number;
}


export class KalturaUploadToken extends KalturaObjectBase {

    readonly id : string;
	readonly partnerId : number;
	readonly userId : string;
	readonly status : KalturaUploadTokenStatus;
	fileName : string;
	fileSize : number;
	readonly uploadedFileSize : number;
	readonly createdAt : Date;
	readonly updatedAt : Date;

    constructor(data? : KalturaUploadTokenArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUploadToken' },
				id : { type : 's', readOnly : true },
				partnerId : { type : 'n', readOnly : true },
				userId : { type : 's', readOnly : true },
				status : { type : 'en', readOnly : true, subTypeConstructor : KalturaUploadTokenStatus, subType : 'KalturaUploadTokenStatus' },
				fileName : { type : 's' },
				fileSize : { type : 'n' },
				uploadedFileSize : { type : 'n', readOnly : true },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUploadToken',KalturaUploadToken);
