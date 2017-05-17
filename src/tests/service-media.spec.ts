import { KalturaBrowserHttpClient } from "../kaltura-clients/kaltura-browser-http-client";
import {
    MediaListAction,
    KalturaMediaListResponse,
    KalturaMediaEntry,
    KalturaMediaType
} from "../types/all";

import { TestsConfig } from './tests-config';

describe(`service 'Media' tests`, () =>
{
    let client : KalturaBrowserHttpClient = null;

    const httpConfiguration = {
        endpointUrl : TestsConfig.endpoint,
        ks  : TestsConfig.ks,
        clientTag : 'kaltura-typescript-client-tests'
    };

    beforeEach(() => {
      client = new KalturaBrowserHttpClient(httpConfiguration);
    });

    afterEach(() => {
        client = null;
    });

    it(`invoke 'list' action`,(done) => {
        client.request(new MediaListAction()).then(
            (response ) =>
            {
                expect(response instanceof KalturaMediaListResponse).toBeTruthy();

                expect(response.objects).toBeDefined();
                expect(response.objects instanceof Array).toBeTruthy();

                response.objects.forEach(entry =>
                {
                    expect(entry instanceof KalturaMediaEntry).toBeTruthy();
                });

                done();
            },
            () =>
            {
                fail(`failed to perform request`);
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
