
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaQuizListResponse } from './KalturaQuizListResponse';

import { KalturaQuizFilter } from './KalturaQuizFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface QuizListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaQuizFilter;
	pager? : KalturaFilterPager;
}

/** 
* List quiz objects by filter and pager
**/
export class QuizListAction extends KalturaRequest<KalturaQuizListResponse> {

    filter : KalturaQuizFilter;
	pager : KalturaFilterPager;

    constructor(data? : QuizListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaQuizListResponse', responseConstructor : KalturaQuizListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'quiz_quiz' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaQuizFilter, subType : 'KalturaQuizFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

