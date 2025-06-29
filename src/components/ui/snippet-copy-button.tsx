import React, { useState } from "react";

export default function SnippetCopyButton() {
    const [copied, setCopied] = useState(false);
    // Copy handler with fallback for mobile Safari and older browsers
    const handleCopy = async () => {
        const text = "npx irtesaam";
        let success = false;
        if (typeof window !== "undefined" && window.navigator) {
            try {
                if (window.navigator.clipboard && window.isSecureContext) {
                    await window.navigator.clipboard.writeText(text);
                    success = true;
                } else {
                    // Fallback for iOS Safari and older browsers
                    const textarea = document.createElement("textarea");
                    textarea.value = text;
                    textarea.style.position = "fixed";
                    textarea.style.opacity = "0";
                    document.body.appendChild(textarea);
                    textarea.focus();
                    textarea.select();
                    try {
                        success = document.execCommand("copy");
                    } catch (err) {
                        success = false;
                    }
                    document.body.removeChild(textarea);
                }
            } catch (err) {
                success = false;
            }
        }
        if (success) {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        }
    };
    return (
        <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1 px-3 py-3 rounded-r-lg bg-gray-200 dark:bg-slate-900 border border-l-0 border-gray-200 dark:border-slate-800 hover:bg-gray-300 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 w-auto min-w-[60px] justify-center"
            aria-label="Copy code"
            type="button"
            style={{ minWidth: '40px' }}
        >
            {copied ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className='text-green-500'>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className='text-gray-500 dark:text-gray-300'>
                    <rect x="9" y="9" width="13" height="13" rx="2" strokeWidth="2" />
                    <rect x="3" y="3" width="13" height="13" rx="2" strokeWidth="2" />
                </svg>
            )}
        </button>
    );
}
