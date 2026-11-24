'use strict';

// =============================================================================
// 1. CONSTANTS & SEED DATA
// =============================================================================

const APP_VERSION = '1.0.0';
const STORAGE_KEY = 'hbtu_manch_data';
const APP_TODAY_ISO = '2026-11-24';

const SEED_DATA = {
  councils: [
    {
      id: 'usac',
      name: 'University Student Activity Council',
      abbr: 'USAC',
      type: 'council',
      description: 'Apex body governing all student clubs and activities at HBTU Kanpur.',
      head: 'Aditya Verma',
      email: 'usac@hbtu.ac.in',
      established: 2001,
      memberCount: 12,
    },
    {
      id: 'tsc',
      name: 'Technical Students Council',
      abbr: 'TSC',
      type: 'council',
      description: 'Oversees all technical clubs, hackathons, and skill-development initiatives.',
      head: 'Priya Sharma',
      email: 'tsc@hbtu.ac.in',
      established: 1998,
      memberCount: 15,
    },
    {
      id: 'csc',
      name: 'Cultural Students Council',
      abbr: 'CSC',
      type: 'council',
      description: 'Coordinates cultural fests, literary events, and performing arts across campus.',
      head: 'Rohan Mishra',
      email: 'csc@hbtu.ac.in',
      established: 2003,
      memberCount: 10,
    },
  ],

  clubs: [
    {
      id: 'robotics',
      name: 'Robotics Club',
      abbr: 'RC',
      council: 'tsc',
      type: 'technical',
      description: 'Autonomous systems, embedded electronics, and competitive robotics.',
      head: 'Sahil Agarwal',
      headRoll: '2200123',
      email: 'robotics@hbtu.ac.in',
      memberCount: 34,
      tags: ['robotics', 'IoT', 'embedded'],
    },
    {
      id: 'coding',
      name: 'Coding Club',
      abbr: 'CC',
      council: 'tsc',
      type: 'technical',
      description: 'Competitive programming, open-source contributions, and dev sprints.',
      head: 'Nisha Pandey',
      headRoll: '2200456',
      email: 'coding@hbtu.ac.in',
      memberCount: 52,
      tags: ['CP', 'web', 'DSA'],
    },
    {
      id: 'design',
      name: 'Design Studio',
      abbr: 'DS',
      council: 'csc',
      type: 'creative',
      description: 'Graphic design, UI/UX workshops, and campus visual identity.',
      head: 'Aryan Singh',
      headRoll: '2200789',
      email: 'design@hbtu.ac.in',
      memberCount: 28,
      tags: ['design', 'UI/UX', 'branding'],
    },
    {
      id: 'media',
      name: 'Media & Photography Club',
      abbr: 'MPC',
      council: 'csc',
      type: 'creative',
      description: 'Campus journalism, photography, videography, and content production.',
      head: 'Kavya Gupta',
      headRoll: '2201011',
      email: 'media@hbtu.ac.in',
      memberCount: 22,
      tags: ['photography', 'video', 'journalism'],
    },
    {
      id: 'entrepreneurship',
      name: 'Entrepreneurship Cell',
      abbr: 'E-Cell',
      council: 'usac',
      type: 'entrepreneurship',
      description: 'Startup mentorship, ideathons, and industry connect for student founders.',
      head: 'Ravi Tiwari',
      headRoll: '2201213',
      email: 'ecell@hbtu.ac.in',
      memberCount: 40,
      tags: ['startup', 'business', 'funding'],
    },
    {
      id: 'nss',
      name: 'NSS Unit',
      abbr: 'NSS',
      council: 'usac',
      type: 'social',
      description: 'National Service Scheme — community outreach, blood drives, and social campaigns.',
      head: 'Anjali Yadav',
      headRoll: '2201415',
      email: 'nss@hbtu.ac.in',
      memberCount: 80,
      tags: ['social', 'volunteer', 'outreach'],
    },
    {
      id: 'music',
      name: 'Music Society',
      abbr: 'MS',
      council: 'csc',
      type: 'cultural',
      description: 'Classical and contemporary music, college band, and annual Swar Sandhya.',
      head: 'Deepak Khanna',
      headRoll: '2201617',
      email: 'music@hbtu.ac.in',
      memberCount: 30,
      tags: ['music', 'band', 'classical'],
    },
    {
      id: 'quiz',
      name: 'Quiz Club',
      abbr: 'QC',
      council: 'tsc',
      type: 'technical',
      description: 'Inter-college quizzes, trivia nights, and knowledge olympiads.',
      head: 'Meera Joshi',
      headRoll: '2201819',
      email: 'quiz@hbtu.ac.in',
      memberCount: 18,
      tags: ['quiz', 'trivia', 'GK'],
    },
  ],

  events: [
    {
      id: 'evt_robo_orient',
      clubId: 'robotics',
      title: 'Robotics Club Orientation 2026',
      type: 'orientation',
      date: '2026-11-30',
      time: '10:00',
      venue: 'Seminar Hall, Block C',
      description:
        "Welcome session for new members interested in autonomous systems and competitive robotics. Meet the core team, see last year's bots, and learn how to get involved.",
      registrationOpen: true,
      registrationCount: 47,
      maxCapacity: 100,
      openCalls: { publicity: false, ideas: false, deals: false },
      status: 'upcoming',
      feedbackOpen: false,
    },
    {
      id: 'evt_ecell_orient',
      clubId: 'entrepreneurship',
      title: 'E-Cell New Member Orientation',
      type: 'orientation',
      date: '2026-12-05',
      time: '11:00',
      venue: 'Innovation Hub, Main Block',
      description:
        'An introductory session by Entrepreneurship Cell covering startup culture, funding basics, and upcoming ideathon opportunities. Open to all years.',
      registrationOpen: true,
      registrationCount: 62,
      maxCapacity: 120,
      openCalls: { publicity: false, ideas: false, deals: false },
      status: 'upcoming',
      feedbackOpen: false,
    },
    {
      id: 'evt_coding_ws',
      clubId: 'coding',
      title: 'Git & Open Source Sprint',
      type: 'workshop',
      date: '2026-12-13',
      time: '09:30',
      venue: 'Lab 204, CS Department',
      description:
        'Hands-on workshop on Git version control, GitHub workflows, and contributing to open-source projects. Participants will make their first OSS pull request by end of day.',
      registrationOpen: true,
      registrationCount: 38,
      maxCapacity: 60,
      openCalls: { publicity: true, ideas: true, deals: false },
      status: 'upcoming',
      feedbackOpen: false,
    },
    {
      id: 'evt_design_ws',
      clubId: 'design',
      title: 'Figma Essentials',
      type: 'workshop',
      date: '2026-12-20',
      time: '14:00',
      venue: 'Design Lab, Block B',
      description:
        'Beginner-to-intermediate Figma workshop covering components, auto-layout, prototyping, and handoff to developers. Bring your own laptop. No design experience needed.',
      registrationOpen: true,
      registrationCount: 25,
      maxCapacity: 40,
      openCalls: { publicity: true, ideas: true, deals: false },
      status: 'upcoming',
      feedbackOpen: false,
    },
    {
      id: 'evt_quiz_comp',
      clubId: 'quiz',
      title: 'Campus Quiz League Season 3',
      type: 'competition',
      date: '2027-01-10',
      time: '10:00',
      venue: 'Main Auditorium',
      description:
        'The biggest inter-departmental quiz tournament of the year — 6 rounds spanning science, tech, history, pop-culture, and current affairs. Teams of 3.',
      registrationOpen: true,
      registrationCount: 54,
      maxCapacity: 150,
      openCalls: { publicity: true, ideas: false, deals: true },
      status: 'upcoming',
      feedbackOpen: false,
    },
    {
      id: 'evt_swar',
      clubId: 'music',
      title: 'Swar Sandhya 2027',
      type: 'fest',
      date: '2027-02-14',
      time: '18:00',
      venue: 'Open Air Theatre, HBTU Campus',
      description:
        "HBTU's annual music evening featuring classical ragas, college band performances, and guest artists. The grandest cultural night of the academic calendar.",
      registrationOpen: true,
      registrationCount: 210,
      maxCapacity: 500,
      openCalls: { publicity: true, ideas: true, deals: true },
      status: 'upcoming',
      feedbackOpen: false,
    },
    {
      id: 'evt_blood',
      clubId: 'nss',
      title: 'Blood Donation Drive — Nov 2026',
      type: 'social',
      date: '2026-11-10',
      time: '09:00',
      venue: 'Ground Floor Lobby, Admin Block',
      description:
        "Annual campus blood donation camp in partnership with Lala Lajpat Rai Hospital, Kanpur. 94 units collected last year — let's beat that record!",
      registrationOpen: false,
      registrationCount: 112,
      maxCapacity: 150,
      openCalls: { publicity: false, ideas: false, deals: false },
      status: 'completed',
      feedbackOpen: false,
    },
    {
      id: 'evt_robowar',
      clubId: 'robotics',
      title: 'Robowar 2026',
      type: 'competition',
      date: '2026-10-18',
      time: '10:00',
      venue: 'Sports Ground, HBTU Campus',
      description:
        'Inter-college combat robotics championship. 24 teams. 4 categories: Sumo, Line-follower, Maze-solver, and Freestyle. Supported by TSC and USAC.',
      registrationOpen: false,
      registrationCount: 148,
      maxCapacity: 200,
      openCalls: { publicity: false, ideas: false, deals: false },
      status: 'completed',
      feedbackOpen: false,
    },
    {
      id: 'evt_ideathon',
      clubId: 'entrepreneurship',
      title: 'Ideathon 2026',
      type: 'competition',
      date: '2026-11-22',
      time: '08:00',
      venue: 'Innovation Hub & Online (Hybrid)',
      description:
        '48-hour idea-to-pitch hackathon for student entrepreneurs. Teams pitch to a jury of VCs and alumni. Cash prizes, mentorship slots, and incubation opportunities.',
      registrationOpen: false,
      registrationCount: 96,
      maxCapacity: 100,
      openCalls: { publicity: false, ideas: false, deals: false },
      status: 'ongoing',
      feedbackOpen: true,
    },
    {
      id: 'evt_photo',
      clubId: 'media',
      title: 'Campus Photo Walk',
      type: 'social',
      date: '2026-12-07',
      time: '07:00',
      venue: 'Starts at Main Gate, HBTU',
      description:
        'Early-morning photography walk through campus — golden hour portraits, architecture, candid street-style shots, and a quick post-processing session back at the club room.',
      registrationOpen: true,
      registrationCount: 19,
      maxCapacity: 30,
      openCalls: { publicity: false, ideas: false, deals: false },
      status: 'upcoming',
      feedbackOpen: false,
    },
  ],

  students: [
    {
      id: 'stu001',
      name: 'Aarav Mehta',
      roll: '2300101',
      branch: 'CSE',
      year: 2,
      email: 'aarav@hbtu.ac.in',
      engagementPoints: 120,
      impactPoints: 30,
      registrations: ['evt_robowar', 'evt_blood'],
      feedback: ['evt_robowar', 'evt_blood'],
      contributions: [
        { eventId: 'evt_robowar', type: 'publicity', status: 'selected', note: 'Campus poster & reel campaign' },
      ],
    },
    {
      id: 'stu002',
      name: 'Priyanka Soni',
      roll: '2300202',
      branch: 'ME',
      year: 2,
      email: 'priyanka@hbtu.ac.in',
      engagementPoints: 85,
      impactPoints: 15,
      registrations: ['evt_blood'],
      feedback: ['evt_blood'],
      contributions: [],
    },
    {
      id: 'stu003',
      name: 'Tanmay Dubey',
      roll: '2300303',
      branch: 'ECE',
      year: 1,
      email: 'tanmay@hbtu.ac.in',
      engagementPoints: 40,
      impactPoints: 0,
      registrations: [],
      feedback: [],
      contributions: [],
    },
  ],

  submissions: [],
  registrations: [],
  feedbackLogs: [],
};

