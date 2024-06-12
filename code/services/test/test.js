/**
 * Type: Micro Service
 * Description: A short-lived service which is expected to complete within a fixed period of time.
 * @param {CbServer.BasicReq} req
 * @param {string} req.systemKey
 * @param {string} req.systemSecret
 * @param {string} req.userEmail
 * @param {string} req.userid
 * @param {string} req.userToken
 * @param {boolean} req.isLogging
 * @param {[id: string]} req.params
 * @param {CbServer.Resp} resp
 */


function test(req,resp){
    // These are parameters passed into the code service
  //  const dns = new dns2({});

// dns
//   .resolveA("google.com")
//   .then(function (result) {
//     console.log(result.answers);
//     resp.success("done");
//   })
//   .catch(function (err) {
//     console.error("caught error", err, err instanceof Error ? err.stack : "");
//     resp.error(err);
//   });
const input = new Uint8Array();
//... fill input data here
const output = pako.deflate(input);

}
