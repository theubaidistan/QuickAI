import React, { useState } from "react";

const TermsModal = () => {
  const [accepted, setAccepted] = useState(false); // default: show modal

  const handleAccept = () => {
    setAccepted(true); // hide modal when accepted
  };

  if (accepted) return null; // hide modal

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-lg shadow-lg text-sm md:text-base overflow-y-auto max-h-[90vh]">
        <h2 className="text-xl font-semibold mb-4 text-red-700">
          <center>⚠️Terms And Conditions:</center>
          <center>AI Ethics & Islamic Values Notice.</center>
        </h2>
        <p className="mb-3">
          By using this AI service, you agree to uphold integrity and avoid
          actions that violate Islamic principles. This includes, but is not
          limited to:
        </p>
        <ul className="list-disc list-inside mb-3 space-y-1">
          <li>Creating or spreading false information (fitnah)</li>
          <li>
            Generating or sharing inappropriate, immodest, or offensive content
          </li>
          <li>Using AI to deceive, manipulate, scam, or misguide others</li>
          <li>Promoting haram content (e.g. alcohol, gambling, usury)</li>
          <li>Disrespecting sacred values, figures, or religious beliefs</li>
          <li>
            Any action contradicting Islamic ethics or causing harm to others
          </li>
        </ul>
        <p className="mb-3">
          You are reminded that every action is accountable before Allah ﷻ.
          Please use this AI service with sincerity, responsibility, and respect
          for Islamic values.
        </p>
        <p className="italic text-gray-700 mb-4">
          “And do not pursue that of which you have no knowledge. Indeed, the
          hearing, the sight, and the heart—about all those [one] will be
          questioned.” <br />
          <span className="block text-right">— Surah Al-Isra (17:36)</span>
        </p>
        <button
          onClick={handleAccept}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg w-full"
        >
          I Understand & Accept
        </button>
      </div>
    </div>
  );
};

export default TermsModal;
