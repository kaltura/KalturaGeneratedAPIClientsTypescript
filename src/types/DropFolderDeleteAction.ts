
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolder } from './KalturaDropFolder';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DropFolderDeleteActionArgs  extends KalturaRequestArgs {
    dropFolderId : number;
}

/** 
* Mark the KalturaDropFolder object as deleted
**/
export class DropFolderDeleteAction extends KalturaRequest<KalturaDropFolder> {

    dropFolderId : number;

    constructor(data : DropFolderDeleteActionArgs)
    {
        super(data, 'o', 'KalturaDropFolder');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'dropfolder_dropfolder' },
				action : { type : 'c' , default : 'delete' },
				dropFolderId : { type : 'n'  }
            }
        );
        return result;
    }
}

