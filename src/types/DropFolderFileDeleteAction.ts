
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderFile } from './KalturaDropFolderFile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DropFolderFileDeleteActionArgs  extends KalturaRequestArgs {
    dropFolderFileId : number;
}

/** 
* Mark the KalturaDropFolderFile object as deleted
**/
export class DropFolderFileDeleteAction extends KalturaRequest<KalturaDropFolderFile> {

    dropFolderFileId : number;

    constructor(data : DropFolderFileDeleteActionArgs)
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
				action : { type : 'c' , default : 'delete'  },
				dropFolderFileId : { type : 'n'   }
            }
        );
        return result;
    }
}

