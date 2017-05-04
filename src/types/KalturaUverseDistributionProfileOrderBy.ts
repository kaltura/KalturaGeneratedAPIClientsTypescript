

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaUverseDistributionProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaUverseDistributionProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaUverseDistributionProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaUverseDistributionProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaUverseDistributionProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaUverseDistributionProfileOrderBy',KalturaUverseDistributionProfileOrderBy);