// =============================================================================
// 2. STATE & PERSISTENCE
// =============================================================================

let appState = {
  role: 'student',
  activeClubId: 'robotics',
  activeStudent: 'stu001',
  activeNav: 'timeline',
  data: null,
};

let activeTimelineFilter = 'all';
let activeClubsTab = 'councils';
let activeOpenCallFilter = 'all';
let activeSubmissionEventFilter = 'all';
let activeSubmissionTypeFilter = 'all';
let activeStudentId = 'stu001';
let _feedbackRating = 0;
let _toastTimer = null;

function cloneSeed() {
  return JSON.parse(JSON.stringify(SEED_DATA));
}

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.events) && Array.isArray(parsed.clubs)) {
        const seed = cloneSeed();
        appState.data = {
          councils: Array.isArray(parsed.councils) ? parsed.councils : seed.councils,
          clubs: parsed.clubs,
          events: parsed.events,
          students: Array.isArray(parsed.students) ? parsed.students : seed.students,
          submissions: Array.isArray(parsed.submissions) ? parsed.submissions : [],
          registrations: Array.isArray(parsed.registrations) ? parsed.registrations : [],
          feedbackLogs: Array.isArray(parsed.feedbackLogs) ? parsed.feedbackLogs : [],
        };
        activeStudentId = appState.data.students[0]?.id || 'stu001';
        appState.activeStudent = activeStudentId;
        return;
      }
    }
  } catch (e) {
    console.warn('[HBTU Manch] Failed to load stored data, using seed.', e);
  }
  appState.data = cloneSeed();
  activeStudentId = 'stu001';
  appState.activeStudent = 'stu001';
}

function saveData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState.data));
  } catch (e) {
    console.error('[HBTU Manch] Failed to save data.', e);
  }
}

function resetData() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (_) {}

  appState.data = cloneSeed();
  appState.role = 'student';
  appState.activeClubId = 'robotics';
  appState.activeStudent = 'stu001';
  appState.activeNav = 'timeline';
  activeStudentId = 'stu001';
  activeTimelineFilter = 'all';
  activeClubsTab = 'councils';
  activeOpenCallFilter = 'all';
  activeSubmissionEventFilter = 'all';
  activeSubmissionTypeFilter = 'all';

  syncRoleSwitcherUI();
  renderSidebar();
  navigate('timeline');
  showToast('Demo data reset to initial HBTU seed state.', 'info');
}

// =============================================================================
// 3. UTILITIES & UI CHROME
// =============================================================================

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function fmtDate(iso) {
  if (!iso) return '';
  const d = new Date(iso + 'T00:00:00');
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function fmtTime(t) {
  if (!t) return '';
  const [hStr, mStr] = t.split(':');
  let h = parseInt(hStr, 10);
  if (Number.isNaN(h)) return t;
  const m = mStr || '00';
  const period = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  return `${h}:${m} ${period}`;
}

function relativeDay(iso) {
  if (!iso) return '';
  const base = new Date(APP_TODAY_ISO + 'T00:00:00');
  const target = new Date(iso + 'T00:00:00');
  const diffDays = Math.round((target - base) / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Tomorrow';
  if (diffDays === -1) return 'Yesterday';
  if (diffDays > 1) return `In ${diffDays} days`;
  return `${Math.abs(diffDays)} days ago`;
}

function showToast(msg, type = 'success') {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.dataset.type = type;
  toast.classList.remove('error');
  if (type === 'error') toast.classList.add('error');
  toast.hidden = false;
  toast.classList.add('show', 'toast-visible');

  if (_toastTimer) clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => {
    toast.classList.remove('show', 'toast-visible');
    setTimeout(() => {
      toast.hidden = true;
    }, 250);
  }, 3000);
}

function openModal(html) {
  const overlay = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');
  if (!overlay || !body) return;

  body.innerHTML = html;
  overlay.hidden = false;
  overlay.classList.add('visible');

  const focusable = overlay.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  if (focusable.length) focusable[0].focus();
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');
  if (!overlay || !body) return;
  overlay.classList.remove('visible');
  overlay.hidden = true;
  body.innerHTML = '';
}

// =============================================================================
// 4. NAVIGATION & ROLE SWITCHER
// =============================================================================

const NAV_ITEMS = {
  student: [
    { id: 'timeline', label: 'Timeline', icon: '📅' },
    { id: 'clubs', label: 'Clubs & Councils', icon: '🏛️' },
    { id: 'opencalls', label: 'Open Calls', icon: '📢' },
    { id: 'profile', label: 'My Profile', icon: '👤' },
  ],
  clubhead: [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'myevents', label: 'My Events', icon: '📅' },
    { id: 'submissions', label: 'Submissions', icon: '📥' },
    { id: 'induction', label: 'Induction Shortlist', icon: '🎯' },
  ],
  admin: [
    { id: 'overview', label: 'Overview', icon: '🗺️' },
    { id: 'allclubs', label: 'All Clubs', icon: '🏛️' },
    { id: 'clashes', label: 'Schedule Clashes', icon: '⚠️' },
    { id: 'leadership', label: 'Leadership', icon: '🔄' },
  ],
};

