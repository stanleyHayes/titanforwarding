import {createTheme} from "@mui/material";

const lightTheme = createTheme({
    typography: {
        fontFamily: 'TTSquares, EuclidCircularA, EuclidCircularB, Outfit, Eudoxus Sans, GoogleSans, Urbanist, Gilroy, Manrope'
    },
    palette: {
        mode: 'light',
        background: {
            default: "#f9fafb", // very soft gray
            paper: "#ffffff",
            sidebar: "#f1f3f5",
            transparent: "rgba(255,255,255,0.05)",
            overlay: "rgba(0,0,0,0.4)",
            primary: "#f0f4f8",
            colored: "#dce5f1"
        },
        primary: {
            main: "#1e3a8a", // deep blue
            contrastText: "#ffffff"
        },
        secondary: {
            main: "#ffd404",
            contrastText: "#ffffff"
        },
        success: {
            main: "#22c55e", // emerald green
            contrastText: "#ffffff"
        },
        warning: {
            main: "#facc15", // golden yellow
            contrastText: "#000000"
        },
        error: {
            main: "#ef4444", // soft red
            contrastText: "#ffffff"
        },
        info: {
            main: "#3b82f6", // sky blue
            contrastText: "#ffffff"
        },
        light: {
            primary: "rgba(30,58,138,0.1)", // light blue tint
            secondary: "rgba(225,109,24,0.1)",
            red: "rgba(239,68,68,0.15)",
            green: "rgba(34,197,94,0.15)",
            orange: "rgba(251,191,36,0.1)",
            default: "rgba(88,91,99,0.05)"
        },
        icon: {
            primary: "rgba(30,58,138,0.3)",
            secondary: "rgba(225,109,24,0.3)",
            red: "rgba(239,68,68,0.3)",
            green: "rgba(34,197,94,0.3)",
            border: "rgba(30,64,175,0.25)"
        },
        text: {
            primary: "#111827",
            secondary: "#4b5563",
            disabled: "#9ca3af"
        },
        colors: {
            accent: "#6366f1",
            red: "#ef4444",
            green: "#22c55e",
            orange: "#fb923c",
            blue: "#3b82f6",
            muted: "#e5e7eb"
        }
    },
    shape: {
        borderRadius: 0
    }
});

const darkTheme = createTheme({
    typography: {
        fontFamily: 'TTSquares, EuclidCircularA, EuclidCircularB, Outfit, Eudoxus Sans, GoogleSans, Urbanist, Gilroy, Manrope'
    },
    palette: {
        mode: 'dark',
        background: {
            default: "#0f172a", // deep slate
            paper: "#1e293b", // card background
            sidebar: "#111827",
            transparent: "rgba(0,0,0,0.05)",
            overlay: "rgba(0,0,0,0.6)",
            primary: "#1e293b",
            colored: "#334155"
        },
        primary: {
            main: "#3b82f6",
            contrastText: "#ffffff"
        },
        secondary: {
            main: "#ffd404",
            contrastText: "#ffffff"
        },
        success: {
            main: "#22c55e",
            contrastText: "#ffffff"
        },
        warning: {
            main: "#eab308",
            contrastText: "#000000"
        },
        error: {
            main: "#ef4444",
            contrastText: "#ffffff"
        },
        info: {
            main: "#60a5fa",
            contrastText: "#ffffff"
        },
        light: {
            primary: "rgba(96,165,250,0.1)",
            secondary: "rgba(249,115,22,0.05)",
            red: "rgba(239,68,68,0.1)",
            green: "rgba(34,197,94,0.1)",
            orange: "rgba(251,191,36,0.1)",
            default: "rgba(255,255,255,0.05)"
        },
        icon: {
            primary: "rgba(96,165,250,0.3)",
            secondary: "rgba(249,115,22,0.3)",
            red: "rgba(239,68,68,0.3)",
            green: "rgba(34,197,94,0.3)",
            border: "rgba(96,165,250,0.3)"
        },
        text: {
            primary: "#f8fafc",
            secondary: "#cbd5e1",
            disabled: "#64748b"
        },
        colors: {
            accent: "#8b5cf6",
            red: "#ef4444",
            green: "#22c55e",
            orange: "#fb923c",
            blue: "#3b82f6",
            muted: "#334155"
        }
    },
    shape: {
        borderRadius: 0
    }
});

export const THEMES = {darkTheme, lightTheme};