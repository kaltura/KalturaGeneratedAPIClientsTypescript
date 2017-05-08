
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolder } from './KalturaDropFolder';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DropFolderUpdateActionArgs  extends KalturaRequestArgs {
    dropFolderId : number;
	dropFolder : KalturaDropFolder;
}

/** 
* Update an existing KalturaDropFolder object
**/
export class DropFolderUpdateAction extends KalturaRequest<KalturaDropFolder> {

    dropFolderId : number;
	dropFolder : KalturaDropFolder;

    constructor(data : DropFolderUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDropFolder', responseConstructor : KalturaDropFolder  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'dropfolder_dropfolder'  },
				action : { type : 'c' , default : 'update'  },
				dropFolderId : { type : 'n'   },
				dropFolder : { type : 'o'   , fallbackConstructor :  KalturaDropFolder, subType : 'KalturaDropFolder'}
            }
        );
        return result;
    }
}

