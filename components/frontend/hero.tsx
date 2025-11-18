import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 md:p-8">
      <Card className="max-w-6xl w-full bg-gradient-to-b from-gray-50 to-white rounded-3xl shadow-xl border border-gray-200 p-8 md:p-16 lg:p-24">
        <div className="text-center">
          {/* Welcome Badge */}
          <div className="flex justify-center mb-8">
            <Badge 
              variant="secondary" 
              className="px-4 py-2 text-base font-medium bg-white border border-gray-200 shadow-sm rounded-full"
            >
              <Sparkles className="w-4 h-4 mr-2 text-red-400" />
              Welcome to Lucis
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Simplify Your Video<br />Production With Lucis
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Lucis empowers you to create stunning videos with precision and ease,<br className="hidden sm:block" />
            all within a sleek and intuitive interface.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg rounded-full bg-gray-900 hover:bg-gray-800 shadow-lg hover:shadow-xl transition-all"
            >
              Try for free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-6 text-lg rounded-full border-2 hover:bg-gray-50 transition-all"
            >
              See features
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Optional: Buy Template Button */}
      <div className="fixed bottom-6 right-6">
        <Button 
          variant="secondary" 
          className="rounded-lg shadow-lg bg-white hover:bg-gray-50 font-semibold"
        >
          Buy Template - $59
        </Button>
      </div>
    </div>
  );
}