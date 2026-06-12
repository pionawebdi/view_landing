/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DiagnosisFormData {
  url: string;
  industry: string;
  goal: string;
  painPoint: string;
  email: string;
}

export interface ReportData {
  title: string;
  score: number;
  status: 'optimal' | 'moderate' | 'needs_improvement';
  summary: string;
  items: {
    category: string;
    score: number;
    status: 'good' | 'warning' | 'critical';
    description: string;
  }[];
  insight: string;
  checklist: string[];
}
