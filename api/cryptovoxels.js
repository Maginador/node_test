const express = require("express");
const router = express.Router();
let whitelist = ["0xf2fba5b09784fb6db00b37f1ab39af0c437e6548", "random_wallet"]
let url = "https://wiki.cryptovoxels.com/cat.vox";
/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.get("/", async (req, res) => {
  try {
    res.set('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Origin', '*');
    req.setHeader('Access-Control-Allow-Origin', '*');
    let wallet = req.query.wallet;
    console.log(wallet)
    let result = "";
    for(let i = 0; i<whitelist.length; i++){
      if(wallet === whitelist[i])
        result = url;
    }
    res.json({
      status: 200,
      message: result,
    });
   
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
