
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaQuizUserEntry } from './KalturaQuizUserEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserEntrySubmitQuizActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Submits the quiz so that it's status will be submitted and calculates the score
* for the quiz
**/
export class UserEntrySubmitQuizAction extends KalturaRequest<KalturaQuizUserEntry> {

    id : number;

    constructor(data : UserEntrySubmitQuizActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaQuizUserEntry', responseConstructor : KalturaQuizUserEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'userentry'  },
				action : { type : 'c' , default : 'submitQuiz'  },
				id : { type : 'n'   }
            }
        );
        return result;
    }
}

