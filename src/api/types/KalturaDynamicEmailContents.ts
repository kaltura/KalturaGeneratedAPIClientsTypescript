
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDynamicEmailContentsArgs  extends KalturaObjectBaseArgs {
    emailSubject? : string;
	emailBody? : string;
}


export class KalturaDynamicEmailContents extends KalturaObjectBase {

    emailSubject : string;
	emailBody : string;

    constructor(data? : KalturaDynamicEmailContentsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDynamicEmailContents' },
				emailSubject : { type : 's' },
				emailBody : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDynamicEmailContents',KalturaDynamicEmailContents);
