const express = require("express");
var XMLHttpRequest = require('xhr2');
const router = express.Router();
let whitelistURL = "https://github.com/Maginador/node_whitelist/raw/main/whitelist.txt";
let whiteListReady = false;
let whitelist = []
let url = "https://wiki.cryptovoxels.com/cat.vox";
/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.get("/", async (req, res) => {
  try {
    whiteListReady = false;
    getWhitelist();

    setTimeout(function(){
      let wallet = req.query.wallet;
      let result = "";
      console.log(wallet, whitelist, url);
      for(let i = 0; i<whitelist.length; i++){
        if(wallet === whitelist[i])
          result = url;
      }
      res.json({
        status: 200,
        message: whitelist[0],
      });  }, 2000);
    
   
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;

function getWhitelist(){

  // read text from URL location
  var request = new XMLHttpRequest();
  request.open('GET', whitelistURL, true);
  request.send(null);
  request.onreadystatechange = function () {
      if (request.readyState === 4 && request.status === 200) {
          var type = request.getResponseHeader('Content-Type');
          if (type.indexOf("text") !== 1) {
            whiteListReady = true;

            whitelist =  request.responseText.split(',');
          }
      }
  }
}