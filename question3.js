const fs = require("fs");
const path = require("path");

const logsDir = path.join(__dirname, "Logs");

function removeLogFiles() {
  if (fs.existsSync(logsDir)) {
    const files = fs.readdirSync(logsDir);

    files.forEach((file) => {
      const filePath = path.join(logsDir, file);
      console.log(`delete files...${file}`);
      fs.unlinkSync(filePath); // Deletes the file
    });

    fs.rmdirSync(logsDir);
    console.log("Logs directory removed");
  } else {
    console.log("Logs directory does not exist");
  }
}

function createLogFiles() {
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
    console.log("Logs directory created");
  }

  process.chdir(logsDir);

  for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `This is log file ${i}`);
    console.log(fileName); // Output file name to console
  }
}

function manageLogs() {
  removeLogFiles();

  createLogFiles();
}

manageLogs();
