

export enum KalturaReportType {
    applications = '16',
	appDomainUniqueActiveUsers = '40',
	browsers = '23',
	browsersFamilies = '33',
	browsersFamiliesVpaas = '20009',
	browsersVpaas = '20007',
	categoryHighlights = '52',
	cdnBandwidthUsage = '64',
	contentContributions = '7',
	contentDropoff = '2',
	contentDropoffVpaas = '20001',
	contentInteractions = '3',
	contentRealtime = '10012',
	contentReportReasons = '44',
	contentReportReasonsVpaas = '20018',
	discoveryRealtime = '10007',
	discoveryViewRealtime = '10013',
	engagementBreakdownWebcast = '40010',
	engagementToolsWebcast = '40012',
	engagementWebcast = '40002',
	engagmentTimelineWebcast = '40011',
	entryLevelUsersDiscoveryRealtime = '10008',
	entryLevelUsersStatusRealtime = '10009',
	entryUsage = '27',
	flavorParamsTranscodingUsage = '61',
	highlightsWebcast = '40001',
	interactiveVideoHotspotClickedPercentiles = '56',
	interactiveVideoNodeSwitchHotspotClickedPercentiles = '57',
	interactiveVideoNodeTopHotspots = '54',
	interactiveVideoTopNodes = '50',
	intercativeVideoNodeSwitchTopHotspots = '55',
	latestPlayedEntries = '51',
	live = '24',
	mapOverlay = '4',
	mapOverlayCity = '30',
	mapOverlayCityRealtime = '10003',
	mapOverlayCityVpaas = '20014',
	mapOverlayCityWebcast = '40006',
	mapOverlayCountry = '36',
	mapOverlayCountryRealtime = '10001',
	mapOverlayCountryVpaas = '20012',
	mapOverlayCountryWebcast = '40004',
	mapOverlayRegion = '37',
	mapOverlayRegionRealtime = '10002',
	mapOverlayRegionVpaas = '20013',
	mapOverlayRegionWebcast = '40005',
	operatingSystem = '22',
	operatingSystemFamilies = '32',
	operatingSystemFamiliesVpaas = '20008',
	operatingSystemVpaas = '20006',
	partnerUsage = '201',
	partnerUsageHighlights = '63',
	partnerUsageVpaas = '20021',
	percentiles = '43',
	platforms = '21',
	platformsDiscoveryRealtime = '10010',
	platformsRealtime = '10004',
	platformsVpaas = '20005',
	platformsWebcast = '40007',
	playbackRate = '46',
	playbackRateVpaas = '20020',
	playbackTypeRealtime = '10011',
	playerHighlights = '62',
	playerRelatedInteractions = '45',
	playerRelatedInteractionsVpaas = '20019',
	qoeEngagement = '30014',
	qoeEngagementApplicationVersion = '30062',
	qoeEngagementBrowsers = '30020',
	qoeEngagementBrowsersFamilies = '30019',
	qoeEngagementCity = '30018',
	qoeEngagementCountry = '30016',
	qoeEngagementCustomVar1 = '30052',
	qoeEngagementCustomVar2 = '30053',
	qoeEngagementCustomVar3 = '30054',
	qoeEngagementEntry = '30024',
	qoeEngagementIsp = '30025',
	qoeEngagementOperatingSystem = '30022',
	qoeEngagementOperatingSystemFamilies = '30021',
	qoeEngagementPlatforms = '30015',
	qoeEngagementPlayerVersion = '30023',
	qoeEngagementRegion = '30017',
	qoeErrorTracking = '30038',
	qoeErrorTrackingApplicationVersion = '30064',
	qoeErrorTrackingBrowsers = '30042',
	qoeErrorTrackingBrowsersFamilies = '30041',
	qoeErrorTrackingCodes = '30039',
	qoeErrorTrackingCustomVar1 = '30058',
	qoeErrorTrackingCustomVar2 = '30059',
	qoeErrorTrackingCustomVar3 = '30060',
	qoeErrorTrackingEntry = '30046',
	qoeErrorTrackingOperatingSystem = '30044',
	qoeErrorTrackingOperatingSystemFamilies = '30043',
	qoeErrorTrackingPlatforms = '30040',
	qoeErrorTrackingPlayerVersion = '30045',
	qoeExperience = '30002',
	qoeExperienceApplicationVersion = '30061',
	qoeExperienceBrowsers = '30008',
	qoeExperienceBrowsersFamilies = '30007',
	qoeExperienceCity = '30006',
	qoeExperienceCountry = '30004',
	qoeExperienceCustomVar1 = '30049',
	qoeExperienceCustomVar2 = '30050',
	qoeExperienceCustomVar3 = '30051',
	qoeExperienceEntry = '30012',
	qoeExperienceIsp = '30013',
	qoeExperienceOperatingSystem = '30010',
	qoeExperienceOperatingSystemFamilies = '30009',
	qoeExperiencePlatforms = '30003',
	qoeExperiencePlayerVersion = '30011',
	qoeExperienceRegion = '30005',
	qoeLiveSessionFlow = '30048',
	qoeOverview = '30001',
	qoeStreamQuality = '30026',
	qoeStreamQualityApplicationVersion = '30063',
	qoeStreamQualityBrowsers = '30032',
	qoeStreamQualityBrowsersFamilies = '30031',
	qoeStreamQualityCity = '30030',
	qoeStreamQualityCountry = '30028',
	qoeStreamQualityCustomVar1 = '30055',
	qoeStreamQualityCustomVar2 = '30056',
	qoeStreamQualityCustomVar3 = '30057',
	qoeStreamQualityEntry = '30036',
	qoeStreamQualityIsp = '30037',
	qoeStreamQualityOperatingSystem = '30034',
	qoeStreamQualityOperatingSystemFamilies = '30033',
	qoeStreamQualityPlatforms = '30027',
	qoeStreamQualityPlayerVersion = '30035',
	qoeStreamQualityRegion = '30029',
	qoeVodSessionFlow = '30047',
	qosOverviewRealtime = '10006',
	qualityWebcast = '40003',
	quiz = 'quiz.QUIZ',
	quizAggregateByQuestion = 'quiz.QUIZ_AGGREGATE_BY_QUESTION',
	quizUserAggregateByQuestion = 'quiz.QUIZ_USER_AGGREGATE_BY_QUESTION',
	quizUserPercentage = 'quiz.QUIZ_USER_PERCENTAGE',
	reachCatalogUsage = '65',
	reachProfileUsage = '66',
	reachUsage = '28',
	reactionsBreakdownWebcast = '40013',
	selfServeBandwidth = '67',
	selfServeUsage = '60',
	selfServeUsageVpaas = '20023',
	specificUserEngagement = '12',
	specificUserUsage = '18',
	subCategories = '53',
	topContent = '1',
	topContentContributors = '39',
	topContentContributorsVpaas = '20016',
	topContentCreator = '38',
	topContentCreatorVpaas = '20015',
	topContributors = '5',
	topCreators = '20',
	topCustomVar1 = '29',
	topCustomVar2 = '58',
	topCustomVar3 = '59',
	topDomainsWebcast = '40008',
	topEndedBroadcastEntries = '10014',
	topLiveNowEntries = '10015',
	topPlaybackContext = '25',
	topPlaybackContextVpaas = '20022',
	topSources = '41',
	topSourcesVpaas = '20017',
	topSyndication = '6',
	topSyndicationVpaas = '20002',
	topUsersWebcast = '40009',
	topUserContent = '47',
	uniqueUsersPlay = '35',
	uniqueUsersPlayVpaas = '20011',
	usersOverviewRealtime = '10005',
	userContentDropoff = '14',
	userContentInteractions = '15',
	userEngagement = '11',
	userEngagementTimeline = '34',
	userEngagementTimelineVpaas = '20010',
	userHighlights = '48',
	userInteractiveVideo = '49',
	userTopContent = '13',
	userTopContentVpaas = '20003',
	userUsage = '17',
	userUsageVpaas = '20004',
	varUsage = '19',
	veHighlights = '50000',
	veRegisteredCountries = '50004',
	veRegisteredIndustry = '50002',
	veRegisteredPlatforms = '50001',
	veRegisteredRoles = '50003',
	veRegisteredWorldRegions = '50005',
	vpaasUsage = '26',
	vpaasUsageMulti = '42'
}