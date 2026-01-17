/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
	  extend: {
		colors: {
		  border: "hsl(var(--border))",
		  input: "hsl(var(--input))",
		  ring: "hsl(var(--ring))",
		  background: "hsl(var(--background))",
		  foreground: "hsl(var(--foreground))",
		  primary: {
			DEFAULT: "hsl(var(--primary))",
			foreground: "hsl(var(--primary-foreground))",
		  },
		  secondary: {
			DEFAULT: "hsl(var(--secondary))",
			foreground: "hsl(var(--secondary-foreground))",
		  },
		  destructive: {
			DEFAULT: "hsl(var(--destructive))",
			foreground: "hsl(var(--destructive-foreground))",
		  },
		  muted: {
			DEFAULT: "hsl(var(--muted))",
			foreground: "hsl(var(--muted-foreground))",
		  },
		  accent: {
			DEFAULT: "hsl(var(--accent))",
			foreground: "hsl(var(--accent-foreground))",
		  },
		  popover: {
			DEFAULT: "hsl(var(--popover))",
			foreground: "hsl(var(--popover-foreground))",
		  },
		  card: {
			DEFAULT: "hsl(var(--card))",
			foreground: "hsl(var(--card-foreground))",
		  },
  
		  // ViralSpoon Brand Colors
		  viralspoon: {
			purple: "#6D6DD8",
			"purple-400": "#8F8FE8",
			"purple-600": "#5555B8",
			coral: "#E77351",
			"coral-light": "#FF9471",
			"coral-dark": "#D75531",
		  },
		},
  
		backgroundImage: {
		  // Existing gradients
		  "gradient-viral": "linear-gradient(135deg, #6D6DD8 0%, #E77351 100%)",
		  "gradient-viral-reverse":
			"linear-gradient(135deg, #E77351 0%, #6D6DD8 100%)",
		  "gradient-purple": "linear-gradient(135deg, #5555B8 0%, #8F8FE8 100%)",
		  "gradient-coral": "linear-gradient(135deg, #D75531 0%, #FF9471 100%)",
		  "gradient-viralspoon-vibrant":
			"linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F97316 100%)",
  
		  // ✅ NEW: Premium / Special Actions gradient (matches your token)
		  // Use as: bg-viralspoon-premium
		  "viralspoon-premium":
			"linear-gradient(to right, #7c3aed, #ec4899, #f97316)",
  
		  // ✅ NEW: Dark mode variant (if you want slightly different stops)
		  // Use as: dark:bg-viralspoon-premium-dark
		  "viralspoon-premium-dark":
			"linear-gradient(to right, #a855f7, #f472b6, #fb923c)",
		},
  
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		  xl: "1.5rem",
		  "2xl": "2rem",
		  "3xl": "3rem",
		},
  
		boxShadow: {
		  "glow-purple": "0 0 20px rgba(109, 109, 216, 0.3)",
		  "glow-coral": "0 0 20px rgba(231, 115, 81, 0.3)",
		  "glow-viral":
			"0 0 30px rgba(109, 109, 216, 0.2), 0 0 60px rgba(231, 115, 81, 0.1)",
  
		  // ✅ NEW: Premium shadows to match your token intent
		  // Use as: shadow-viralspoon-premium / hover:shadow-viralspoon-premium-hover
		  "viralspoon-premium": "0 10px 25px -10px rgba(168, 85, 247, 0.35)",
		  "viralspoon-premium-hover": "0 18px 45px -18px rgba(236, 72, 153, 0.45)",
		  "viralspoon-premium-dark": "0 10px 25px -10px rgba(192, 132, 252, 0.25)",
		},
  
		animation: {
		  float: "float 3s ease-in-out infinite",
		  glow: "glow 2s ease-in-out infinite alternate",
		},
  
		keyframes: {
		  float: {
			"0%, 100%": { transform: "translateY(0px)" },
			"50%": { transform: "translateY(-10px)" },
		  },
		  glow: {
			from: { boxShadow: "0 0 10px rgba(109, 109, 216, 0.2)" },
			to: {
			  boxShadow:
				"0 0 20px rgba(109, 109, 216, 0.4), 0 0 30px rgba(231, 115, 81, 0.2)",
			},
		  },
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  }
  