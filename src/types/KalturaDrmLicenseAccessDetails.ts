
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDrmLicenseAccessDetailsArgs  extends KalturaObjectBaseArgs {
    policy? : string;
	duration? : number;
	absolute_duration? : number;
}


export class KalturaDrmLicenseAccessDetails extends KalturaObjectBase {

    policy : string;
	duration : number;
	absolute_duration : number;

    constructor(data? : KalturaDrmLicenseAccessDetailsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaDrmLicenseAccessDetails' },
				policy : { type : 's'  },
				duration : { type : 'n'  },
				absolute_duration : { type : 'n'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDrmLicenseAccessDetails',KalturaDrmLicenseAccessDetails);
