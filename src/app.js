const { writeFile } = require("node:fs/promises");
const { spawn } = require("node:child_process");
const { join } = require("node:path");
const { homedir } = require("node:os");

const userHomeDir = homedir();

const main = async () => {
  const fileName = join(userHomeDir, "hello.txt");
  await writeFile(fileName, "Hello Node!");
  spawn("C:\\windows\\notepad.exe", [fileName]);
};

void main();
