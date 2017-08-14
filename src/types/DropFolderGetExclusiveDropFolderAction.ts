
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolder } from './KalturaDropFolder';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DropFolderGetExclusiveDropFolderActionArgs  extends KalturaRequestArgs {
    tag : string;
	maxTime : number;
}

/** 
* getExclusive KalturaDropFolder object
**/
export class DropFolderGetExclusiveDropFolderAction extends KalturaRequest<KalturaDropFolder> {

    tag : string;
	maxTime : number;

    constructor(data : DropFolderGetExclusiveDropFolderActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDropFolder', responseConstructor : KalturaDropFolder  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'dropfolder_dropfolder' },
				action : { type : 'c', default : 'getExclusiveDropFolder' },
				tag : { type : 's' },
				maxTime : { type : 'n' }
            }
        );
        return result;
    }
}

