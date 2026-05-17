import { icons } from "lucide-react";


export const codeExample = {
    "App.jsx": `
    import { useState } from "react";
    import { CodeFlow } from "@codeflow/ai";

    function App() {
    const [code, setCode] = useState("");

    const handleAICompletion = async () => {
        const suggestion = await CodeFlow.complete(code);
        setCode(suggestion);
    };

    return (
        <div className="app">
        <CodeEditor 
            onChange={setCode} 
            onAI={handleAICompletion} 
        />
        </div>
    );
    }
    
    `,
    "Hero.jsx": `
    import { useState } from "react";
    import { CodeFlow } from "@codeflow/ai";

    export default function SimpleHero() {
    const [code, setCode] = useState("");

    const handleAICompletion = async () => {
        const suggestion = await CodeFlow.complete(code);
        setCode(suggestion);
    };

    return (
        <div style={{ padding: "60px 20px", textAlign: "center", background: "#111", color: "#fff" }}>
        {/* Hero Headline */}
        <h1>Generate Code Instantly</h1>
        <p>Try our AI-powered code autocomplete editor below.</p>
        
        {/* Editor Box */}
        <div style={{ marginTop: "30px", border: "1px solid #333", padding: "20px", borderRadius: "8px" }}>
            <button onClick={handleAICompletion} style={{ marginBottom: "10px", padding: "5px 10px" }}>
            ⚡ Ask AI
            </button>
            
            <CodeEditor 
            onChange={setCode} 
            onAI={handleAICompletion} 
            />
        </div>
        </div>
    );
        }
        
    `,
    "Navbar.jsx": `
    import React from "react";

    export default function Navbar() {
    return (
        <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        background: "#111",
        borderBottom: "1px solid #222",
        color: "#fff",
        fontFamily: "sans-serif"
        }}>
        {/* Brand Logo */}
        <div style={{ fontWeight: "bold", fontSize: "1.2rem", cursor: "pointer" }}>
            ⚡ CodeFlow
        </div>

        {/* Navigation Links */}
        <div style={{ display: "flex", gap: "20px" }}>
            <a href="#features" style={{ color: "#aaa", textDecoration: "none" }}>Features</a>
            <a href="#docs" style={{ color: "#aaa", textDecoration: "none" }}>Docs</a>
            <a href="#pricing" style={{ color: "#aaa", textDecoration: "none" }}>Pricing</a>
        </div>

        {/* CTA Button */}
        <button style={{
            background: "#0070f3",
            color: "#fff",
            border: "none",
            padding: "8px 16px",
            borderRadius: "4px",
            fontWeight: "600",
            cursor: "pointer"
        }}>
            Sign Up
        </button>
        </nav>
    );
    }
    
    `
};

export const floatingCards = {
    "App.jsx": {
        bgColor: "bg-blue-500/20",
        iconColor: "text-blue-400",
        textColor: "text-blue-200",
        contentColor: "text-blue-300",
        icon: "AI",
        title: "AI Code Generation",
        description: "Generate code snippets, functions, or even entire files with our powerful AI engine. Just describe what you need and let the AI do the rest!"
    },
    "Hero.jsx": {
        bgColor: "bg-green-500/20",
        iconColor: "text-green-400",
        textColor: "text-green-200",
        contentColor: "text-green-300",
        icon: "Sparkles",
        title: "Instant Code Generation",
        description: "Create stunning UI components in seconds with our intuitive code editor and AI-powered suggestions."
    },
    "Navbar.jsx": {
        bgColor: "bg-purple-500/20",
        iconColor: "text-purple-400",
        textColor: "text-purple-200",
        contentColor: "text-purple-300",
        icon: "Menu",
        title: "Seamless Navigation",
        description: "Build responsive navigation bars that adapt to any screen size with our pre-designed components."
    }
}