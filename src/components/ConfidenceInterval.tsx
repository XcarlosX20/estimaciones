'use client';

import { useState } from 'react';

interface ConfidenceIntervalResult {
  lowerBound: number;
  upperBound: number;
  marginOfError: number;
}

const ConfidenceInterval = () => {
  const [sampleMean, setSampleMean] = useState<string>('');
  const [standardDeviation, setStandardDeviation] = useState<string>('');
  const [sampleSize, setSampleSize] = useState<string>('');
  const [zScore, setZScore] = useState<string>('1.96'); // Default para 95% de confianza
  const [result, setResult] = useState<ConfidenceIntervalResult | null>(null);

  const calculateConfidenceInterval = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mean = parseFloat(sampleMean);
    const sd = parseFloat(standardDeviation);
    const n = parseFloat(sampleSize);
    const z = parseFloat(zScore);
    
    // Cálculo del margen de error
    const marginOfError = z * (sd / Math.sqrt(n));
    
    // Cálculo de los límites del intervalo
    const lowerBound = mean - marginOfError;
    const upperBound = mean + marginOfError;
    
    setResult({
      lowerBound,
      upperBound,
      marginOfError
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Calculadora de Intervalo de Confianza</h2>
      
      <form onSubmit={calculateConfidenceInterval} className="space-y-4 text-black">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Media Muestral
          </label>
          <input
            type="number"
            step="any"
            value={sampleMean}
            onChange={(e) => setSampleMean(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Desviación Estándar
          </label>
          <input
            type="number"
            step="any"
            min="0"
            value={standardDeviation}
            onChange={(e) => setStandardDeviation(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tamaño de la Muestra
          </label>
          <input
            type="number"
            min="1"
            value={sampleSize}
            onChange={(e) => setSampleSize(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Valor Z (por defecto 1.96 para 95% de confianza)
          </label>
          <input
            type="number"
            step="any"
            value={zScore}
            onChange={(e) => setZScore(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Calcular
        </button>
      </form>

      {result && (
        <div className="mt-6 p-4 bg-gray-50 rounded-md">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Resultados:</h3>
          <div className="space-y-2 text-gray-600">
            <p>
              Intervalo de Confianza:{' '}
              <span className="font-medium text-gray-800">
                [{result.lowerBound.toFixed(4)}, {result.upperBound.toFixed(4)}]
              </span>
            </p>
            <p>
              Margen de Error:{' '}
              <span className="font-medium text-gray-800">
                ±{result.marginOfError.toFixed(4)}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfidenceInterval; 