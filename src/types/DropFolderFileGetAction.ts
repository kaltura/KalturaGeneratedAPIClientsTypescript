
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderFile } from './KalturaDropFolderFile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DropFolderFileGetActionArgs  extends KalturaRequestArgs {
    dropFolderFileId : number;
}

/** 
* Retrieve a KalturaDropFolderFile object by ID
**/
export class DropFolderFileGetAction extends KalturaRequest<KalturaDropFolderFile> {

    dropFolderFileId : number;

    constructor(data : DropFolderFileGetActionArgs)
    {
        super(data, 'o', 'KalturaDropFolderFile');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'dropfolder_dropfolderfile' },
				action : { type : 'c' , default : 'get' },
				dropFolderFileId : { type : 'n'  }
            }
        );
        return result;
    }
}

