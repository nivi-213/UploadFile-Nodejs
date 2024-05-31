const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
app.use("/files", express.static("files"));

const mongourl =
  "mongodb+srv://uploadfile:uploadfile@cluster0.qzfftdf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(mongourl, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error("Error connecting to database: ", err);
  });
// Multer...............................................
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});
require("./pdfDetails");
const PdfSchema = mongoose.model("PdfDetails");

const upload = multer({ storage: storage });

app.post("/upload-files", async (req, res) => {
  console.log(req.file);

  const title = req.body.title;
  const fileName = req.file.filename;
  try {
    await PdfSchema.create({ title: title, pdf: fileName });
    res.send({ status: "ok" });
  } catch (error) {
    res.json({ status: error });
  }
});

// ...................................................
app.get("/", async (req, res) => {
    res.send("Success!!!!");
});

app.listen(5000, () => {
  console.log("Server Started");
});
