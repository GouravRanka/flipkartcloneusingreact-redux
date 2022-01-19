import PaytmChecksum from "../paytm/PaytmChecksum.js"
import {paytmParams,paymentMerchantkey} from "../server.js"
import formidable from "formidable";
import https from 'https'


export const gatewaypayment=  async(request,response)=>
{
let paytmchecksum=  await PaytmChecksum.generateSignature(paytmParams,paymentMerchantkey);
try{
    let params={
        ...paytmParams,
        'CHECKSUMHASH':paytmchecksum
    };
    response.json(params)
}
    catch(error)
    {

console.log(error)
    }
}

export const paymentResponse = (request, response) => {

    const form = new formidable.IncomingForm();
        let paytmCheckSum = request.body.CHECKSUMHASH;
        delete request.body.CHECKSUMHASH;

        var isVerifySignature = PaytmChecksum.verifySignature(request.body, 'bKMfNxPPf_QdZppa', paytmCheckSum);
        console.log(isVerifySignature);
        if (isVerifySignature) {
            var paytmParams = {};
            paytmParams["MID"] = request.body.MID;
            paytmParams["ORDERID"] = request.body.ORDERID;

            PaytmChecksum.generateSignature(paytmParams, 'bKMfNxPPf_QdZppa').then(function (checksum) {

                paytmParams["CHECKSUMHASH"] = checksum;

                var post_data = JSON.stringify(paytmParams);

                var options = {

                    hostname: 'securegw-stage.paytm.in',
                    port: 443,
                    path: '/order/status',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Content-Length': post_data.length
                    }
                };

                var res = "";
                var post_req = https.request(options, function (post_res) {
                    post_res.on('data', function (chunk) {
                        res += chunk;
                    });

                    post_res.on('end', function () {
                        let result = JSON.parse(res)
                        response.redirect(`http://localhost:3000/`)
                    });
                });
                post_req.write(post_data);
                post_req.end();
            });
        } else {
            console.log("Checksum Mismatched");
        }
    console.log('//////////////end')
}