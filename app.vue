<template>
  <div>
    <h1>
      welcome
    </h1>
  </div>
</template>
<script setup lang="ts" >
console.log('!start!')

import OpenAI from "openai";
const rc = useRuntimeConfig();
const fs = require('fs')

const openai = new OpenAI({ apiKey: rc.OPENAI_API_KEY });


const systemInput = `
Do embedding of passed sentence.
Send me just array of params in JSON format like this:

exmaple ###
[0.003750941, 0.0038711438, 0.0082909055, -0.008753223, -0.02073651, -0.018862579, -0.010596331, -0.022425512, ..., -0.026950065]
###
`
const question = "Hawaiian pizza"


const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: systemInput },
      { role: "user", content: question }],
    model: "gpt-4",
  });
  console.log("answer:")
  console.log(completion.choices[0]);


  const returnedData = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: question,
    encoding_format: "float",
  });

  console.log(returnedData.data[0].embedding);

  const stringSave = "[" + returnedData.data[0].embedding.toString() + "]"
  // stringSave = "[" + returnedData.data[0].embedding.toString() + "]"
  fs.writeFile('test.txt', stringSave, (err: any) => {

  // In case of a error throw err.
  if (err) throw err;
  })
</script>