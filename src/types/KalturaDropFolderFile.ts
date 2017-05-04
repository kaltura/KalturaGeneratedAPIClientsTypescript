
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDropFolderFileStatus } from './KalturaDropFolderFileStatus';
import { KalturaDropFolderType } from './KalturaDropFolderType';
import { KalturaDropFolderFileErrorCode } from './KalturaDropFolderFileErrorCode';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDropFolderFileArgs  extends KalturaObjectBaseArgs {
    dropFolderId? : number;
	fileName? : string;
	fileSize? : number;
	parsedSlug? : string;
	parsedFlavor? : string;
	parsedUserId? : string;
	leadDropFolderFileId? : number;
	deletedDropFolderFileId? : number;
	entryId? : string;
	errorCode? : KalturaDropFolderFileErrorCode;
	errorDescription? : string;
	lastModificationTime? : string;
	uploadStartDetectedAt? : number;
	uploadEndDetectedAt? : number;
	importStartedAt? : number;
	importEndedAt? : number;
}


export class KalturaDropFolderFile extends KalturaObjectBase {

    readonly id : number;
	readonly partnerId : number;
	dropFolderId : number;
	fileName : string;
	fileSize : number;
	readonly fileSizeLastSetAt : number;
	readonly status : KalturaDropFolderFileStatus;
	readonly type : KalturaDropFolderType;
	parsedSlug : string;
	parsedFlavor : string;
	parsedUserId : string;
	leadDropFolderFileId : number;
	deletedDropFolderFileId : number;
	entryId : string;
	errorCode : KalturaDropFolderFileErrorCode;
	errorDescription : string;
	lastModificationTime : string;
	readonly createdAt : number;
	readonly updatedAt : number;
	uploadStartDetectedAt : number;
	uploadEndDetectedAt : number;
	importStartedAt : number;
	importEndedAt : number;
	readonly batchJobId : number;

    constructor(data? : KalturaDropFolderFileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaDropFolderFile' },
				id : { type : 'n'  , readOnly : true},
				partnerId : { type : 'n'  , readOnly : true},
				dropFolderId : { type : 'n'  },
				fileName : { type : 's'  },
				fileSize : { type : 'n'  },
				fileSizeLastSetAt : { type : 'n'  , readOnly : true},
				status : { type : 'en'  , readOnly : true, subType : 'KalturaDropFolderFileStatus'},
				type : { type : 'es'  , readOnly : true, subType : 'KalturaDropFolderType'},
				parsedSlug : { type : 's'  },
				parsedFlavor : { type : 's'  },
				parsedUserId : { type : 's'  },
				leadDropFolderFileId : { type : 'n'  },
				deletedDropFolderFileId : { type : 'n'  },
				entryId : { type : 's'  },
				errorCode : { type : 'es'  , subType : 'KalturaDropFolderFileErrorCode'},
				errorDescription : { type : 's'  },
				lastModificationTime : { type : 's'  },
				createdAt : { type : 'n'  , readOnly : true},
				updatedAt : { type : 'n'  , readOnly : true},
				uploadStartDetectedAt : { type : 'n'  },
				uploadEndDetectedAt : { type : 'n'  },
				importStartedAt : { type : 'n'  },
				importEndedAt : { type : 'n'  },
				batchJobId : { type : 'n'  , readOnly : true}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDropFolderFile',KalturaDropFolderFile);
