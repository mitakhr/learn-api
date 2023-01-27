import { assert } from "chai";
import reqresApi from '$root/page/reqres.api';
import * as data from '$root/data/user.data';

describe('Delete Data', function () {
    it('Should successfully delete data', async() => {
        const response = await reqresApi.update_user();
        assert.equal(response.status, 200);
    });
})