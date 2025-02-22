
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaString } from './KalturaString';
import { KalturaContentResource, KalturaContentResourceArgs } from './KalturaContentResource';

export interface KalturaUrlResourceArgs  extends KalturaContentResourceArgs {
    url? : string;
	forceAsyncDownload? : boolean;
	urlHeaders? : KalturaString[];
	shouldRedirect? : boolean;
}


export class KalturaUrlResource extends KalturaContentResource {

    url : string;
	forceAsyncDownload : boolean;
	urlHeaders : KalturaString[];
	shouldRedirect : boolean;

    constructor(data? : KalturaUrlResourceArgs)
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
                objectType : { type : 'c', default : 'KalturaUrlResource' },
				url : { type : 's' },
				forceAsyncDownload : { type : 'b' },
				urlHeaders : { type : 'a', subTypeConstructor : KalturaString, subType : 'KalturaString' },
				shouldRedirect : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUrlResource',KalturaUrlResource);
