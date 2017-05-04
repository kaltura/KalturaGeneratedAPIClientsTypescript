

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaUverseClickToOrderDistributionProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaUverseClickToOrderDistributionProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaUverseClickToOrderDistributionProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaUverseClickToOrderDistributionProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaUverseClickToOrderDistributionProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaUverseClickToOrderDistributionProfileOrderBy',KalturaUverseClickToOrderDistributionProfileOrderBy);