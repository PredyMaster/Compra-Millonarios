import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet } from "react-native"

const ProgressBar = ({ start, end, value, progress }) => {
  /*   useEffect(() => {
    const timer = setInterval(() => {
      if (progress < end) {
        setProgress(progress + 1)
      }
    }, 50) // Cambia 50 por el intervalo deseado en milisegundos

    return () => clearInterval(timer)
  }, [progress, end]) */

  const percent = ((progress - start) / (end - start)) * 100

  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, { width: `${percent}%` }]}></View>
      <Text style={styles.progress}>{`${progress}/${end}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 30,
    backgroundColor: "#eee",
    borderRadius: 5,
    marginTop: 10,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#05ff6b",
    borderRadius: 5,
  },
  progress: {
    fontSize: 8,
    letterSpacing: 1,
    marginTop: 4,
    color: "white",
    textAlign: "center",
  },
})

export default ProgressBar
