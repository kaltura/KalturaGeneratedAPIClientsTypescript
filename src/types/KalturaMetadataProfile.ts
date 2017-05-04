
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMetadataObjectType } from './KalturaMetadataObjectType';
import { KalturaMetadataProfileStatus } from './KalturaMetadataProfileStatus';
import { KalturaMetadataProfileCreateMode } from './KalturaMetadataProfileCreateMode';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaMetadataProfileArgs  extends KalturaObjectBaseArgs {
    metadataObjectType? : KalturaMetadataObjectType;
	name? : string;
	systemName? : string;
	description? : string;
	createMode? : KalturaMetadataProfileCreateMode;
	disableReIndexing? : boolean;
}


export class KalturaMetadataProfile extends KalturaObjectBase {

    readonly id : number;
	readonly partnerId : number;
	metadataObjectType : KalturaMetadataObjectType;
	readonly version : number;
	name : string;
	systemName : string;
	description : string;
	readonly createdAt : number;
	readonly updatedAt : number;
	readonly status : KalturaMetadataProfileStatus;
	readonly xsd : string;
	readonly views : string;
	readonly xslt : string;
	createMode : KalturaMetadataProfileCreateMode;
	disableReIndexing : boolean;

    constructor(data? : KalturaMetadataProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaMetadataProfile' },
				id : { type : 'n'  , readOnly : true},
				partnerId : { type : 'n'  , readOnly : true},
				metadataObjectType : { type : 'es'  , subType : 'KalturaMetadataObjectType'},
				version : { type : 'n'  , readOnly : true},
				name : { type : 's'  },
				systemName : { type : 's'  },
				description : { type : 's'  },
				createdAt : { type : 'n'  , readOnly : true},
				updatedAt : { type : 'n'  , readOnly : true},
				status : { type : 'en'  , readOnly : true, subType : 'KalturaMetadataProfileStatus'},
				xsd : { type : 's'  , readOnly : true},
				views : { type : 's'  , readOnly : true},
				xslt : { type : 's'  , readOnly : true},
				createMode : { type : 'en'  , subType : 'KalturaMetadataProfileCreateMode'},
				disableReIndexing : { type : 'b'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMetadataProfile',KalturaMetadataProfile);
