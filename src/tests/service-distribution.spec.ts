import { KalturaBrowserHttpClient } from "../kaltura-clients/kaltura-browser-http-client";
import {
    KalturaMediaListResponse,
    KalturaMediaEntry,
} from "../types/all";

import { TestsConfig } from './tests-config';
import { DistributionProviderListAction } from '../types/DistributionProviderListAction';
import { KalturaDistributionProviderListResponse } from '../types/KalturaDistributionProviderListResponse';

describe(`service 'Distribution' tests`, () =>
{
    let client : KalturaBrowserHttpClient = null;

    const httpConfiguration = {
        endpointUrl : TestsConfig.endpoint,
        clientTag : 'kaltura-typescript-client-tests'
    };

    beforeEach(() => {
      client = new KalturaBrowserHttpClient(httpConfiguration);
      client.ks = TestsConfig.ks;
    });

    afterEach(() => {
        client = null;
    });

    it(`invoke 'list' action`,(done) => {
        client.request(new DistributionProviderListAction()).then(
            (response ) =>
            {
                expect(response instanceof KalturaDistributionProviderListResponse).toBeTruthy();

                expect(response.objects).toBeDefined();
                expect(response.objects instanceof Array).toBeTruthy();

                response.objects.forEach(entry =>
                {
                    expect(entry instanceof KalturaMediaEntry).toBeTruthy();
                });

                done();
            },
            (err) =>
            {
                fail(`failed to perform request ${err.message}`);
                done();
            }
        )
    });

    xit(`invoke 'createRemote' action`,(done) => {
        // const media = new KalturaMediaEntry({
        //    name : 'typescript.MediaTests.test_createRemote',
        //    mediaType : KalturaMediaType.video
        // });
    });

    describe(`utf-8 tests`, () => {
        xit(`support utf-8 name`,(done) => {

        });

    });
});
