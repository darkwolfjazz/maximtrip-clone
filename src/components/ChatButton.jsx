const ChatButton = () => (
  <button
    className="fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-700 shadow-xl rounded-full w-16 h-16 flex items-center justify-center transition-colors"
    aria-label="Chat"
  >
    {/* SVG icon for chat/message */}
    <svg
      fill="none"
      stroke="white"
      strokeWidth={2.2}
      viewBox="0 0 24 24"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7
        8.38 8.38 0 01-3.8-.9l-4.2.9.9-4.2a8.38 8.38 0 01-.9-3.8
        8.5 8.5 0 014.7-7.6A8.38 8.38 0 0112.5 3a8.5 8.5 0 018.5 8.5z"
      />
    </svg>
  </button>
);

export default ChatButton;
