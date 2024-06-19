// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: June 2024
// This file contains the JS functions for index.html


"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICD2O-Assignment-6-Julianne-Leblanc-Peltier/sw.js", {
    scope: "/ICD2O-Assignment-06-Julianne-Leblanc-Peltier",
  })
}

/**
 * This function displays random cat facts.
*/
const getCatFact = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const data = await result.json()
    console.log(data)
    document.getElementById("cat-fact").innerHTML = data.data
  } catch (err) {
    console.log(err)
  }
}

getCatFact(
  "https://meowfacts.herokuapp.com/"
)
