
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaString } from './KalturaString';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaImportJobDataArgs  extends KalturaJobDataArgs {
    srcFileUrl? : string;
	destFileLocalPath? : string;
	flavorAssetId? : string;
	fileSize? : number;
	destFileSharedPath? : string;
	urlHeaders? : KalturaString[];
	shouldRedirect? : boolean;
}


export class KalturaImportJobData extends KalturaJobData {

    srcFileUrl : string;
	destFileLocalPath : string;
	flavorAssetId : string;
	fileSize : number;
	destFileSharedPath : string;
	urlHeaders : KalturaString[];
	shouldRedirect : boolean;

    constructor(data? : KalturaImportJobDataArgs)
    {
        super(data);
        if (typeof this.urlHeaders === 'undefined') this.urlHeaders = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaImportJobData' },
				srcFileUrl : { type : 's' },
				destFileLocalPath : { type : 's' },
				flavorAssetId : { type : 's' },
				fileSize : { type : 'n' },
				destFileSharedPath : { type : 's' },
				urlHeaders : { type : 'a', subTypeConstructor : KalturaString, subType : 'KalturaString' },
				shouldRedirect : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaImportJobData',KalturaImportJobData);
