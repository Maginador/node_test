const express = require("express");
const app = express();
const cryptovoxels = require("./api/cryptovoxels");
const decentraland = require("./api/decentraland");
const cors = require('cors')
app.get('/allow-cors', function(request, response) {
    response.set('Access-Control-Allow-Origin', '*');
    response.sendFile(__dirname + '/cat.vox');
  });
app.use(express.json({ extended: false }));
app.use(cors());
app.use("/cryptovoxel/", cryptovoxels);
app.use("/cryptovoxel/", decentraland);
// CORS header `Access-Control-Allow-Origin` set to accept all


const PORT = process.env.PORT || 6060;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
