
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCEError } from './KalturaCEError';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface StatsReportKceErrorActionArgs  extends KalturaRequestArgs {
    kalturaCEError : KalturaCEError;
}


export class StatsReportKceErrorAction extends KalturaRequest<KalturaCEError> {

    kalturaCEError : KalturaCEError;

    constructor(data : StatsReportKceErrorActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCEError', responseConstructor : KalturaCEError  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'stats'  },
				action : { type : 'c' , default : 'reportKceError'  },
				kalturaCEError : { type : 'o'   , fallbackConstructor :  KalturaCEError, subType : 'KalturaCEError'}
            }
        );
        return result;
    }
}

