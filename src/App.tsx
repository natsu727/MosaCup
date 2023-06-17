import type { Component } from "solid-js";
const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");
const endpoint = process.env["AZURE_OPENAI_ENDPOINT"];
const azureApiKey = process.env["AZURE_OPENAI_KEY"];
const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));

const deploymentId = "text-curie-001";

const result = await client.getCompletions(deploymentId, prompt);

const App: Component = () => {
  return (
    <>
      <a>aaaaa</a>
      <div>
        <input></input>
        <button>変換</button>
      </div>
    </>
  );
};

export default App;
