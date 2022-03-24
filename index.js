const express = require("express");
const app = express();
const cryptovoxels = require("./api/cryptovoxels");
const decentraland = require("./api/decentraland");

app.use(express.json({ extended: false }));

app.use("/cryptovoxel/", cryptovoxels);
app.use("/cryptovoxel/", decentraland);

const PORT = process.env.PORT || 6060;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
