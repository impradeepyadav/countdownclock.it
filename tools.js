// ============================================================
// ⭐ NAYA TOOL ADD KARNE KE LIYE SIRF YAHI FILE EDIT KARO
// ============================================================
// Format:
//     { label: "Tool Name", url: "/tool-url" },
//
// Example — "Sleep Timer" add karna hai:
//     { label: "Sleep Timer", url: "/sleep-timer" },
//
// Rules:
//   1. URL hamesha "/" se shuru ho
//   2. Har line ke end me comma (,) ho
//   3. Double quotes (") use karo
// ============================================================

const TOOLS = [
  { label: "Timer",                url: "/timer" },
  { label: "Countdown Timer",      url: "/countdown-timer" },
  { label: "Stopwatch",            url: "/stopwatch" },
  { label: "Alarm Clock",          url: "/alarm-clock" },
  { label: "Online Clock",         url: "/online-clock" },
  { label: "World Clock",          url: "/world-clock" },
  { label: "Pomodoro Timer",       url: "/pomodoro-timer" },
  { label: "5 Minute Timer",       url: "/5-minute-timer" },
  { label: "10 Minute Timer",      url: "/10-minute-timer" },
  { label: "15 Minute Timer",      url: "/15-minute-timer" },
  { label: "30 Minute Timer",      url: "/30-minute-timer" },
  { label: "1 Hour Timer",         url: "/1-hour-timer" },
  { label: "Interval Timer",       url: "/interval-timer" },
  { label: "Digital Clock",        url: "/digital-clock" },
  { label: "Egg Timer",            url: "/egg-timer" },
  { label: "Time Zone Converter",  url: "/time-zone-converter" },
  { label: "Countdown to Date",    url: "/countdown-to-date" },
  { label: "Tabata Timer",         url: "/tabata-timer" },
  { label: "Kitchen Timer",        url: "/kitchen-timer" },
  { label: "Metronome",            url: "/metronome" },

  // 👇👇👇 NAYE TOOLS YAHAN ADD KARO 👇👇👇
  // { label: "Sleep Timer",  url: "/sleep-timer" },
  // { label: "Study Timer",  url: "/study-timer" },
];

// ---------- Auto-render dropdown (KOI CHANGE NAHI KARNA) ----------
function renderTools() {
  const container = document.getElementById('toolsDropdown');
  if (!container) return;
  container.innerHTML = TOOLS.map(t =>
    `<a href="${t.url}">${t.label}</a>`
  ).join('');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderTools);
} else {
  renderTools();
}