function syncRoleSwitcherUI() {
  document.querySelectorAll('.role-btn').forEach(btn => {
    const isActive = btn.dataset.role === appState.role;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });

  const clubSelect = document.getElementById('club-head-select');
  if (clubSelect) {
    const isClubHead = appState.role === 'clubhead';
    clubSelect.hidden = !isClubHead;
    clubSelect.style.display = isClubHead ? 'inline-block' : 'none';
    clubSelect.value = appState.activeClubId;
  }
}

function renderSidebar() {
  const list = document.getElementById('nav-list');
  if (!list) return;

  const items = NAV_ITEMS[appState.role] || [];
  list.innerHTML = items
    .map(item => {
      const isActive = appState.activeNav === item.id;
      return `
        <li class="nav-item${isActive ? ' nav-item--active' : ''}">
          <a
            href="#"
            class="nav-link${isActive ? ' active' : ''}"
            data-nav="${item.id}"
            aria-current="${isActive ? 'page' : 'false'}"
          >
            <span class="nav-icon" aria-hidden="true">${item.icon}</span>
            <span class="nav-label">${esc(item.label)}</span>
          </a>
        </li>`;
    })
    .join('');

  list.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      navigate(link.dataset.nav);
    });
  });

  renderMobileNav();
}

function renderMobileNav() {
  let mobileNav = document.querySelector('.mobile-nav');
  if (!mobileNav) {
    mobileNav = document.createElement('nav');
    mobileNav.className = 'mobile-nav';
    mobileNav.setAttribute('aria-label', 'Mobile navigation');
    document.body.appendChild(mobileNav);
  }

  const items = NAV_ITEMS[appState.role] || [];
  mobileNav.innerHTML = items
    .map(
      item => `
      <button
        type="button"
        class="mobile-nav-btn${appState.activeNav === item.id ? ' active' : ''}"
        onclick="navigate('${item.id}')"
      >
        <span class="nav-icon" aria-hidden="true">${item.icon}</span>
        <span>${esc(item.label.split(' ')[0])}</span>
      </button>`
    )
    .join('');
}

function navigate(navId) {
  const valid = (NAV_ITEMS[appState.role] || []).map(i => i.id);
  appState.activeNav = valid.includes(navId) ? navId : valid[0];

  const list = document.getElementById('nav-list');
  if (list) {
    list.querySelectorAll('.nav-item').forEach(li => {
      const link = li.querySelector('.nav-link');
      const isActive = link && link.dataset.nav === appState.activeNav;
      li.classList.toggle('nav-item--active', isActive);
      if (link) {
        link.classList.toggle('active', isActive);
        link.setAttribute('aria-current', isActive ? 'page' : 'false');
      }
    });
  }

  renderMobileNav();
  renderView();
}

function setRole(role) {
  if (!['student', 'clubhead', 'admin'].includes(role)) return;
  appState.role = role;
  appState.activeNav = (NAV_ITEMS[role] || [])[0]?.id || 'timeline';
  syncRoleSwitcherUI();
  renderSidebar();
  renderView();
}

// =============================================================================
// 5. DOMAIN HELPERS
// =============================================================================

function getClub(clubId) {
  return appState.data.clubs.find(c => c.id === clubId) || null;
}

function getCouncil(councilId) {
  return (appState.data.councils || []).find(c => c.id === councilId) || null;
}

function getEvent(eventId) {
  return appState.data.events.find(e => e.id === eventId) || null;
}

function getStudent(stuId) {
  return appState.data.students.find(s => s.id === stuId) || null;
}

function getClubEvents(clubId) {
  return appState.data.events.filter(e => e.clubId === clubId);
}

function getClubSubmissions(clubId) {
  const eventIds = new Set(getClubEvents(clubId).map(e => e.id));
  return (appState.data.submissions || []).filter(s => eventIds.has(s.eventId));
}

function statusBadgeClass(status) {
  if (status === 'upcoming') return 'badge badge-upcoming';
  if (status === 'ongoing') return 'badge badge-ongoing';
  if (status === 'completed') return 'badge badge-completed';
  return 'badge';
}

function openCallLabel(type) {
  const map = {
    publicity: '📣 Publicity',
    ideas: '💡 Innovative Ideas',
    deals: '🤝 Deals & Sponsorships',
  };
  return map[type] || type;
}

function openCallTags(openCalls) {
  if (!openCalls) return '';
  const tags = [];
  if (openCalls.publicity) tags.push('<span class="oc-tag">📣 Publicity</span>');
  if (openCalls.ideas) tags.push('<span class="oc-tag">💡 Ideas</span>');
  if (openCalls.deals) tags.push('<span class="oc-tag">🤝 Deals</span>');
  return tags.join('');
}

function hasOpenCalls(evt) {
  return Boolean(
    evt && evt.openCalls && (evt.openCalls.publicity || evt.openCalls.ideas || evt.openCalls.deals)
  );
}

function isStudentRegistered(stu, eventId) {
  if (!stu) return false;
  return (
    (Array.isArray(stu.registrations) && stu.registrations.includes(eventId)) ||
    appState.data.registrations.some(r => r.studentId === stu.id && r.eventId === eventId)
  );
}

function sectionHeader(title, subtitle = '', actionHtml = '') {
  return `
    <div class="section-header">
      <div>
        <h1 class="section-title">${esc(title)}</h1>
        ${subtitle ? `<p class="section-subtitle mt-8">${esc(subtitle)}</p>` : ''}
      </div>
      ${actionHtml ? `<div>${actionHtml}</div>` : ''}
    </div>`;
}

// =============================================================================
// 6. VIEW ROUTER
// =============================================================================

function renderView() {
  const vc = document.getElementById('view-container');
  if (!vc || !appState.data) return;

  const { role, activeNav } = appState;
  if (role === 'student') {
    if (activeNav === 'clubs') return renderClubsDirectory();
    if (activeNav === 'opencalls') return renderOpenCalls();
    if (activeNav === 'profile') return renderProfile();
    return renderTimeline();
  }

  if (role === 'clubhead') {
    if (activeNav === 'myevents') return renderMyEvents();
    if (activeNav === 'submissions') return renderSubmissions();
    if (activeNav === 'induction') return renderInductionShortlist();
    return renderClubDashboard();
  }

  if (role === 'admin') {
    if (activeNav === 'allclubs') return renderAllClubs();
    if (activeNav === 'clashes') return renderScheduleClashes();
    if (activeNav === 'leadership') return renderLeadership();
    return renderAdminOverview();
  }
}

// =============================================================================
// 7. STUDENT VIEWS
// =============================================================================

function renderTimeline() {
  const vc = document.getElementById('view-container');
  if (!vc) return;

  const stu = getStudent(activeStudentId);
  let events = [...appState.data.events].sort((a, b) => {
    const order = { ongoing: 0, upcoming: 1, completed: 2 };
    const oa = order[a.status] ?? 3;
    const ob = order[b.status] ?? 3;
    if (oa !== ob) return oa - ob;
    return a.date.localeCompare(b.date);
  });

  const filters = [
    { key: 'all', label: 'All', fn: () => true },
    { key: 'orientations', label: 'Orientations', fn: e => e.type === 'orientation' },
    { key: 'workshops', label: 'Workshops', fn: e => e.type === 'workshop' },
    { key: 'competitions', label: 'Competitions', fn: e => e.type === 'competition' },
    { key: 'openregistration', label: 'Open Registration', fn: e => Boolean(e.registrationOpen) },
    { key: 'completed', label: 'Completed', fn: e => e.status === 'completed' },
  ];

  const activeFilterObj = filters.find(f => f.key === activeTimelineFilter) || filters[0];
  events = events.filter(activeFilterObj.fn);

  const filterHtml = filters
    .map(
      f =>
        `<button type="button" class="filter-btn${
          activeTimelineFilter === f.key ? ' active' : ''
        }" onclick="activeTimelineFilter='${f.key}';renderTimeline()">${f.label}</button>`
    )
    .join('');

  const cardsHtml = events.length
    ? events
        .map(evt => {
          const club = getClub(evt.clubId);
          const reg = isStudentRegistered(stu, evt.id);
          const doneFeedback = Boolean(stu && Array.isArray(stu.feedback) && stu.feedback.includes(evt.id));
          const ocHtml = openCallTags(evt.openCalls);

          let actions = `<button type="button" class="btn btn-secondary btn-sm" onclick="openEventDetailModal('${evt.id}')">Details</button>`;
          if (evt.status === 'upcoming' && evt.registrationOpen) {
            actions += reg
              ? `<span class="badge badge-verified">Registered ✓</span>`
              : `<button type="button" class="btn btn-primary btn-sm" onclick="openRegistrationModal('${evt.id}')">Register</button>`;
          }
          if (evt.status === 'ongoing' && evt.feedbackOpen && reg && !doneFeedback) {
            actions += `<button type="button" class="btn btn-green btn-sm" onclick="openFeedbackModal('${evt.id}')">Submit Feedback (+15 pts)</button>`;
          } else if (doneFeedback) {
            actions += `<span class="badge badge-verified">Feedback Verified ✓</span>`;
          }
          if (hasOpenCalls(evt) && (evt.status === 'upcoming' || evt.status === 'ongoing')) {
            actions += `<button type="button" class="btn btn-secondary btn-sm" onclick="openSubmissionModal('${evt.id}',null)">Pitch Open Call</button>`;
          }

          return `
            <article class="timeline-event-card ${esc(evt.status)}">
              <div class="flex" style="justify-content:space-between;align-items:flex-start;gap:12px;">
                <div>
                  <h2 class="event-title">${esc(evt.title)}</h2>
                  <div class="event-date">${fmtDate(evt.date)} · ${fmtTime(evt.time)} (${relativeDay(evt.date)})</div>
                </div>
                <span class="${statusBadgeClass(evt.status)}">${esc(evt.status)}</span>
              </div>
              <div class="event-meta-row">
                <span>📍 ${esc(evt.venue)}</span>
                <span>🏛 ${esc(club ? club.name : evt.clubId)}</span>
                <span>${esc(evt.type)}</span>
                <span class="text-mono">${evt.registrationCount}/${evt.maxCapacity} seats</span>
              </div>
              ${ocHtml ? `<div class="flex gap-8 mt-8" style="flex-wrap:wrap;">${ocHtml}</div>` : ''}
              <div class="event-actions">${actions}</div>
            </article>`;
        })
        .join('')
    : `<div class="empty-state"><h3>No events in this filter</h3><p>Try switching to another filter above.</p></div>`;

  vc.innerHTML = `
    ${sectionHeader('Unified Campus Timeline', `Today · ${fmtDate(APP_TODAY_ISO)} · Student: ${stu ? stu.name : ''}`)}
    <div class="timeline-filters">${filterHtml}</div>
    <div>${cardsHtml}</div>`;
}

