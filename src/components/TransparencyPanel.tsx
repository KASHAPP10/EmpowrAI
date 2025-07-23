import React from 'react';
import { Shield, PieChart, HelpCircle, GraduationCap as University, CheckCircle } from 'lucide-react';

export function TransparencyPanel() {
  const scoreFactors = [
    { factor: 'Cash Flow Consistency', weight: 25, color: 'bg-cyan-400' },
    { factor: 'Customer Reviews & Social Proof', weight: 20, color: 'bg-blue-400' },
    { factor: 'Payment History (Vendors/Rent)', weight: 18, color: 'bg-green-400' },
    { factor: 'Business Registration & Compliance', weight: 15, color: 'bg-yellow-400' },
    { factor: 'Digital Presence & Engagement', weight: 12, color: 'bg-purple-400' },
    { factor: 'Industry Benchmarks', weight: 10, color: 'bg-pink-400' },
  ];

  const faqs = [
    {
      question: 'How is my Empowr Score calculated?',
      answer: 'Your Empowr Score uses machine learning to analyze multiple alternative data sources including cash flow patterns, customer feedback, payment history, and business compliance records. The algorithm is trained on thousands of successful business outcomes to predict creditworthiness.',
    },
    {
      question: 'How does Empowr AI prevent bias?',
      answer: 'Our AI model is regularly audited for fairness by independent third parties. We use bias detection algorithms and ensure our training data represents diverse business types and demographics. Traditional protected characteristics are never used as input variables.',
    },
    {
      question: 'Is my business data secure?',
      answer: 'Yes. We use bank-level encryption (AES-256) and never sell your data to third parties. All data processing complies with SOC 2 Type II standards and relevant privacy regulations. You maintain full control over your data sharing preferences.',
    },
    {
      question: 'Can I dispute my score?',
      answer: 'Absolutely. If you believe there are errors in your score calculation, you can initiate a review process through your dashboard. Our team will investigate within 5 business days and provide detailed explanations for any score components.',
    },
  ];

  const auditors = [
    { name: 'MIT Computer Science & AI Lab', type: 'Algorithm Fairness Review' },
    { name: 'Brookings Institution', type: 'Economic Impact Study' },
    { name: 'CDFI Fund', type: 'Community Development Finance' },
    { name: 'Deloitte', type: 'Security & Compliance Audit' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Transparency Panel</h1>
        <p className="text-gray-400">Understand how your Empowr Score works and our commitment to fairness</p>
      </div>

      {/* Score Breakdown */}
      <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700 mb-8">
        <div className="flex items-center space-x-3 mb-6">
          <PieChart size={24} className="text-cyan-400" />
          <h3 className="text-lg font-semibold text-white">Empowr Score Breakdown</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Pie Chart Visualization */}
          <div className="flex items-center justify-center">
            <div className="relative w-64 h-64">
              <svg className="w-64 h-64 transform -rotate-90" viewBox="0 0 120 120">
                {scoreFactors.map((factor, index) => {
                  const radius = 50;
                  const circumference = 2 * Math.PI * radius;
                  const strokeDasharray = circumference;
                  const strokeDashoffset = circumference - (factor.weight / 100) * circumference;
                  const rotation = scoreFactors.slice(0, index).reduce((acc, f) => acc + (f.weight / 100) * 360, 0);
                  
                  return (
                    <circle
                      key={index}
                      cx="60"
                      cy="60"
                      r={radius}
                      stroke={factor.color.replace('bg-', '#')}
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${(factor.weight / 100) * circumference} ${circumference}`}
                      transform={`rotate(${rotation} 60 60)`}
                      className="transition-all duration-1000"
                    />
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Legend */}
          <div className="space-y-4">
            {scoreFactors.map((factor, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 ${factor.color} rounded-full`}></div>
                  <span className="text-white font-medium">{factor.factor}</span>
                </div>
                <span className="text-gray-400 font-semibold">{factor.weight}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fairness Commitment */}
      <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700 mb-8">
        <div className="flex items-center space-x-3 mb-6">
          <Shield size={24} className="text-green-400" />
          <h3 className="text-lg font-semibold text-white">AI Fairness & Bias Mitigation</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-slate-800 rounded-lg">
            <CheckCircle size={20} className="text-green-400 mb-3" />
            <h4 className="text-white font-medium mb-2">Bias Detection</h4>
            <p className="text-gray-400 text-sm">
              Continuous monitoring for algorithmic bias across protected demographics with monthly fairness reports.
            </p>
          </div>
          <div className="p-4 bg-slate-800 rounded-lg">
            <CheckCircle size={20} className="text-green-400 mb-3" />
            <h4 className="text-white font-medium mb-2">Diverse Training Data</h4>
            <p className="text-gray-400 text-sm">
              Our model is trained on a representative dataset of minority and women-owned businesses across all industries.
            </p>
          </div>
          <div className="p-4 bg-slate-800 rounded-lg">
            <CheckCircle size={20} className="text-green-400 mb-3" />
            <h4 className="text-white font-medium mb-2">Independent Audits</h4>
            <p className="text-gray-400 text-sm">
              Quarterly third-party audits by leading academic institutions and civil rights organizations.
            </p>
          </div>
        </div>
      </div>

      {/* Audit Partners */}
      <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700 mb-8">
        <div className="flex items-center space-x-3 mb-6">
          <University size={24} className="text-blue-400" />
          <h3 className="text-lg font-semibold text-white">Third-Party Validators</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {auditors.map((auditor, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
              <div>
                <p className="text-white font-medium">{auditor.name}</p>
                <p className="text-gray-400 text-sm">{auditor.type}</p>
              </div>
              <CheckCircle size={20} className="text-green-400" />
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
        <div className="flex items-center space-x-3 mb-6">
          <HelpCircle size={24} className="text-purple-400" />
          <h3 className="text-lg font-semibold text-white">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-slate-700 pb-6 last:border-b-0 last:pb-0">
              <h4 className="text-white font-medium mb-3">{faq.question}</h4>
              <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-lg border border-cyan-500/20">
          <p className="text-white font-medium mb-2">Have more questions?</p>
          <p className="text-gray-400 text-sm mb-4">
            Our transparency team is available to explain any aspect of our scoring methodology.
          </p>
          <button className="px-4 py-2 bg-cyan-400 text-black rounded-lg font-medium hover:bg-cyan-300 transition-colors duration-200">
            Contact Transparency Team
          </button>
        </div>
      </div>
    </div>
  );
}