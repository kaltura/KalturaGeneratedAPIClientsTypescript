

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaTimeWarnerDistributionProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaTimeWarnerDistributionProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaTimeWarnerDistributionProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaTimeWarnerDistributionProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaTimeWarnerDistributionProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaTimeWarnerDistributionProfileOrderBy',KalturaTimeWarnerDistributionProfileOrderBy);