function renderClubsDirectory() {
  const vc = document.getElementById('view-container');
  if (!vc) return;

  const tabs = `
    <div class="timeline-filters">
      <button type="button" class="filter-btn${activeClubsTab === 'councils' ? ' active' : ''}" onclick="activeClubsTab='councils';renderClubsDirectory()">Councils (${appState.data.councils.length})</button>
      <button type="button" class="filter-btn${activeClubsTab === 'clubs' ? ' active' : ''}" onclick="activeClubsTab='clubs';renderClubsDirectory()">Clubs (${appState.data.clubs.length})</button>
    </div>`;

  let bodyHtml = '';
  if (activeClubsTab === 'councils') {
    bodyHtml = appState.data.councils
      .map(c => {
        const affiliated = appState.data.clubs.filter(cl => cl.council === c.id).length;
        return `
          <div class="card">
            <div class="flex" style="justify-content:space-between;align-items:baseline;gap:12px;">
              <div>
                <h2 class="card-title">${esc(c.name)} <span class="badge badge-open">${esc(c.abbr)}</span></h2>
                <div class="card-meta mt-8">Head: ${esc(c.head)} · ${esc(c.email)}</div>
              </div>
              <span class="card-meta">Est. ${c.established} · ${affiliated} clubs</span>
            </div>
            <p class="card-desc">${esc(c.description)}</p>
          </div>`;
      })
      .join('');
  } else {
    bodyHtml = `<div class="clubs-grid">${appState.data.clubs
      .map(club => {
        const council = getCouncil(club.council);
        const tags = (club.tags || []).map(t => `<span class="tag-pill">${esc(t)}</span>`).join('');
        return `
          <div class="club-card" onclick="openClubDetailModal('${club.id}')">
            <div class="flex" style="justify-content:space-between;align-items:center;">
              <span class="club-type-tag">${esc(club.type)}</span>
              <span class="badge badge-open">${esc(council ? council.abbr : club.council)}</span>
            </div>
            <h3 class="card-title mt-8">${esc(club.name)}</h3>
            <p class="card-desc">${esc(club.description)}</p>
            <div class="club-tags">${tags}</div>
            <div class="card-meta mt-16">Head: ${esc(club.head)} · ${club.memberCount} members</div>
          </div>`;
      })
      .join('')}</div>`;
  }

  vc.innerHTML = `${sectionHeader('Clubs & Councils', 'Explore HBTU councils, technical & cultural clubs')}${tabs}${bodyHtml}`;
}

function renderOpenCalls() {
  const vc = document.getElementById('view-container');
  if (!vc) return;

  const stu = getStudent(activeStudentId);
  const activeEvents = appState.data.events.filter(
    e => hasOpenCalls(e) && (e.status === 'upcoming' || e.status === 'ongoing')
  );

  const optionsHtml = [
    `<option value="all"${activeOpenCallFilter === 'all' ? ' selected' : ''}>All Open Call Events (${activeEvents.length})</option>`,
    ...activeEvents.map(
      e => `<option value="${e.id}"${activeOpenCallFilter === e.id ? ' selected' : ''}>${esc(e.title)}</option>`
    ),
  ].join('');

  const visibleEvents =
    activeOpenCallFilter === 'all'
      ? activeEvents
      : activeEvents.filter(e => e.id === activeOpenCallFilter);

  const cardsHtml = visibleEvents.length
    ? visibleEvents
        .map(evt => {
          const club = getClub(evt.clubId);
          const tracks = ['publicity', 'ideas', 'deals']
            .filter(t => evt.openCalls && evt.openCalls[t])
            .map(
              t =>
                `<button type="button" class="btn btn-primary btn-sm" onclick="openSubmissionModal('${evt.id}','${t}')">Pitch ${openCallLabel(t)}</button>`
            )
            .join('');

          return `
            <div class="card">
              <div class="flex" style="justify-content:space-between;align-items:flex-start;gap:12px;">
                <div>
                  <h2 class="card-title">${esc(evt.title)}</h2>
                  <div class="card-meta mt-8">🏛 ${esc(club ? club.name : evt.clubId)} · 📅 ${fmtDate(evt.date)} · 📍 ${esc(evt.venue)}</div>
                </div>
                <span class="${statusBadgeClass(evt.status)}">${esc(evt.status)}</span>
              </div>
              <p class="card-desc">${esc(evt.description)}</p>
              <div class="event-actions">${tracks}</div>
            </div>`;
        })
        .join('')
    : `<div class="empty-state"><h3>No open calls right now</h3><p>Check back soon or switch event filters.</p></div>`;

  const mySubs = (appState.data.submissions || []).filter(s => s.studentId === activeStudentId);
  const mySubsHtml = mySubs.length
    ? `<div class="card mt-24">
        <h3 class="card-title mb-8">Your Submitted Pitches (${mySubs.length})</h3>
        ${mySubs
          .map(sub => {
            const ev = getEvent(sub.eventId);
            return `
              <div class="activity-row">
                <div>
                  <div class="activity-label">${esc(ev ? ev.title : sub.eventId)} — ${openCallLabel(sub.type)}</div>
                  <div class="card-meta mt-8">${esc(sub.pitch)}</div>
                </div>
                <span class="badge ${sub.status === 'selected' ? 'badge-verified' : 'badge-upcoming'}">${esc(sub.status)}</span>
              </div>`;
          })
          .join('')}
      </div>`
    : '';

  vc.innerHTML = `
    ${sectionHeader(
      'Open Calls',
      'Pitch publicity plans, innovative ideas, or sponsorship leads for upcoming events',
      `<select class="form-select" style="min-width:220px;" onchange="activeOpenCallFilter=this.value;renderOpenCalls()">${optionsHtml}</select>`
    )}
    <div>${cardsHtml}</div>
    ${mySubsHtml}`;
}

