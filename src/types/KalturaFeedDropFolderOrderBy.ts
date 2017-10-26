

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaFeedDropFolderOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaFeedDropFolderOrderBy('+createdAt');
	static createdAtDesc = new KalturaFeedDropFolderOrderBy('-createdAt');
	static idAsc = new KalturaFeedDropFolderOrderBy('+id');
	static idDesc = new KalturaFeedDropFolderOrderBy('-id');
	static nameAsc = new KalturaFeedDropFolderOrderBy('+name');
	static nameDesc = new KalturaFeedDropFolderOrderBy('-name');
	static updatedAtAsc = new KalturaFeedDropFolderOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaFeedDropFolderOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaFeedDropFolderOrderBy',KalturaFeedDropFolderOrderBy);