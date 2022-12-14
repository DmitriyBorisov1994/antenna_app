import { pi, cos, sin } from 'mathjs';


const waveLengthCalc = (freq: number) => {
   return 30000 / freq
}

const phaseFactorCalc = (waveLength: number) => {
   return pi / waveLength
}

const antennaLengthCalc = (waveLength: number, lengthRatio: number) => {
   return waveLength * lengthRatio
}

const diagramExpression = (angle: number, antennaLength: number, phaseFactor: number) => {
   let result = (cos(phaseFactor * antennaLength * cos(angle * pi / 180)) - cos(phaseFactor * antennaLength)) / sin(angle * pi / 180)
   if (Number.isNaN(result)) return 0
   return result
}

export const getCalculationData = (freq: number, lengthRatio: number) => {
   const waveLength = waveLengthCalc(freq)
   const phaseFactor = phaseFactorCalc(waveLength)
   const antennaLength = antennaLengthCalc(waveLength, lengthRatio)
   const diagramPoints: number[] = []
   for (let i = 0; i < 360; i += 10) {
      diagramPoints.push(diagramExpression(i, antennaLength, phaseFactor))
   }
   let maxValue = Math.max(...diagramPoints)
   let normalPoins = diagramPoints.map(p => Math.abs(p / maxValue))
   return {
      freq,
      lengthRatio,
      waveLength,
      antennaLength,
      normalPoins
   }
}