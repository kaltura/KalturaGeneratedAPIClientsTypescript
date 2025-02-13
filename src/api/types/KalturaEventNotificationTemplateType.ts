

export enum KalturaEventNotificationTemplateType {
    boolean = 'booleanNotification.Boolean',
	bpmAbort = 'businessProcessNotification.BusinessProcessAbort',
	bpmSignal = 'businessProcessNotification.BusinessProcessSignal',
	bpmStart = 'businessProcessNotification.BusinessProcessStart',
	email = 'emailNotification.Email',
	http = 'httpNotification.Http',
	kafka = 'kafkaNotification.Kafka',
	push = 'pushNotification.Push'
}