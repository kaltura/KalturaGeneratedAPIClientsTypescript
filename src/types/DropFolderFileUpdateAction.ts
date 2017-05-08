
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderFile } from './KalturaDropFolderFile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DropFolderFileUpdateActionArgs  extends KalturaRequestArgs {
    dropFolderFileId : number;
	dropFolderFile : KalturaDropFolderFile;
}

/** 
* Update an existing KalturaDropFolderFile object
**/
export class DropFolderFileUpdateAction extends KalturaRequest<KalturaDropFolderFile> {

    dropFolderFileId : number;
	dropFolderFile : KalturaDropFolderFile;

    constructor(data : DropFolderFileUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDropFolderFile', responseConstructor : KalturaDropFolderFile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'dropfolder_dropfolderfile'  },
				action : { type : 'c' , default : 'update'  },
				dropFolderFileId : { type : 'n'   },
				dropFolderFile : { type : 'o'   , fallbackConstructor :  KalturaDropFolderFile, subType : 'KalturaDropFolderFile'}
            }
        );
        return result;
    }
}