function renderProfile() {
  const vc = document.getElementById('view-container');
  if (!vc) return;

  const stu = getStudent(activeStudentId) || appState.data.students[0];
  if (!stu) return;

  const stuSelect = appState.data.students
    .map(
      s =>
        `<option value="${s.id}"${s.id === stu.id ? ' selected' : ''}>${esc(s.name)} (${esc(s.roll)} · ${esc(s.branch)} Y${s.year})</option>`
    )
    .join('');

  const eventIds = Array.from(
    new Set([
      ...(stu.registrations || []),
      ...appState.data.registrations.filter(r => r.studentId === stu.id).map(r => r.eventId),
    ])
  );
  const eventsList = eventIds.map(id => getEvent(id)).filter(Boolean);
  const orientationsAttended = eventsList.filter(e => e.type === 'orientation').length;
  const selectedContribs = (stu.contributions || []).filter(c => c.status === 'selected').length;
  const totalPts = (stu.engagementPoints || 0) + (stu.impactPoints || 0);

  const historyRows = eventsList.length
    ? eventsList
        .map(ev => {
          const fbDone = (stu.feedback || []).includes(ev.id);
          return `
            <div class="activity-row">
              <div>
                <div class="activity-label">${esc(ev.title)} <span class="text-mono text-muted">(${esc(ev.type)})</span></div>
                <div class="card-meta">${fmtDate(ev.date)} · ${esc(ev.venue)}</div>
              </div>
              <span class="badge ${fbDone ? 'badge-verified' : 'badge-upcoming'}">${fbDone ? 'Verified +15' : 'Registered'}</span>
            </div>`;
        })
        .join('')
    : `<p class="text-muted">No event registrations yet. Head to Timeline to register!</p>`;

  vc.innerHTML = `
    ${sectionHeader(
      'Verified Student Profile',
      'Induction-ready record of participation, feedback verification, and selected contributions',
      `<select class="form-select" style="min-width:240px;" onchange="activeStudentId=this.value;appState.activeStudent=this.value;renderProfile()">${stuSelect}</select>`
    )}
    <div class="card">
      <div class="flex" style="justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;">
        <div>
          <h2 class="card-title">${esc(stu.name)}</h2>
          <div class="card-meta mt-8">Roll: ${esc(stu.roll)} · ${esc(stu.branch)} · Year ${stu.year} · ${esc(stu.email)}</div>
        </div>
        <div class="points-display">
          <div class="points-block">
            <div class="points-num">${stu.engagementPoints || 0}</div>
            <div class="points-label">Engagement</div>
          </div>
          <div class="points-block">
            <div class="points-num green-num">${stu.impactPoints || 0}</div>
            <div class="points-label">Impact</div>
          </div>
          <div class="points-block">
            <div class="points-num">${totalPts}</div>
            <div class="points-label">Total Pts</div>
          </div>
        </div>
      </div>
      <hr class="divider" />
      <div class="activity-row"><span class="activity-label">Orientations Attended</span><span class="activity-value">${orientationsAttended}</span></div>
      <div class="activity-row"><span class="activity-label">Events Registered</span><span class="activity-value">${eventsList.length}</span></div>
      <div class="activity-row"><span class="activity-label">Verified Feedbacks</span><span class="activity-value">${(stu.feedback || []).length}</span></div>
      <div class="activity-row"><span class="activity-label">Selected Open-Call Contributions</span><span class="activity-value">${selectedContribs}</span></div>
    </div>
    <div class="card mt-16">
      <h3 class="card-title mb-8">Event &amp; Orientation Log</h3>
      ${historyRows}
    </div>`;
}

// =============================================================================
// 8. CLUB HEAD VIEWS (SCOPED TO appState.activeClubId)
// =============================================================================

function renderClubDashboard() {
  const vc = document.getElementById('view-container');
  if (!vc) return;

  const club = getClub(appState.activeClubId) || appState.data.clubs[0];
  const evts = getClubEvents(club.id);
  const subs = getClubSubmissions(club.id);
  const pendingSubs = subs.filter(s => s.status !== 'selected').length;
  const totalRegs = evts.reduce((acc, e) => acc + (e.registrationCount || 0), 0);

  vc.innerHTML = `
    ${sectionHeader(
      `${club.name} — Head Console`,
      `Scoped RBAC access for ${club.head} (${club.headRoll}) · ${club.email}`,
      `<button type="button" class="btn btn-primary" onclick="openCreateEventModal()">+ New Event / Orientation</button>`
    )}
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-num">${evts.length}</div><div class="stat-label">Club Events</div></div>
      <div class="stat-card"><div class="stat-num">${totalRegs}</div><div class="stat-label">Total Registrations</div></div>
      <div class="stat-card"><div class="stat-num">${subs.length}</div><div class="stat-label">Open Call Pitches</div></div>
      <div class="stat-card"><div class="stat-num">${pendingSubs}</div><div class="stat-label">Pending Review</div></div>
    </div>
    <div class="card">
      <div class="flex" style="justify-content:space-between;align-items:center;gap:12px;">
        <div>
          <h2 class="card-title">Club Profile &amp; Roster</h2>
          <p class="card-desc">${esc(club.description)}</p>
          <div class="card-meta mt-8">Active Members: ${club.memberCount} · Tags: ${(club.tags || []).join(', ')}</div>
        </div>
        <button type="button" class="btn btn-secondary" onclick="openEditClubModal('${club.id}')">Edit Club Info</button>
      </div>
    </div>`;
}

function renderMyEvents() {
  const vc = document.getElementById('view-container');
  if (!vc) return;

  const club = getClub(appState.activeClubId);
  const evts = getClubEvents(club.id).sort((a, b) => a.date.localeCompare(b.date));

  const cards = evts.length
    ? evts
        .map(
          evt => `
          <div class="card">
            <div class="flex" style="justify-content:space-between;align-items:flex-start;gap:12px;">
              <div>
                <h2 class="card-title">${esc(evt.title)}</h2>
                <div class="card-meta mt-8">${fmtDate(evt.date)} · ${fmtTime(evt.time)} · 📍 ${esc(evt.venue)} · Seats: ${evt.registrationCount}/${evt.maxCapacity}</div>
              </div>
              <span class="${statusBadgeClass(evt.status)}">${esc(evt.status)}</span>
            </div>
            <p class="card-desc">${esc(evt.description)}</p>
            <div class="flex gap-8 mt-8" style="flex-wrap:wrap;">
              ${openCallTags(evt.openCalls) || '<span class="card-meta">Open calls off</span>'}
              <span class="card-meta">· Reg: ${evt.registrationOpen ? 'Open' : 'Closed'} · Feedback: ${evt.feedbackOpen ? 'Open' : 'Closed'}</span>
            </div>
            <div class="event-actions">
              <button type="button" class="btn btn-secondary btn-sm" onclick="openEditEventModal('${evt.id}')">Edit Event &amp; Calls</button>
              <button type="button" class="btn btn-green btn-sm" onclick="toggleEventFeedback('${evt.id}')">${evt.feedbackOpen ? 'Close Feedback' : 'Open Feedback'}</button>
            </div>
          </div>`
        )
        .join('')
    : `<div class="empty-state"><h3>No events for ${esc(club.name)} yet</h3><p>Create your first orientation or workshop.</p></div>`;

  vc.innerHTML = `
    ${sectionHeader(
      `My Events — ${club.name}`,
      'Publish events, toggle open calls, and manage feedback windows',
      `<button type="button" class="btn btn-primary" onclick="openCreateEventModal()">+ Create Event</button>`
    )}
    <div>${cards}</div>`;
}

function renderSubmissions() {
  const vc = document.getElementById('view-container');
  if (!vc) return;

  const club = getClub(appState.activeClubId);
  const clubEvts = getClubEvents(club.id);
  let subs = getClubSubmissions(club.id);

  if (activeSubmissionEventFilter !== 'all') {
    subs = subs.filter(s => s.eventId === activeSubmissionEventFilter);
  }
  if (activeSubmissionTypeFilter !== 'all') {
    subs = subs.filter(s => s.type === activeSubmissionTypeFilter);
  }

  const evtOpts = [
    `<option value="all"${activeSubmissionEventFilter === 'all' ? ' selected' : ''}>All ${esc(club.abbr)} Events</option>`,
    ...clubEvts.map(
      e => `<option value="${e.id}"${activeSubmissionEventFilter === e.id ? ' selected' : ''}>${esc(e.title)}</option>`
    ),
  ].join('');

  const typeOpts = ['all', 'publicity', 'ideas', 'deals']
    .map(
      t =>
        `<option value="${t}"${activeSubmissionTypeFilter === t ? ' selected' : ''}>${
          t === 'all' ? 'All Tracks' : openCallLabel(t)
        }</option>`
    )
    .join('');

  const rowsHtml = subs.length
    ? subs
        .map(sub => {
          const stu = getStudent(sub.studentId);
          const ev = getEvent(sub.eventId);
          const isSelected = sub.status === 'selected';
          return `
            <div class="card">
              <div class="flex" style="justify-content:space-between;align-items:flex-start;gap:12px;">
                <div>
                  <h3 class="card-title">${esc(stu ? stu.name : sub.studentId)} <span class="card-meta">(${esc(stu ? stu.roll : '')} · ${openCallLabel(sub.type)})</span></h3>
                  <div class="card-meta mt-8">Event: ${esc(ev ? ev.title : sub.eventId)}</div>
                </div>
                <span class="badge ${isSelected ? 'badge-verified' : 'badge-upcoming'}">${esc(sub.status)}</span>
              </div>
              <p class="card-desc">${esc(sub.pitch)}</p>
              <div class="event-actions">
                ${
                  isSelected
                    ? `<span class="badge badge-verified">Selected (+25 Impact Awarded)</span>`
                    : `<button type="button" class="btn btn-green btn-sm" onclick="selectSubmission('${sub.id}')">Select &amp; Award +25 Impact</button>`
                }
              </div>
            </div>`;
        })
        .join('')
    : `<div class="empty-state"><h3>No open-call submissions yet</h3><p>Students can pitch from the Open Calls tab on events where calls are enabled.</p></div>`;

  vc.innerHTML = `
    ${sectionHeader(
      `Submissions — ${club.name}`,
      'Review student pitches and award Impact Points for selected contributors',
      `<div class="flex gap-8">
        <select class="form-select" onchange="activeSubmissionEventFilter=this.value;renderSubmissions()">${evtOpts}</select>
        <select class="form-select" onchange="activeSubmissionTypeFilter=this.value;renderSubmissions()">${typeOpts}</select>
      </div>`
    )}
    <div>${rowsHtml}</div>`;
}

