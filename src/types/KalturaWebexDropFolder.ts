
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDropFolder, KalturaDropFolderArgs } from './KalturaDropFolder';

export interface KalturaWebexDropFolderArgs  extends KalturaDropFolderArgs {
    webexUserId? : string;
	webexPassword? : string;
	webexSiteId? : number;
	webexPartnerId? : string;
	webexServiceUrl? : string;
	webexHostIdMetadataFieldName? : string;
}


export class KalturaWebexDropFolder extends KalturaDropFolder {

    webexUserId : string;
	webexPassword : string;
	webexSiteId : number;
	webexPartnerId : string;
	webexServiceUrl : string;
	webexHostIdMetadataFieldName : string;

    constructor(data? : KalturaWebexDropFolderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWebexDropFolder' },
				webexUserId : { type : 's' },
				webexPassword : { type : 's' },
				webexSiteId : { type : 'n' },
				webexPartnerId : { type : 's' },
				webexServiceUrl : { type : 's' },
				webexHostIdMetadataFieldName : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaWebexDropFolder',KalturaWebexDropFolder);
