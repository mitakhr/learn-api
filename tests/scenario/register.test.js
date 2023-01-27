import { assert } from "chai";
import reqresApi from '$root/page/reqres.api';
import * as data from '$root/data/user.data';

//describe itu kaya suite di qase.io
describe('Register', function () {
    //it itu kaya testcase
    it('Should successfull register when insert valid data', async() => {
        const response = await reqresApi.register(data.VALID_REGISTER); //valid_register ini data dari user.data.js

        assert.equal(response.status, 200); //cek http response

        assert.isNumber(response.data.id);
        assert.isString(response.data.token);
    });

    it('Should unsuccessfull register when insert invalid data', async() => {
        const response = await reqresApi.register(data.INVALID_REGISTER); //valid_register ini data dari user.data.js

        assert.equal(response.status, 400); //cek http response
        assert.isString(response.data.error);
    });
})