

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaFeedDropFolderFileOrderBy extends KalturaObjectBase {
    private _value : string;
    constructor( value?:string | number){
        super();
        this._value = value + '';
    }

    equals(obj : this) : boolean
    {
        return obj && obj.toString() === this._value;
    }

    toString(){
        return this._value;
    }

    static createdAtAsc = new KalturaFeedDropFolderFileOrderBy('+createdAt');
	static createdAtDesc = new KalturaFeedDropFolderFileOrderBy('-createdAt');
	static fileNameAsc = new KalturaFeedDropFolderFileOrderBy('+fileName');
	static fileNameDesc = new KalturaFeedDropFolderFileOrderBy('-fileName');
	static fileSizeAsc = new KalturaFeedDropFolderFileOrderBy('+fileSize');
	static fileSizeDesc = new KalturaFeedDropFolderFileOrderBy('-fileSize');
	static fileSizeLastSetAtAsc = new KalturaFeedDropFolderFileOrderBy('+fileSizeLastSetAt');
	static fileSizeLastSetAtDesc = new KalturaFeedDropFolderFileOrderBy('-fileSizeLastSetAt');
	static idAsc = new KalturaFeedDropFolderFileOrderBy('+id');
	static idDesc = new KalturaFeedDropFolderFileOrderBy('-id');
	static parsedFlavorAsc = new KalturaFeedDropFolderFileOrderBy('+parsedFlavor');
	static parsedFlavorDesc = new KalturaFeedDropFolderFileOrderBy('-parsedFlavor');
	static parsedSlugAsc = new KalturaFeedDropFolderFileOrderBy('+parsedSlug');
	static parsedSlugDesc = new KalturaFeedDropFolderFileOrderBy('-parsedSlug');
	static updatedAtAsc = new KalturaFeedDropFolderFileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaFeedDropFolderFileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaFeedDropFolderFileOrderBy',KalturaFeedDropFolderFileOrderBy);