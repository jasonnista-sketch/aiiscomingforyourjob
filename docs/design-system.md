# Design System Reference

## Color Palette

### Backgrounds
```
Page background:     #060918
Card background:     #0b0f1a
Card border:         #151a28
Subtle gradient:     linear-gradient(135deg, #0d111e, #111628)
Built/active bg:     #0d2818
```

### Text
```
Headings (white):    #ffffff
Body text:           #d4dae6
Secondary text:      #8891a8
Muted/labels:        #5a6380
```

### Brand
```
Primary red:         #FF3E55  (logo, danger, "most at risk")
```

### Risk Score Colors
```
Very Low (≤15):      #10b981
Low (≤30):           #34d399
Moderate (≤45):      #fbbf24
High (≤60):          #f97316
Very High (>60):     #ef4444
```

### Industry Accent Colors
Each industry has an accent color used for labels, borders, hover states, and meter bars:
```
Healthcare:          #00e5a0   (green)
Legal:               #ffb800   (amber)
Finance:             #8b5cf6   (purple)
Creative:            #ff6b6b   (coral)
Technology:          #00d2ff   (cyan)
Education:           #e056a0   (pink)
Construction:        #f97316   (orange)
Real Estate:         #10b981   (emerald)
Transportation:      #06b6d4   (teal)
Government:          #6366f1   (indigo)
Hospitality:         #f59e0b   (yellow)
Retail:              #ec4899   (magenta)
Manufacturing:       #a3a3a3   (gray)
Science:             #22d3ee   (light cyan)
HR & Admin:          #a78bfa   (lavender)
```

## Typography

### Font Families
```
Headings:    'Outfit', sans-serif    — Bold, modern, tight letter-spacing
Data/labels: 'DM Mono', monospace   — Scores, dates, categories, uppercase labels
Body:        System sans-serif       — Regular paragraph text
```

### Heading Styles
```
Page title (h1):   font-size: clamp(28px, 4vw, 42px), weight: 800, letter-spacing: -1.5px
Section head (h2): font-size: 22px, weight: 700, letter-spacing: -0.5px
Card title:        font-size: 15px, weight: 700
```

### Label Style (DM Mono)
```
font-size: 11px, letter-spacing: 2px, text-transform: uppercase
color: industry accent or #5a6380
```

## Component Patterns

### Card
```
background: #0b0f1a
border: 1px solid #151a28
border-radius: 16px
padding: 24px 28px
```

### Meter Bar (risk/augment scores)
```
Track: height 6px, background #151a28, border-radius 3px
Fill: linear-gradient with risk color
Animation: CSS class "meter-bar" handles width animation
```

### Key Insight Callout
```
background: linear-gradient(135deg, #0d111e, #111628)
border: 1px solid #1e2436
border-left: 3px solid {industry.accent}
border-radius: 16px
padding: 24px 28px
```

### Tool Card (clickable link)
```
Uses .tool-link class from globals.css
Hover: border-color shifts to industry accent
CSS variable --ac set to industry.accent
```

### Skill Pill
```
Uses .pill class from globals.css
color: #8891a8
```

### AI Capability Breakdown Section
Three subsections with emoji headers:
```
⚡ What AI Has Mastered       — Things AI does better than humans
🔄 What AI Is Improving On    — AI getting better, humans still lead
🧠 What [Role] Will Always Do — Irreplaceably human
```
Each item: title (bold) + description paragraph

### FAQ Section
Question as h3, answer as paragraph. Good for SEO structured data.

### Related Careers Grid
```
Grid of 3-4 cards linking to other job pages
Shows: industry icon, industry name, job title, risk %, career boost %
```

## Animations
```
fadeUp: translateY(12px) → translateY(0), opacity 0 → 1
Applied with staggered delays: 0s, .08s, .15s, .22s, .28s, .34s
```

## Responsive Notes
- Risk meters: 2-column grid on desktop, stack on mobile
- Tool cards: auto-fill grid with minmax(240px, 1fr)
- Page title uses clamp() for fluid sizing
- Max content width controlled by container in layout
