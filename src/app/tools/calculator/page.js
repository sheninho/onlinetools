"use client";
import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator as CalcIcon, Delete } from 'lucide-react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return firstValue / secondValue;
      case '%':
        return firstValue % secondValue;
      default:
        return secondValue;
    }
  };

  const buttonClass = "h-16 text-xl font-bold rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden border-4 border-black">
        <CardHeader className="bg-green-400 text-white font-bold py-4 px-6">
          <div className="flex items-center">
            <CalcIcon className="mr-2 h-6 w-6" />
            Calculatrice en ligne
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-4 bg-gray-100 p-4 rounded-lg border-2 border-black">
            <div className="text-right text-3xl font-mono font-bold break-all">
              {display}
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <Button onClick={clear} className={`${buttonClass} bg-red-400 hover:bg-red-500 text-white col-span-2`}>
              C
            </Button>
            <Button onClick={() => performOperation('%')} className={`${buttonClass} bg-blue-400 hover:bg-blue-500 text-white`}>
              %
            </Button>
            <Button onClick={() => performOperation('/')} className={`${buttonClass} bg-blue-400 hover:bg-blue-500 text-white`}>
              ÷
            </Button>

            <Button onClick={() => inputDigit(7)} className={`${buttonClass} bg-gray-200 hover:bg-gray-300`}>
              7
            </Button>
            <Button onClick={() => inputDigit(8)} className={`${buttonClass} bg-gray-200 hover:bg-gray-300`}>
              8
            </Button>
            <Button onClick={() => inputDigit(9)} className={`${buttonClass} bg-gray-200 hover:bg-gray-300`}>
              9
            </Button>
            <Button onClick={() => performOperation('*')} className={`${buttonClass} bg-blue-400 hover:bg-blue-500 text-white`}>
              ×
            </Button>

            <Button onClick={() => inputDigit(4)} className={`${buttonClass} bg-gray-200 hover:bg-gray-300`}>
              4
            </Button>
            <Button onClick={() => inputDigit(5)} className={`${buttonClass} bg-gray-200 hover:bg-gray-300`}>
              5
            </Button>
            <Button onClick={() => inputDigit(6)} className={`${buttonClass} bg-gray-200 hover:bg-gray-300`}>
              6
            </Button>
            <Button onClick={() => performOperation('-')} className={`${buttonClass} bg-blue-400 hover:bg-blue-500 text-white`}>
              −
            </Button>

            <Button onClick={() => inputDigit(1)} className={`${buttonClass} bg-gray-200 hover:bg-gray-300`}>
              1
            </Button>
            <Button onClick={() => inputDigit(2)} className={`${buttonClass} bg-gray-200 hover:bg-gray-300`}>
              2
            </Button>
            <Button onClick={() => inputDigit(3)} className={`${buttonClass} bg-gray-200 hover:bg-gray-300`}>
              3
            </Button>
            <Button onClick={() => performOperation('+')} className={`${buttonClass} bg-blue-400 hover:bg-blue-500 text-white`}>
              +
            </Button>

            <Button onClick={() => inputDigit(0)} className={`${buttonClass} bg-gray-200 hover:bg-gray-300 col-span-2`}>
              0
            </Button>
            <Button onClick={inputDecimal} className={`${buttonClass} bg-gray-200 hover:bg-gray-300`}>
              .
            </Button>
            <Button onClick={() => performOperation('=')} className={`${buttonClass} bg-green-400 hover:bg-green-500 text-white`}>
              =
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full opacity-50 transform -translate-x-16 -translate-y-16 z-0"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-400 rounded-lg opacity-50 transform translate-x-24 translate-y-24 rotate-12 z-0"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-500 opacity-50 transform -translate-y-1/2 rotate-45 z-0"></div>
    </div>
  );
};

export default Calculator;
