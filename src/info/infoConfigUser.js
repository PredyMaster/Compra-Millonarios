import React, { useState } from "react"

export let language = "ESP" //ESP, ENG, CAT

export const changeLanguage = (languageSelected) => {
  const [language, setLanguage] = useState(languageSelected ?? "ESP")

  return language
}
