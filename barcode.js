const express = require("express");
const bwipjs = require("bwip-js");

const app = express();
const port = 3000;

app.get("/barcode", (req, res) => {
  const barcodeData = req.query.data || "98102800854966";

  bwipjs.toBuffer(
    {
      bcid: "code128", // Barcode type
      text: barcodeData, // Text to encode
      scale: 3, // 3x scaling factor
      height: 10, // Bar height, in millimeters
      includetext: true, // Show human-readable text
      textxalign: "center", // Always good to set this
    },
    (err, png) => {
      if (err) {
        res.status(500).send("Error generating barcode: " + err);
      } else {
        res.set("Content-Type", "image/png");
        res.send(png);
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Barcode generator listening at http://localhost:${port}`);
});
