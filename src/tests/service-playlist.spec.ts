import { KalturaHttpClientConfiguration} from "../kaltura-clients/kaltura-http-client-configuration";
import { KalturaBrowserHttpClient } from "../kaltura-clients/kaltura-browser-http-client";
import {
    PlaylistListAction,
    KalturaPlaylistListResponse,
    KalturaPlaylist
} from "../types";

import { TestsConfig } from './tests-config';

describe(`service 'Playlist' tests`, () =>
{
    let client : KalturaBrowserHttpClient = null;

    const httpConfiguration = new KalturaHttpClientConfiguration();
    httpConfiguration.endpointUrl = TestsConfig.endpoint;
    httpConfiguration.ks =TestsConfig.ks;

    beforeEach(() => {
      client = new KalturaBrowserHttpClient(httpConfiguration);
    });

    afterEach(() => {
        client = null;
    });

    it(`invoke 'list' action`,(done) => {
        client.request(new PlaylistListAction()).then(
            (response ) =>
            {
                expect(response instanceof KalturaPlaylistListResponse).toBeTruthy();

                expect(response.objects).toBeDefined();
                expect(response.objects instanceof Array).toBeTruthy();

                response.objects.forEach(entry =>
                {
                    expect(entry instanceof KalturaPlaylist).toBeTruthy();
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
});
