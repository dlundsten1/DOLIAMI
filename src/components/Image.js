import React, { useEffect, useState } from "react"

const Image = ({activity}) => {
  const [url, setUrl] = useState()
  const { Configuration, OpenAIApi } = require("openai")
  const configuration = new Configuration({
    apiKey: "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",
  })
  const openai = new OpenAIApi(configuration)

  const imageParameters = {
    prompt: activity,
    n: 1,
    size: '512x512',
  }
  useEffect(() => {
    if (!url) {
      openai.createImage(imageParameters).then((response) => {
        if (!url) setUrl(response.data.data[0].url)
      })
    }
  }, [])

  if (url) return <img src={url} />
  else return null
}

export default Image
