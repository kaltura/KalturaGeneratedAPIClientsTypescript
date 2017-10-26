

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaFairplayDrmProfileOrderBy extends KalturaObjectBase {
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

    static idAsc = new KalturaFairplayDrmProfileOrderBy('+id');
	static idDesc = new KalturaFairplayDrmProfileOrderBy('-id');
	static nameAsc = new KalturaFairplayDrmProfileOrderBy('+name');
	static nameDesc = new KalturaFairplayDrmProfileOrderBy('-name');
}
KalturaTypesFactory.registerType('KalturaFairplayDrmProfileOrderBy',KalturaFairplayDrmProfileOrderBy);