function renderInductionShortlist() {
  const vc = document.getElementById('view-container');
  if (!vc) return;

  const club = getClub(appState.activeClubId);
  const ranked = [...appState.data.students]
    .map(s => {
      const totalPts = (s.engagementPoints || 0) + (s.impactPoints || 0);
      const selectedCount = (s.contributions || []).filter(c => c.status === 'selected').length;
      const eventsCount = Array.from(
        new Set([
          ...(s.registrations || []),
          ...appState.data.registrations.filter(r => r.studentId === s.id).map(r => r.eventId),
        ])
      ).length;
      return { ...s, totalPts, selectedCount, eventsCount };
    })
    .sort((a, b) => b.totalPts - a.totalPts);

  const rows = ranked
    .map(
      (s, idx) => `
      <tr>
        <td class="text-mono">#${idx + 1}</td>
        <td><strong>${esc(s.name)}</strong><div class="card-meta">${esc(s.roll)} · ${esc(s.branch)} Y${s.year}</div></td>
        <td class="text-mono">${s.eventsCount}</td>
        <td class="text-mono">${(s.feedback || []).length}</td>
        <td class="text-mono">${s.selectedCount}</td>
        <td class="text-mono"><strong>${s.totalPts}</strong></td>
      </tr>`
    )
    .join('');

  vc.innerHTML = `
    ${sectionHeader('Induction Shortlist', `Rankings for ${club.name} inductions based on verified activity & points`)}
    <div class="card table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Student</th>
            <th>Events</th>
            <th>Feedbacks</th>
            <th>Selected</th>
            <th>Total Pts</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

// =============================================================================
// 9. ADMIN / CENTRAL COUNCIL VIEWS
// =============================================================================

function detectClashes() {
  const bySlot = {};
  appState.data.events.forEach(evt => {
    const key = `${evt.date}__${evt.time}`;
    if (!bySlot[key]) bySlot[key] = [];
    bySlot[key].push(evt);
  });
  return Object.entries(bySlot)
    .filter(([, list]) => list.length > 1)
    .map(([key, list]) => {
      const [date, time] = key.split('__');
      return { date, time, events: list };
    });
}

function renderAdminOverview() {
  const vc = document.getElementById('view-container');
  if (!vc) return;

  const clashes = detectClashes();
  const totalRegs = appState.data.events.reduce((s, e) => s + (e.registrationCount || 0), 0);

  vc.innerHTML = `
    ${sectionHeader('Central Council Oversight', 'USAC / TSC / CSC campus-wide governance & schedule health')}
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-num">${appState.data.councils.length}</div><div class="stat-label">Councils</div></div>
      <div class="stat-card"><div class="stat-num">${appState.data.clubs.length}</div><div class="stat-label">Official Clubs</div></div>
      <div class="stat-card"><div class="stat-num">${appState.data.events.length}</div><div class="stat-label">Scheduled Events</div></div>
      <div class="stat-card"><div class="stat-num">${clashes.length}</div><div class="stat-label">Time Clashes</div></div>
    </div>
    <div class="card">
      <h2 class="card-title">Campus Activity Summary</h2>
      <p class="card-desc">${totalRegs} total seats registered across ${appState.data.events.length} events, with ${(appState.data.submissions || []).length} student open-call pitches logged.</p>
    </div>`;
}

function renderAllClubs() {
  const vc = document.getElementById('view-container');
  if (!vc) return;

  const rows = appState.data.clubs
    .map(c => {
      const council = getCouncil(c.council);
      const evCount = getClubEvents(c.id).length;
      return `
        <tr>
          <td><strong>${esc(c.name)}</strong> <span class="badge badge-open">${esc(c.abbr)}</span></td>
          <td>${esc(council ? council.abbr : c.council)}</td>
          <td>${esc(c.head)} <span class="card-meta">(${esc(c.headRoll)})</span></td>
          <td class="text-mono">${c.memberCount}</td>
          <td class="text-mono">${evCount}</td>
        </tr>`;
    })
    .join('');

  vc.innerHTML = `
    ${sectionHeader('All Clubs Directory', 'Complete roster of clubs, councils, and current student heads')}
    <div class="card table-wrap">
      <table class="data-table">
        <thead>
          <tr><th>Club</th><th>Council</th><th>Current Head</th><th>Members</th><th>Events</th></tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

function renderScheduleClashes() {
  const vc = document.getElementById('view-container');
  if (!vc) return;

  const clashes = detectClashes();
  const html = clashes.length
    ? clashes
        .map(
          cl => `
          <div class="clash-card">
            <h2 class="card-title">Clash on ${fmtDate(cl.date)} at ${fmtTime(cl.time)}</h2>
            <ul class="mt-8">
              ${cl.events
                .map(ev => {
                  const club = getClub(ev.clubId);
                  return `<li class="activity-row"><span><strong>${esc(ev.title)}</strong> (${esc(club ? club.name : ev.clubId)})</span><span class="card-meta">${esc(ev.venue)}</span></li>`;
                })
                .join('')}
            </ul>
          </div>`
        )
        .join('')
    : `<div class="empty-state"><h3>No schedule clashes detected</h3><p>All events have distinct date &amp; time slots.</p></div>`;

  vc.innerHTML = `${sectionHeader('Schedule Clashes', 'Events sharing the exact same date and start time')}${html}`;
}

function renderLeadership() {
  const vc = document.getElementById('view-container');
  if (!vc) return;

  const cards = appState.data.clubs
    .map(
      c => `
      <div class="card">
        <div class="flex" style="justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;">
          <div>
            <h2 class="card-title">${esc(c.name)}</h2>
            <div class="card-meta mt-8">Current Head: <strong>${esc(c.head)}</strong> · Roll: <span class="text-mono">${esc(c.headRoll)}</span></div>
          </div>
          <button type="button" class="btn btn-primary btn-sm" onclick="openHandoverModal('${c.id}')">Reassign Head</button>
        </div>
      </div>`
    )
    .join('');

  vc.innerHTML = `${sectionHeader('Leadership Handover', 'Reassign club head access while preserving all historical club data & events')}${cards}`;
}

// =============================================================================
// 10. MODALS & MUTATIONS
// =============================================================================

function openEventDetailModal(eventId) {
  const evt = getEvent(eventId);
  if (!evt) return;
  const club = getClub(evt.clubId);

  openModal(`
    <span class="${statusBadgeClass(evt.status)}">${esc(evt.status)}</span>
    <h2 id="modal-title" class="card-title mt-8" style="font-size:22px;">${esc(evt.title)}</h2>
    <div class="card-meta mt-8">🏛 ${esc(club ? club.name : evt.clubId)} · 📅 ${fmtDate(evt.date)} · ${fmtTime(evt.time)}</div>
    <div class="card-meta mt-8">📍 ${esc(evt.venue)} · Seats: ${evt.registrationCount}/${evt.maxCapacity}</div>
    <p class="card-desc mt-16">${esc(evt.description)}</p>
    ${openCallTags(evt.openCalls) ? `<div class="flex gap-8 mt-16" style="flex-wrap:wrap;">${openCallTags(evt.openCalls)}</div>` : ''}
    <div class="event-actions mt-24">
      <button type="button" class="btn btn-secondary" onclick="closeModal()">Close</button>
    </div>`);
}

function openClubDetailModal(clubId) {
  const club = getClub(clubId);
  if (!club) return;
  const council = getCouncil(club.council);
  const clubEvts = getClubEvents(club.id);

  openModal(`
    <span class="badge badge-open">${esc(council ? council.abbr : club.council)}</span>
    <h2 id="modal-title" class="card-title mt-8" style="font-size:22px;">${esc(club.name)}</h2>
    <div class="card-meta mt-8">Head: ${esc(club.head)} (${esc(club.headRoll)}) · ${esc(club.email)} · ${club.memberCount} members</div>
    <p class="card-desc mt-16">${esc(club.description)}</p>
    <hr class="divider" />
    <h3 class="card-title" style="font-size:16px;">Scheduled Events (${clubEvts.length})</h3>
    <ul class="mt-8">
      ${
        clubEvts.length
          ? clubEvts
              .map(e => `<li class="activity-row"><span>${esc(e.title)}</span><span class="card-meta">${fmtDate(e.date)}</span></li>`)
              .join('')
          : '<li class="card-meta">No events scheduled yet.</li>'
      }
    </ul>
    <div class="event-actions mt-24">
      <button type="button" class="btn btn-secondary" onclick="closeModal()">Close</button>
    </div>`);
}

function openRegistrationModal(eventId) {
  const evt = getEvent(eventId);
  const stu = getStudent(activeStudentId);
  if (!evt || !stu) return;

  openModal(`
    <h2 id="modal-title" class="card-title">Register for ${esc(evt.title)}</h2>
    <p class="card-desc">Confirm instant registration as <strong>${esc(stu.name)}</strong> (${esc(stu.roll)} · ${esc(stu.branch)}).</p>
    <form onsubmit="submitRegistration(event, '${evt.id}')">
      <div class="form-group mt-16">
        <label class="form-label" for="reg-note">Optional Note / Team Info</label>
        <input id="reg-note" class="form-input" type="text" placeholder="e.g., Interested in hardware track" />
      </div>
      <div class="event-actions">
        <button type="submit" class="btn btn-primary">Confirm Registration</button>
        <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      </div>
    </form>`);
}

function submitRegistration(e, eventId) {
  e.preventDefault();
  const evt = getEvent(eventId);
  const stu = getStudent(activeStudentId);
  if (!evt || !stu) return;

  if (isStudentRegistered(stu, eventId)) {
    closeModal();
    showToast('Already registered for this event.', 'info');
    return;
  }

  const note = document.getElementById('reg-note')?.value.trim() || '';
  stu.registrations = Array.from(new Set([...(stu.registrations || []), eventId]));
  evt.registrationCount = (evt.registrationCount || 0) + 1;
  appState.data.registrations.push({
    id: uid(),
    studentId: stu.id,
    eventId,
    note,
    timestamp: new Date().toISOString(),
  });

  saveData();
  closeModal();
  renderView();
  showToast(`Registered for ${evt.title}!`, 'success');
}

function openFeedbackModal(eventId) {
  const evt = getEvent(eventId);
  if (!evt) return;
  _feedbackRating = 5;

  openModal(`
    <h2 id="modal-title" class="card-title">Event Feedback — ${esc(evt.title)}</h2>
    <p class="card-desc">Submitting verified feedback awards <strong>+15 Engagement Points</strong>.</p>
    <form onsubmit="submitFeedback(event, '${evt.id}')">
      <div class="form-group mt-16">
        <label class="form-label" for="fb-rating">Rating (1–5)</label>
        <select id="fb-rating" class="form-select" onchange="_feedbackRating=Number(this.value)">
          <option value="5" selected>5 — Outstanding</option>
          <option value="4">4 — Great</option>
          <option value="3">3 — Good</option>
          <option value="2">2 — Fair</option>
          <option value="1">1 — Needs Improvement</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label" for="fb-comment">Key Takeaway / Feedback</label>
        <textarea id="fb-comment" class="form-textarea" required placeholder="What did you learn or enjoy most?"></textarea>
      </div>
      <div class="event-actions">
        <button type="submit" class="btn btn-green">Submit &amp; Claim +15 Pts</button>
        <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      </div>
    </form>`);
}

function submitFeedback(e, eventId) {
  e.preventDefault();
  const evt = getEvent(eventId);
  const stu = getStudent(activeStudentId);
  if (!evt || !stu) return;

  const comment = document.getElementById('fb-comment')?.value.trim() || '';
  const rating = Number(document.getElementById('fb-rating')?.value || _feedbackRating || 5);

  stu.feedback = Array.from(new Set([...(stu.feedback || []), eventId]));
  stu.engagementPoints = (stu.engagementPoints || 0) + 15;
  appState.data.feedbackLogs.push({
    id: uid(),
    studentId: stu.id,
    eventId,
    rating,
    comment,
  });

  saveData();
  closeModal();
  renderView();
  showToast('Feedback verified! +15 Engagement Points added.', 'success');
}

function openSubmissionModal(eventId, presetType) {
  const evt = getEvent(eventId);
  const stu = getStudent(activeStudentId);
  if (!evt || !stu) return;

  const enabledTypes = ['publicity', 'ideas', 'deals'].filter(t => evt.openCalls && evt.openCalls[t]);
  const selectedType = presetType && enabledTypes.includes(presetType) ? presetType : enabledTypes[0] || 'ideas';

  const opts = enabledTypes
    .map(t => `<option value="${t}"${t === selectedType ? ' selected' : ''}>${openCallLabel(t)}</option>`)
    .join('');

  openModal(`
    <h2 id="modal-title" class="card-title">Pitch to Open Call — ${esc(evt.title)}</h2>
    <p class="card-desc">Submitting as <strong>${esc(stu.name)}</strong> (${esc(stu.roll)}). Selected pitches earn <strong>+25 Impact Points</strong>.</p>
    <form onsubmit="submitOpenCall(event, '${evt.id}')">
      <div class="form-group mt-16">
        <label class="form-label" for="sub-type">Contribution Track</label>
        <select id="sub-type" class="form-select">${opts}</select>
      </div>
      <div class="form-group">
        <label class="form-label" for="sub-pitch">Your Proposal / Pitch</label>
        <textarea id="sub-pitch" class="form-textarea" required placeholder="Share your publicity plan, event idea, or sponsorship lead..."></textarea>
      </div>
      <div class="event-actions">
        <button type="submit" class="btn btn-primary">Submit Pitch</button>
        <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      </div>
    </form>`);
}

function submitOpenCall(e, eventId) {
  e.preventDefault();
  const evt = getEvent(eventId);
  const stu = getStudent(activeStudentId);
  if (!evt || !stu) return;

  const type = document.getElementById('sub-type')?.value || 'ideas';
  const pitch = document.getElementById('sub-pitch')?.value.trim() || '';
  if (!pitch) return;

  appState.data.submissions.push({
    id: uid(),
    eventId,
    studentId: stu.id,
    type,
    pitch,
    status: 'pending',
  });

  saveData();
  closeModal();
  renderView();
  showToast('Pitch submitted to club organizers!', 'success');
}

function selectSubmission(subId) {
  const sub = (appState.data.submissions || []).find(s => s.id === subId);
  if (!sub || sub.status === 'selected') return;

  sub.status = 'selected';
  const stu = getStudent(sub.studentId);
  if (stu) {
    stu.impactPoints = (stu.impactPoints || 0) + 25;
    stu.contributions = stu.contributions || [];
    stu.contributions.push({
      eventId: sub.eventId,
      type: sub.type,
      status: 'selected',
      note: sub.pitch,
    });
  }

  saveData();
  renderView();
  showToast(`Selected ${stu ? stu.name : 'student'}'s pitch (+25 Impact Points)!`, 'success');
}

function openCreateEventModal() {
  const club = getClub(appState.activeClubId);
  openModal(`
    <h2 id="modal-title" class="card-title">New Event — ${esc(club.name)}</h2>
    <form onsubmit="createEvent(event)">
      <div class="form-group mt-16">
        <label class="form-label" for="ev-title">Event Title</label>
        <input id="ev-title" class="form-input" type="text" required placeholder="e.g., Freshers Build Night" />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label" for="ev-type">Type</label>
          <select id="ev-type" class="form-select">
            <option value="orientation">Orientation</option>
            <option value="workshop">Workshop</option>
            <option value="competition">Competition</option>
            <option value="social">Social</option>
            <option value="fest">Fest</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label" for="ev-cap">Max Capacity</label>
          <input id="ev-cap" class="form-input" type="number" min="10" max="1000" value="80" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label" for="ev-date">Date</label>
          <input id="ev-date" class="form-input" type="date" value="2026-12-10" required />
        </div>
        <div class="form-group">
          <label class="form-label" for="ev-time">Time</label>
          <input id="ev-time" class="form-input" type="time" value="16:00" required />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="ev-venue">Venue</label>
        <input id="ev-venue" class="form-input" type="text" required placeholder="e.g., Seminar Hall, Block C" />
      </div>
      <div class="form-group">
        <label class="form-label" for="ev-desc">Description</label>
        <textarea id="ev-desc" class="form-textarea" required placeholder="What happens at this session?"></textarea>
      </div>
      <div class="form-group">
        <span class="form-label">Open Calls</span>
        <label class="toggle-group"><input id="oc-pub" type="checkbox" class="toggle" /> Publicity</label>
        <label class="toggle-group"><input id="oc-ideas" type="checkbox" class="toggle" /> Innovative Ideas</label>
        <label class="toggle-group"><input id="oc-deals" type="checkbox" class="toggle" /> Deals &amp; Sponsorships</label>
      </div>
      <div class="event-actions">
        <button type="submit" class="btn btn-primary">Publish to Timeline</button>
        <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      </div>
    </form>`);
}

function createEvent(e) {
  e.preventDefault();
  const title = document.getElementById('ev-title')?.value.trim();
  const type = document.getElementById('ev-type')?.value || 'workshop';
  const maxCapacity = Number(document.getElementById('ev-cap')?.value || 80);
  const date = document.getElementById('ev-date')?.value || '2026-12-10';
  const time = document.getElementById('ev-time')?.value || '16:00';
  const venue = document.getElementById('ev-venue')?.value.trim();
  const description = document.getElementById('ev-desc')?.value.trim();

  if (!title || !venue || !description) return;

  appState.data.events.push({
    id: 'evt_' + uid(),
    clubId: appState.activeClubId,
    title,
    type,
    date,
    time,
    venue,
    description,
    registrationOpen: true,
    registrationCount: 0,
    maxCapacity,
    openCalls: {
      publicity: Boolean(document.getElementById('oc-pub')?.checked),
      ideas: Boolean(document.getElementById('oc-ideas')?.checked),
      deals: Boolean(document.getElementById('oc-deals')?.checked),
    },
    status: 'upcoming',
    feedbackOpen: false,
  });

  saveData();
  closeModal();
  renderView();
  showToast('Event published to the campus timeline!', 'success');
}

function openEditEventModal(eventId) {
  const evt = getEvent(eventId);
  if (!evt) return;

  openModal(`
    <h2 id="modal-title" class="card-title">Edit Event — ${esc(evt.title)}</h2>
    <form onsubmit="saveEventEdits(event, '${evt.id}')">
      <div class="form-group mt-16">
        <label class="form-label" for="edit-ev-title">Title</label>
        <input id="edit-ev-title" class="form-input" type="text" value="${esc(evt.title)}" required />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label" for="edit-ev-date">Date</label>
          <input id="edit-ev-date" class="form-input" type="date" value="${esc(evt.date)}" required />
        </div>
        <div class="form-group">
          <label class="form-label" for="edit-ev-time">Time</label>
          <input id="edit-ev-time" class="form-input" type="time" value="${esc(evt.time)}" required />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="edit-ev-venue">Venue</label>
        <input id="edit-ev-venue" class="form-input" type="text" value="${esc(evt.venue)}" required />
      </div>
      <div class="form-group">
        <span class="form-label">Controls</span>
        <label class="toggle-group"><input id="edit-reg-open" type="checkbox" class="toggle" ${evt.registrationOpen ? 'checked' : ''} /> Registration Open</label>
        <label class="toggle-group"><input id="edit-oc-pub" type="checkbox" class="toggle" ${evt.openCalls?.publicity ? 'checked' : ''} /> Open Call: Publicity</label>
        <label class="toggle-group"><input id="edit-oc-ideas" type="checkbox" class="toggle" ${evt.openCalls?.ideas ? 'checked' : ''} /> Open Call: Innovative Ideas</label>
        <label class="toggle-group"><input id="edit-oc-deals" type="checkbox" class="toggle" ${evt.openCalls?.deals ? 'checked' : ''} /> Open Call: Deals</label>
      </div>
      <div class="event-actions">
        <button type="submit" class="btn btn-primary">Save Changes</button>
        <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      </div>
    </form>`);
}

function saveEventEdits(e, eventId) {
  e.preventDefault();
  const evt = getEvent(eventId);
  if (!evt) return;

  evt.title = document.getElementById('edit-ev-title')?.value.trim() || evt.title;
  evt.date = document.getElementById('edit-ev-date')?.value || evt.date;
  evt.time = document.getElementById('edit-ev-time')?.value || evt.time;
  evt.venue = document.getElementById('edit-ev-venue')?.value.trim() || evt.venue;
  evt.registrationOpen = Boolean(document.getElementById('edit-reg-open')?.checked);
  evt.openCalls = {
    publicity: Boolean(document.getElementById('edit-oc-pub')?.checked),
    ideas: Boolean(document.getElementById('edit-oc-ideas')?.checked),
    deals: Boolean(document.getElementById('edit-oc-deals')?.checked),
  };

  saveData();
  closeModal();
  renderView();
  showToast('Event updated!', 'success');
}

function toggleEventFeedback(eventId) {
  const evt = getEvent(eventId);
  if (!evt) return;
  evt.feedbackOpen = !evt.feedbackOpen;
  if (evt.feedbackOpen && evt.status === 'upcoming') {
    evt.status = 'ongoing';
  }
  saveData();
  renderView();
  showToast(`Feedback ${evt.feedbackOpen ? 'opened' : 'closed'} for ${evt.title}.`, 'info');
}

function openEditClubModal(clubId) {
  const club = getClub(clubId);
  if (!club) return;

  openModal(`
    <h2 id="modal-title" class="card-title">Edit ${esc(club.name)}</h2>
    <form onsubmit="saveClubEdits(event, '${club.id}')">
      <div class="form-group mt-16">
        <label class="form-label" for="club-desc">Overview</label>
        <textarea id="club-desc" class="form-textarea" required>${esc(club.description)}</textarea>
      </div>
      <div class="form-group">
        <label class="form-label" for="club-members">Active Member Count</label>
        <input id="club-members" class="form-input" type="number" min="1" value="${club.memberCount}" required />
      </div>
      <div class="event-actions">
        <button type="submit" class="btn btn-primary">Save</button>
        <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      </div>
    </form>`);
}

function saveClubEdits(e, clubId) {
  e.preventDefault();
  const club = getClub(clubId);
  if (!club) return;
  club.description = document.getElementById('club-desc')?.value.trim() || club.description;
  club.memberCount = Number(document.getElementById('club-members')?.value || club.memberCount);
  saveData();
  closeModal();
  renderView();
  showToast(`${club.name} details updated.`, 'success');
}

function openHandoverModal(clubId) {
  const club = getClub(clubId);
  if (!club) return;

  openModal(`
    <h2 id="modal-title" class="card-title">Leadership Handover — ${esc(club.name)}</h2>
    <p class="card-desc">All historical events and submissions for <strong>${esc(club.name)}</strong> remain intact.</p>
    <form onsubmit="saveHandover(event, '${club.id}')">
      <div class="form-group mt-16">
        <label class="form-label" for="new-head-name">New Club Head Name</label>
        <input id="new-head-name" class="form-input" type="text" value="${esc(club.head)}" required />
      </div>
      <div class="form-group">
        <label class="form-label" for="new-head-roll">New Head Roll Number</label>
        <input id="new-head-roll" class="form-input" type="text" value="${esc(club.headRoll)}" required />
      </div>
      <div class="event-actions">
        <button type="submit" class="btn btn-primary">Transfer Leadership</button>
        <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      </div>
    </form>`);
}

function saveHandover(e, clubId) {
  e.preventDefault();
  const club = getClub(clubId);
  if (!club) return;
  club.head = document.getElementById('new-head-name')?.value.trim() || club.head;
  club.headRoll = document.getElementById('new-head-roll')?.value.trim() || club.headRoll;
  saveData();
  closeModal();
  renderView();
  showToast(`Leadership of ${club.name} updated to ${club.head}.`, 'success');
}

// =============================================================================
// 11. INITIALIZATION
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
  loadData();
  syncRoleSwitcherUI();
  renderSidebar();
  renderView();

  document.querySelectorAll('.role-btn').forEach(btn => {
    btn.addEventListener('click', () => setRole(btn.dataset.role));
  });

  const clubSelect = document.getElementById('club-head-select');
  if (clubSelect) {
    clubSelect.addEventListener('change', () => {
      appState.activeClubId = clubSelect.value;
      renderView();
      showToast(`Switched to ${getClub(clubSelect.value)?.name || clubSelect.value}`, 'info');
    });
  }

  const resetBtn = document.getElementById('btn-reset');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetData);
  }

  const modalClose = document.getElementById('modal-close');
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  const modalOverlay = document.getElementById('modal-overlay');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', e => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
});