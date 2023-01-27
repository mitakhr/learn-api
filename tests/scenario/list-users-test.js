import chai, { assert, expect} from "chai";
import reqresApi from '$root/page/reqres.api';
import * as data from '$root/data/user.data';
import { getParams } from "../helper/lib.api";
import jsonSchema from "chai-json-schema";

// chai.use(jsonSchema);

describe('List Users', () => {
    it('Should succesfully get list users', async () => {
        const param = getParams(data.LIST_USERS_PARAM['page']);
        const response = await reqresApi.list_users(param);

        assert.equal(response.status, 200);
        
    });
})