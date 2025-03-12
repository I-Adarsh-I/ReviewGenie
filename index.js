const express = require("express");
const app = express();
const core = require("@actions/core");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const codeReviewByGemini = async() => {
  console.log("CODE REVIEW BY GEMINI");

  const repoName = core.getInput("REPOSITORY_NAME");
  const repoOwner = core.getInput("REPOSITORY_OWNER");
  const pullRequestNumber = core.getInput("PULL_REQUEST_NUMBER");

  try {
    console.log("Logging repo name, owner and PR number", repoName, repoOwner, pullRequestNumber);
  } catch (err) {
    console.log("Error happend while extracting github acc info");
  }
}

async function run() {
  try {
      await codeReviewByGemini();
  } catch(error) {
      console.log("Encountered Error::", error.name, ':', error.message);
      console.error("\nStack Trace::", error.stack);
      console.log("\nFull Error Log::", error);
  }
}

run();