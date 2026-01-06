import React from 'react';

export interface Guide {
  id: string;
  title: string;
  description: string;
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}