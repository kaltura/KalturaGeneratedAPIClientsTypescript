
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaServerNodeStatus } from './KalturaServerNodeStatus';
import { KalturaServerNodeType } from './KalturaServerNodeType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaServerNodeArgs  extends KalturaObjectBaseArgs {
    name? : string;
	systemName? : string;
	description? : string;
	hostName? : string;
	tags? : string;
	parentId? : number;
}


export class KalturaServerNode extends KalturaObjectBase {

    readonly id : number;
	readonly partnerId : number;
	readonly createdAt : number;
	readonly updatedAt : number;
	readonly heartbeatTime : number;
	name : string;
	systemName : string;
	description : string;
	hostName : string;
	readonly status : KalturaServerNodeStatus;
	readonly type : KalturaServerNodeType;
	tags : string;
	readonly dc : number;
	parentId : number;

    constructor(data? : KalturaServerNodeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaServerNode' },
				id : { type : 'n'  , readOnly : true},
				partnerId : { type : 'n'  , readOnly : true},
				createdAt : { type : 'n'  , readOnly : true},
				updatedAt : { type : 'n'  , readOnly : true},
				heartbeatTime : { type : 'n'  , readOnly : true},
				name : { type : 's'  },
				systemName : { type : 's'  },
				description : { type : 's'  },
				hostName : { type : 's'  },
				status : { type : 'en'  , readOnly : true, subType : 'KalturaServerNodeStatus'},
				type : { type : 'es'  , readOnly : true, subType : 'KalturaServerNodeType'},
				tags : { type : 's'  },
				dc : { type : 'n'  , readOnly : true},
				parentId : { type : 'n'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaServerNode',KalturaServerNode);
