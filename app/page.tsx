'use client';

import { useChat } from 'ai/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Calculator, Brain, Target } from 'lucide-react';

export default function MathChatbot() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } =
    useChat();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">
              Multiplication Facts Tutor
            </h1>
          </div>
          <p className="text-gray-600">
            Learn mental math strategies for addition and multiplication!
          </p>
        </div>

        {/* Strategy Tips Card
        <Card className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <Target className="h-5 w-5" />
              Mental Math Tips
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-blue-700">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <strong>Bridge to 10:</strong> For 7+6, think 7+3=10, then
                10+3=13
              </div>
              <div>
                <strong>Skip Counting:</strong> For 3×7, count by 7s: 7, 14, 21
              </div>
              <div>
                <strong>Break Apart:</strong> For 8×6, think (8×5) + (8×1) = 48
              </div>
              <div>
                <strong>Use Known Facts:</strong> If 5×7=35, then 6×7 = 35+7 =
                42
              </div>
            </div>
          </CardContent>
        </Card> */}

        {/* Chat Interface */}
        <Card className="h-[600px] flex flex-col">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Math Practice Chat
            </CardTitle>
          </CardHeader>

          <CardContent className="flex-1 p-0">
            <ScrollArea className="h-[480px] p-4">
              {messages.length === 0 && (
                <div className="text-center text-gray-500 mt-8">
                  <Brain className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <p className="text-lg mb-2">Ready to practice mental math?</p>
                  <p className="text-sm">
                    I'll help you learn strategies to solve problems in your
                    head!
                  </p>
                  <p className="text-sm mt-2 text-blue-600">
                    Say "hi" or "start" to begin!
                  </p>
                </div>
              )}

              {messages.map(message => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-gray-100 text-gray-800 rounded-bl-none border'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{message.content}</div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start mb-4">
                  <div className="bg-gray-100 text-gray-800 p-3 rounded-lg rounded-bl-none border">
                    <div className="flex items-center gap-2">
                      <div className="animate-spin h-4 w-4 border-2 border-blue-600 border-t-transparent rounded-full"></div>
                      <span>Thinking...</span>
                    </div>
                  </div>
                </div>
              )}

              {error && (
                <div className="flex justify-start mb-4">
                  <div className="bg-red-100 text-red-800 p-3 rounded-lg rounded-bl-none border border-red-200">
                    <div className="flex items-center gap-2">
                      <span className="text-red-600">⚠️</span>
                      <span>Error: {error.message}</span>
                    </div>
                    <p className="text-sm mt-1">
                      Please check your OpenAI API key configuration.
                    </p>
                  </div>
                </div>
              )}
            </ScrollArea>
          </CardContent>

          <div className="p-4 border-t bg-gray-50 rounded-b-lg">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Type your answer or say 'hi' to start..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button type="submit" disabled={isLoading || !input.trim()}>
                Send
              </Button>
            </form>
            {/* <p className="text-xs text-gray-500 mt-2 text-center">
              Take your time and explain how you solved each problem!
            </p> */}
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-600">
          <p>
            Practice makes perfect! The more you use these strategies, the
            faster you'll get.
          </p>
        </div>
      </div>
    </div>
  );
}
