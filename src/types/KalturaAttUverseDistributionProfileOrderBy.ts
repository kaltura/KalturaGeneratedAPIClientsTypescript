

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaAttUverseDistributionProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaAttUverseDistributionProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaAttUverseDistributionProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaAttUverseDistributionProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaAttUverseDistributionProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaAttUverseDistributionProfileOrderBy',KalturaAttUverseDistributionProfileOrderBy);