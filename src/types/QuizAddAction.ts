
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaQuiz } from './KalturaQuiz';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface QuizAddActionArgs  extends KalturaRequestArgs {
    entryId : string;
	quiz : KalturaQuiz;
}

/** 
* Allows to add a quiz to an entry
**/
export class QuizAddAction extends KalturaRequest<KalturaQuiz> {

    entryId : string;
	quiz : KalturaQuiz;

    constructor(data : QuizAddActionArgs)
    {
        super(data, 'o', 'KalturaQuiz');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'quiz_quiz' },
				action : { type : 'c' , default : 'add' },
				entryId : { type : 's'  },
				quiz : { type : 'o'  , subType : 'KalturaQuiz'}
            }
        );
        return result;
    }
}

