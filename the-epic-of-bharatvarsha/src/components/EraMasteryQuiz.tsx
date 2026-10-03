import React, { useState } from 'react';
import { QUIZ_QUESTIONS, ERAS_DATA } from '../data/historyData';
import { useProgress } from '../context/ProgressContext';
import {
  Award,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Printer,
  Scroll
} from 'lucide-react';

export const EraMasteryQuiz: React.FC = () => {
  const { progress, recordQuizAnswer, setActiveTab } = useProgress();
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [submittedQuestions, setSubmittedQuestions] = useState<Record<string, boolean>>({});
  const [scholarName, setScholarName] = useState<string>('Scholar of Bharatvarsha');
  const [isEditingName, setIsEditingName] = useState<boolean>(false);

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    if (submittedQuestions[questionId]) return; // locked after check
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const handleCheckAnswer = (questionId: string) => {
    const question = QUIZ_QUESTIONS.find(q => q.id === questionId);
    if (!question) return;

    const selected = selectedAnswers[questionId];
    if (selected === undefined) return;

    const isCorrect = selected === question.correctIndex;
    setSubmittedQuestions(prev => ({ ...prev, [questionId]: true }));
    recordQuizAnswer(questionId, isCorrect);
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setSubmittedQuestions({});
  };

  const totalAnswered = Object.keys(submittedQuestions).length;
  const correctCount = Object.keys(submittedQuestions).filter(
    id => selectedAnswers[id] === QUIZ_QUESTIONS.find(q => q.id === id)?.correctIndex
  ).length;

  const isAllComplete = totalAnswered === QUIZ_QUESTIONS.length;
  const isMastered = isAllComplete && correctCount >= 4;

  return (
    <div className="space-y-8 pb-16 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="text-xs uppercase tracking-widest text-[#8C2F15] font-bold font-cinzel flex items-center justify-center gap-2">
          <Award className="w-4 h-4 text-[#8C2F15]" />
          <span>Formative Assessment · Epigraphical Rigor</span>
        </div>
        <h1 className="font-cinzel text-3xl sm:text-5xl font-bold text-[#241711] tracking-tight">
          Era Transition Mastery Check
        </h1>
        <p className="text-sm sm:text-base text-[#4A3528] font-serif max-w-xl mx-auto leading-relaxed">
          Verify your grasp of historical succession—how geographic shifts, iron tools, philosophical movements, and statecraft connected ancient eras.
        </p>
      </div>

      {/* Progress & Score Board */}
      <div className="manuscript-card rounded-3xl p-5 sm:p-7 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 border-2 border-[#DFD2BC]">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2A1810] to-[#451B0E] border-2 border-[#C89D52] flex items-center justify-center font-bold text-[#FDE68A] text-xl shadow-xs font-mono">
            <span>{correctCount}/{QUIZ_QUESTIONS.length}</span>
          </div>
          <div>
            <div className="text-xs text-[#7D6B5C] font-cinzel font-semibold">Mastery Verification</div>
            <div className="font-cinzel text-base sm:text-lg font-bold text-[#2A1810]">
              {totalAnswered === 0
                ? 'Answer all 5 questions to test retention'
                : `${correctCount} of ${totalAnswered} Questions Verified Correctly`}
            </div>
          </div>
        </div>

        {totalAnswered > 0 && (
          <button
            onClick={resetQuiz}
            className="flex items-center gap-2 text-xs text-[#7D6B5C] hover:text-[#8C2F15] px-4 py-2 rounded-xl border border-[#DFD2BC] hover:bg-[#FAF4E8] transition-colors font-cinzel font-semibold cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset Assessment</span>
          </button>
        )}
      </div>

      {/* Royal Tamra-Patra (Copper Plate Inscribed Charter) on Mastery! */}
      {isMastered && (
        <div className="p-8 sm:p-10 tamra-patra rounded-3xl border-4 border-[#FDE68A] shadow-2xl text-center space-y-4 animate-fade-in relative overflow-hidden print:m-0 print:border-none">
          {/* Ornate corner motifs */}
          <div className="absolute top-3 left-3 text-[#FDE68A]/60 text-lg">✦</div>
          <div className="absolute top-3 right-3 text-[#FDE68A]/60 text-lg">✦</div>
          <div className="absolute bottom-3 left-3 text-[#FDE68A]/60 text-lg">✦</div>
          <div className="absolute bottom-3 right-3 text-[#FDE68A]/60 text-lg">✦</div>

          <div className="w-16 h-16 mx-auto rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border-2 border-[#FDE68A] shadow-inner">
            <Sparkles className="w-8 h-8 text-[#FDE68A] animate-pulse" />
          </div>

          <div className="text-xs uppercase tracking-widest text-[#FDE68A] font-bold font-cinzel">
            ॥ ताम्रपत्र-प्रशस्तिः ॥ Royal Edict of Merit
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-[#FFFBEB] tracking-tight">
            Itihasa-Ratna · Master of Bharatvarsha
          </h2>

          <div className="max-w-md mx-auto py-2">
            {isEditingName ? (
              <div className="flex items-center justify-center gap-2">
                <input
                  type="text"
                  value={scholarName}
                  onChange={e => setScholarName(e.target.value)}
                  className="bg-white/20 border border-white/40 text-white rounded-lg px-3 py-1 text-center font-cinzel font-bold text-sm focus:outline-hidden"
                  placeholder="Your Name"
                />
                <button
                  onClick={() => setIsEditingName(false)}
                  className="px-3 py-1 bg-[#FDE68A] text-[#78350F] rounded-lg text-xs font-bold font-cinzel"
                >
                  Save
                </button>
              </div>
            ) : (
              <div
                onClick={() => setIsEditingName(true)}
                className="inline-flex items-center gap-2 cursor-pointer group bg-black/20 px-4 py-1.5 rounded-full border border-white/20 hover:border-[#FDE68A]"
                title="Click to edit name on certificate"
              >
                <span className="font-cinzel font-bold text-lg text-[#FDE68A] underline decoration-dotted">
                  {scholarName}
                </span>
                <span className="text-[11px] text-[#FDE68A]/80 font-serif italic">(Edit Name)</span>
              </div>
            )}
          </div>

          <p className="text-xs sm:text-sm text-[#FEF3C7] max-w-xl mx-auto font-serif leading-relaxed">
            This charter certifies that the scholar has successfully mastered the unbroken civilizational causality of Indian history—from Harappan urban drainage and Vedic republics to classical Gupta sciences, Deccan monolithic architecture, and the modern sovereign republic.
          </p>

          <div className="pt-2 flex items-center justify-center gap-4 text-xs font-mono text-[#FDE68A]">
            <span>Score: {correctCount} / {QUIZ_QUESTIONS.length} ({(correctCount / QUIZ_QUESTIONS.length * 100).toFixed(0)}%)</span>
            <span>·</span>
            <span>Date: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
          </div>

          <div className="pt-3 flex justify-center gap-3">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 hover:bg-white/30 text-white rounded-xl text-xs font-bold font-cinzel transition-all border border-white/30 cursor-pointer shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save Charter</span>
            </button>
          </div>
        </div>
      )}

      {/* Quiz Questions List */}
      <div className="space-y-6">
        {QUIZ_QUESTIONS.map((q, idx) => {
          const linkedEra = ERAS_DATA.find(e => e.id === q.eraId);
          const selectedOption = selectedAnswers[q.id];
          const isSubmitted = submittedQuestions[q.id];
          const isCorrect = isSubmitted && selectedOption === q.correctIndex;
          const isWrong = isSubmitted && selectedOption !== q.correctIndex;

          return (
            <div
              key={q.id}
              className="manuscript-card rounded-3xl p-6 sm:p-8 shadow-sm space-y-4 border-2 border-[#DFD2BC]"
            >
              {/* Question Header */}
              <div className="flex items-center justify-between text-xs text-[#7D6B5C]">
                <span className="font-mono font-bold bg-[#FAF4E8] px-3 py-1 rounded-md border border-[#E8DCC8]">
                  Question {idx + 1} of {QUIZ_QUESTIONS.length}
                </span>
                <span className="text-[#8C2F15] font-bold font-cinzel text-xs">
                  {linkedEra?.name}
                </span>
              </div>

              <h3 className="font-cinzel text-base sm:text-xl font-bold text-[#241711] leading-snug">
                {q.question}
              </h3>

              {/* Options */}
              <div className="space-y-2.5 pt-1">
                {q.options.map((option, optIdx) => {
                  const isThisSelected = selectedOption === optIdx;
                  const isThisCorrect = isSubmitted && optIdx === q.correctIndex;
                  const isThisWrongSelected = isSubmitted && isThisSelected && optIdx !== q.correctIndex;

                  let optionClasses = 'bg-[#FAF4E8] border-[#DFD2BC] text-[#3D291D] hover:bg-[#F2E8D5]';

                  if (isThisCorrect) {
                    optionClasses = 'bg-[#E8F5E9] border-[#2E7D32] text-[#1B5E20] font-semibold';
                  } else if (isThisWrongSelected) {
                    optionClasses = 'bg-[#FFEBEE] border-[#C62828] text-[#B71C1C]';
                  } else if (isThisSelected) {
                    optionClasses = 'bg-gradient-to-r from-[#2A1810] to-[#451B0E] border-[#C89D52] text-[#FDE68A] font-bold';
                  }

                  return (
                    <button
                      key={optIdx}
                      disabled={isSubmitted}
                      onClick={() => handleSelectOption(q.id, optIdx)}
                      className={`w-full text-left p-4 rounded-2xl border-2 text-xs sm:text-sm transition-all flex items-start gap-3.5 cursor-pointer ${optionClasses}`}
                    >
                      <span className="font-mono font-bold shrink-0 mt-0.5 text-xs">
                        {String.fromCharCode(65 + optIdx)}.
                      </span>
                      <span className="flex-1 leading-relaxed font-serif">{option}</span>
                      {isThisCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-[#2E7D32] shrink-0 mt-0.5" />
                      )}
                      {isThisWrongSelected && (
                        <XCircle className="w-5 h-5 text-[#C62828] shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Action / Explanation Box */}
              {!isSubmitted ? (
                <div className="pt-2 flex justify-end">
                  <button
                    disabled={selectedOption === undefined}
                    onClick={() => handleCheckAnswer(q.id)}
                    className="px-6 py-2.5 bg-gradient-to-r from-[#2A1810] to-[#451B0E] text-[#FDE68A] rounded-xl text-xs font-bold hover:from-[#1C0F0A] hover:to-[#38160B] disabled:opacity-40 disabled:cursor-not-allowed transition-all font-cinzel border border-[#C89D52] shadow-xs uppercase tracking-wider cursor-pointer"
                  >
                    Check Answer
                  </button>
                </div>
              ) : (
                <div
                  className={`p-5 rounded-2xl border-2 text-xs sm:text-sm space-y-2 leading-relaxed ${
                    isCorrect
                      ? 'bg-[#E8F5E9] border-[#2E7D32]/60 text-[#1B5E20]'
                      : 'bg-[#FFEBEE] border-[#C62828]/60 text-[#B71C1C]'
                  }`}
                >
                  <div className="font-bold flex items-center gap-2 font-cinzel text-sm">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-[#2E7D32]" />
                        <span>Correct Historical Deduction!</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 text-[#C62828]" />
                        <span>Revisiting the Historical Evidence</span>
                      </>
                    )}
                  </div>
                  <p className="font-serif text-[#38261A] leading-relaxed">{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
