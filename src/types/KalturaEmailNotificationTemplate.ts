
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEmailNotificationFormat } from './KalturaEmailNotificationFormat';
import { KalturaEmailNotificationRecipientProvider } from './KalturaEmailNotificationRecipientProvider';
import { KalturaEmailNotificationTemplatePriority } from './KalturaEmailNotificationTemplatePriority';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaEventNotificationTemplate, KalturaEventNotificationTemplateArgs } from './KalturaEventNotificationTemplate';

export interface KalturaEmailNotificationTemplateArgs  extends KalturaEventNotificationTemplateArgs {
    format? : KalturaEmailNotificationFormat;
	subject? : string;
	body? : string;
	fromEmail? : string;
	fromName? : string;
	to? : KalturaEmailNotificationRecipientProvider;
	cc? : KalturaEmailNotificationRecipientProvider;
	bcc? : KalturaEmailNotificationRecipientProvider;
	replyTo? : KalturaEmailNotificationRecipientProvider;
	priority? : KalturaEmailNotificationTemplatePriority;
	confirmReadingTo? : string;
	hostname? : string;
	messageID? : string;
	customHeaders? : KalturaKeyValue[];
}


export class KalturaEmailNotificationTemplate extends KalturaEventNotificationTemplate {

    format : KalturaEmailNotificationFormat;
	subject : string;
	body : string;
	fromEmail : string;
	fromName : string;
	to : KalturaEmailNotificationRecipientProvider;
	cc : KalturaEmailNotificationRecipientProvider;
	bcc : KalturaEmailNotificationRecipientProvider;
	replyTo : KalturaEmailNotificationRecipientProvider;
	priority : KalturaEmailNotificationTemplatePriority;
	confirmReadingTo : string;
	hostname : string;
	messageID : string;
	customHeaders : KalturaKeyValue[];

    constructor(data? : KalturaEmailNotificationTemplateArgs)
    {
        super(data);
        if (typeof this.customHeaders === 'undefined') this.customHeaders = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaEmailNotificationTemplate' },
				format : { type : 'es'  , subType : 'KalturaEmailNotificationFormat'},
				subject : { type : 's'  },
				body : { type : 's'  },
				fromEmail : { type : 's'  },
				fromName : { type : 's'  },
				to : { type : 'o'  , subType : 'KalturaEmailNotificationRecipientProvider'},
				cc : { type : 'o'  , subType : 'KalturaEmailNotificationRecipientProvider'},
				bcc : { type : 'o'  , subType : 'KalturaEmailNotificationRecipientProvider'},
				replyTo : { type : 'o'  , subType : 'KalturaEmailNotificationRecipientProvider'},
				priority : { type : 'en'  , subType : 'KalturaEmailNotificationTemplatePriority'},
				confirmReadingTo : { type : 's'  },
				hostname : { type : 's'  },
				messageID : { type : 's'  },
				customHeaders : { type : 'a'  , subType : 'KalturaKeyValue'}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEmailNotificationTemplate',KalturaEmailNotificationTemplate);
