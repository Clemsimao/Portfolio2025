"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    if (!mounted) {
        return (
            <div className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center ml-4">
                <Sun className="w-5 h-5 text-gray-600" />
            </div>
        );
    }

    const icons = {
        light: <Sun className="w-5 h-5" />,
        dark: <Moon className="w-5 h-5" />,
        system: <Monitor className="w-5 h-5" />,
    };

    return (
        <div className="relative ml-4 z-50" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center w-10 h-10 border border-gray-500 rounded-full bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors"
                aria-label="Changer le thème"
            >
                {theme === "system" ? icons.system : theme === "dark" ? icons.dark : icons.light}
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden flex flex-col z-50">
                    <button
                        onClick={() => {
                            setTheme("light");
                            setIsOpen(false);
                        }}
                        className={`flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors text-sm font-Ovo ${theme === "light" ? "text-blue-600 bg-blue-50" : "text-gray-700"
                            }`}
                    >
                        <Sun className="w-4 h-4" />
                        Clair
                    </button>
                    <button
                        onClick={() => {
                            setTheme("dark");
                            setIsOpen(false);
                        }}
                        className={`flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors text-sm font-Ovo ${theme === "dark" ? "text-blue-600 bg-blue-50" : "text-gray-700"
                            }`}
                    >
                        <Moon className="w-4 h-4" />
                        Sombre
                    </button>
                    <button
                        onClick={() => {
                            setTheme("system");
                            setIsOpen(false);
                        }}
                        className={`flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors text-sm font-Ovo ${theme === "system" ? "text-blue-600 bg-blue-50" : "text-gray-700"
                            }`}
                    >
                        <Monitor className="w-4 h-4" />
                        Système
                    </button>
                </div>
            )}
        </div>
    );
}
