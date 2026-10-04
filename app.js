const CONFIG = {
  API_URL: 'https://script.google.com/macros/s/AKfycbwCe1P4F15p9gzCbF2jpyiRaJMb1Wplx5AXhTxgtpwqFsLo3tQ05RfY3kRWP3-Fh-EmRg/exec',
  CLIENT_ID: '277716951356-3ma5t20ke5f8g5l5jh6stbup2ssunja2.apps.googleusercontent.com',
};

const STATUS = ['ดำเนินการ', 'รอดำเนินการ', 'เสร็จสิ้น', 'ยกเลิก'];
const CLOSED = ['เสร็จสิ้น', 'ยกเลิก'];
const PRIORITY = ['ด่วนมาก', 'ด่วน', 'ปกติ'];
const P_RANK = { 'ด่วนมาก': 0, 'ด่วน': 1, 'ปกติ': 2 };
const REPEAT = [['', 'ไม่ทำซ้ำ'], ['ทุกสัปดาห์', 'ทุกสัปดาห์'], ['ทุกเดือน', 'ทุกเดือน']];
const COLORS = ['#2f5da8', '#0e7c6b', '#8a4baf', '#b05e14', '#b8325a', '#55702a', '#2b7a99', '#7a5c3e'];
const TH_DAYNAME = ['วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์'];
const TH_MONTH = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];

const ICON = {
  check: '<path d="M20 6 9 17l-5-5"/>',
  plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  reload: '<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  note: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  trash: '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
  repeat: '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  gear: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
  chev: '<path d="m9 18 6-6-6-6"/>',
  ban: '<circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/>',
  pencil: '<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>',
};
// ไอคอนของเว็บ: โพสต์อิทซ้อนกันสามใบ ใช้บนหัวหน้าและหน้าเข้าสู่ระบบ (รูปเดียวกับ icon.svg)
const LOGO = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect x="9" y="9" width="40" height="40" rx="3" fill="#f9a8c4" transform="rotate(-11 29 29)"/><rect x="14" y="11" width="40" height="40" rx="3" fill="#8cc8f2" transform="rotate(8 34 31)"/><path d="M14 19a3 3 0 0 1 3-3h35a3 3 0 0 1 3 3v24L43 55H17a3 3 0 0 1-3-3z" fill="#fdd94e"/><path d="M55 43h-9a3 3 0 0 0-3 3v9z" fill="#d9a514"/><path d="M23 28h23M23 37h14" fill="none" stroke="#7a5d00" stroke-width="3.2" stroke-linecap="round" opacity=".5"/></svg>';
document.querySelectorAll('.logo').forEach(el => { el.innerHTML = LOGO; });

const icon = n => `<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${ICON[n]}</svg>`;

const S = { me: null, users: [], tasks: [], terms: [], currentTerm: '', term: undefined, admin: null, tab: 'mine', tags: [], tagColors: {}, fUser: '', fTag: '', q: '', booted: false, synced: false, termPicked: false, loadedAt: 0 };
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ───────── วันที่ ───────── */
const pad = n => String(n).padStart(2, '0');
const todayISO = () => { const d = new Date(); return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; };
const dUTC = s => Date.UTC(+s.slice(0, 4), +s.slice(5, 7) - 1, +s.slice(8, 10));
const diffDays = (a, b) => Math.round((dUTC(b) - dUTC(a)) / 864e5);
const thaiDM = s => `${+s.slice(8, 10)} ${TH_MONTH[+s.slice(5, 7) - 1]}`;
// วันที่ไม่ใช่ปีนี้ ต่อท้ายด้วย พ.ศ. สองหลัก เช่น 31 ม.ค. 70
const thaiDate = s => thaiDM(s) + (+s.slice(0, 4) === new Date().getFullYear() ? '' : ` ${String(+s.slice(0, 4) + 543).slice(-2)}`);
const thaiDateY = s => `${thaiDM(s)} ${+s.slice(0, 4) + 543}`;
const thaiStamp = s => s ? `${thaiDate(s)} ${s.slice(11, 16)}`.trim() : '';
const rangeText = (start, due) => start ? `${thaiDate(start)} ถึง ${thaiDate(due)}` : thaiDate(due);

// ช่วงวันทำงาน: ใส่วันเดียวถือเป็นงานวันเดียว (เก็บเป็นกำหนดส่ง)
function normRange(start, due) {
  if (start && !due) return { start: '', due: start };
  if (start && start > due) return { error: 'วันเริ่มต้องไม่หลังวันกำหนดส่ง' };
  return { start: start === due ? '' : start, due };
}
const savedMsg = (task, start, ok) => !start || task.start === start ? ok : 'บันทึกแล้ว แต่ระบบหลังบ้านยังไม่เก็บวันเริ่ม ต้องอัปเดต Apps Script ก่อน';

/* ───────── เก็บข้อมูลล่าสุดไว้ในเครื่อง เพื่อเปิดหน้าได้ทันที ───────── */
const CACHE_KEY = 'wp.load.v2', TOKEN_KEY = 'wp.token';
const store = {
  get(kind, k) { try { return JSON.parse(window[kind + 'Storage'].getItem(k)); } catch (_) { return null; } },
  set(kind, k, v) { try { window[kind + 'Storage'].setItem(k, JSON.stringify(v)); } catch (_) {} },
  del(kind, k) { try { window[kind + 'Storage'].removeItem(k); } catch (_) {} },
};
let cacheTimer = null;
function queueCache() {
  if (S.termPicked || !S.me) return;
  clearTimeout(cacheTimer);
  cacheTimer = setTimeout(() => store.set('local', CACHE_KEY, {
    me: S.me, users: S.users, tasks: S.tasks, terms: S.terms, currentTerm: S.currentTerm, term: S.term, tagColors: S.tagColors,
  }), 400);
}
S.foldX = store.get('local', 'wp.foldx') !== false;
const setSync = msg => { $('#sync').textContent = msg; };

/* ───────── ผู้ใช้ ───────── */
const userOf = e => S.users.find(u => u.email === e) || { email: e, nick: e.split('@')[0], name: '', active: false };
const activeUsers = () => S.users.filter(u => u.active);
const colorOf = e => COLORS[Math.max(0, S.users.findIndex(u => u.email === e)) % COLORS.length];
const isOpen = t => !CLOSED.includes(t.status);

/* ───────── เข้าสู่ระบบ ───────── */
let idToken = null, tokenExp = 0, waiters = [], gsiTimer = null, booting = false;

const jwtPayload = tok => JSON.parse(atob(tok.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));

function setToken(tok) {
  idToken = tok;
  try { tokenExp = jwtPayload(tok).exp || 0; } catch (_) { tokenExp = 0; }
  store.set('session', TOKEN_KEY, tok);
}

function dropSession() {
  try { google.accounts.id.disableAutoSelect(); } catch (_) {}
  idToken = null; S.booted = S.synced = false;
  clearTimeout(cacheTimer);
  store.del('local', CACHE_KEY);
  store.del('local', 'wp.redir');
  store.del('local', 'wp.hint');
  store.del('session', TOKEN_KEY);
}

/* ───────── เข้าสู่ระบบแบบเปิดหน้า Google เต็มหน้า ─────────
   ปุ่ม Google ปกติเปิดหน้าต่างซ้อน ซึ่งใช้ไม่ได้บน iPhone บางเบราว์เซอร์ ทางนี้พาไปหน้า Google แล้วกลับมาพร้อมโทเค็นใน # ของที่อยู่
   ต้องเพิ่ม REDIRECT_URI ใน Authorized redirect URIs ของ OAuth client ก่อนจึงจะใช้ได้ */
const REDIRECT_URI = location.origin + location.pathname.replace(/index\.html$/, '');
const IN_LINE = /\bLine\//i.test(navigator.userAgent);
// มือถือและแท็บเล็ตใช้ทางนี้ทางเดียว คอมพิวเตอร์ใช้ปุ่ม Google ปกติ หน้าเข้าสู่ระบบจึงมีปุ่มเดียวเสมอ
const MOBILE = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || (/Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1);
const IN_APP = IN_LINE || /FBAN|FBAV|Instagram|MicroMessenger/i.test(navigator.userAgent);

function redirectLogin(silent) {
  const nonce = Array.from(crypto.getRandomValues(new Uint8Array(16)), b => b.toString(16).padStart(2, '0')).join('');
  store.set('session', 'wp.nonce', nonce);
  const q = new URLSearchParams({ client_id: CONFIG.CLIENT_ID, redirect_uri: REDIRECT_URI, response_type: 'id_token', scope: 'openid email', nonce, state: nonce });
  const hint = store.get('local', 'wp.hint');
  if (hint) q.set('login_hint', hint);
  // silent: ต่ออายุเงียบ ๆ ตอนเปิดหน้า ถ้า Google ต้องถามอะไรจะส่งกลับมาเป็น error แทนการขึ้นหน้าจอ
  if (silent) q.set('prompt', 'none');
  location.assign('https://accounts.google.com/o/oauth2/v2/auth?' + q);
}

// อ่านผลที่ Google ส่งกลับมาใน # แล้วลบออกจากที่อยู่ คืน 'ok' | 'silent' (ต่ออายุเงียบไม่ได้) | 'error' | '' (ไม่ได้กลับมาจาก Google)
function takeRedirectResult() {
  if (!/(^#|&)(id_token|error)=/.test(location.hash)) return '';
  const p = new URLSearchParams(location.hash.slice(1));
  history.replaceState(null, '', location.pathname + location.search);
  const nonce = store.get('session', 'wp.nonce');
  store.del('session', 'wp.nonce');
  const tok = p.get('id_token');
  if (!tok) return /_required$/.test(p.get('error') || '') ? 'silent' : 'error';
  try {
    if (!nonce || p.get('state') !== nonce || jwtPayload(tok).nonce !== nonce) return 'error';
  } catch (_) { return 'error'; }
  setToken(tok);
  store.set('local', 'wp.redir', true);
  store.del('session', 'wp.tried');
  return 'ok';
}

function initGsi() {
  if (MOBILE) return;
  google.accounts.id.initialize({
    client_id: CONFIG.CLIENT_ID,
    callback: onCredential,
    auto_select: true,
    cancel_on_tap_outside: false,
  });
  google.accounts.id.renderButton($('#gsi-btn'), { theme: 'outline', size: 'large', shape: 'pill', text: 'signin_with', locale: 'th' });
  google.accounts.id.prompt();
  // เปิดจากข้อมูลที่เก็บไว้แต่ยังไม่ได้ยืนยันตัวตน ถ้า Google ไม่ล็อกอินให้เอง ให้ขึ้นปุ่มเข้าสู่ระบบ
  if (S.booted && !idToken) gsiTimer = setTimeout(() => {
    if (idToken) return;
    setSync('');
    showLogin('เข้าสู่ระบบเพื่ออัปเดตข้อมูล', true);
  }, 4000);
}

function onCredential(resp) {
  setToken(resp.credential);
  clearTimeout(gsiTimer);
  $('#login-msg').textContent = '';
  if (waiters.length) {
    hideLogin();
    const w = waiters; waiters = [];
    w.forEach(fn => fn(idToken));
  } else if (!S.synced) {
    boot();
  } else {
    hideLogin();
  }
}

function showLogin(msg, overlay) {
  const box = $('#login');
  box.classList.toggle('overlay', !!overlay);
  $('#login-msg').textContent = msg || '';
  box.hidden = false;
  if (!MOBILE) try { google.accounts.id.prompt(); } catch (_) {}
}
function hideLogin() { $('#login').hidden = true; }

function getToken() {
  if (idToken && Date.now() / 1000 < tokenExp - 60) return Promise.resolve(idToken);
  idToken = null;
  return new Promise(res => {
    waiters.push(res);
    showLogin('เซสชันหมดอายุ เข้าสู่ระบบอีกครั้งเพื่อทำต่อ', S.booted);
  });
}

async function api(action, data) {
  const token = await getToken();
  let json;
  try {
    const r = await fetch(CONFIG.API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action, data, token }),
    });
    json = await r.json();
  } catch (_) {
    throw new Error('เชื่อมต่อระบบไม่ได้ ตรวจอินเทอร์เน็ตแล้วลองอีกครั้ง');
  }
  if (json.ok) return json.data;
  if (json.code === 'AUTH') {
    idToken = null;
    return new Promise(res => {
      waiters.push(() => res(api(action, data)));
      showLogin(json.error, S.booted);
    });
  }
  if (json.code === 'FORBIDDEN' && (action === 'load' || !S.booted)) {
    dropSession();
    $('#app').hidden = true;
    closeDrawer();
    showLogin(json.error);
    throw Object.assign(new Error(json.error), { silent: true });
  }
  throw new Error(json.error || 'เกิดข้อผิดพลาด');
}

function applyLoad(d) {
  S.users = d.users; S.tasks = d.tasks;
  S.terms = d.terms; S.currentTerm = d.currentTerm; S.term = d.term;
  S.tagColors = d.tagColors || {};
}

// ไม่ได้เลือกภาคเรียนเอง ให้ระบบเลือกภาคเรียนปัจจุบันให้ทุกครั้ง
async function fetchLoad() {
  const d = await api('load', { term: S.termPicked ? S.term : undefined });
  S.loadedAt = Date.now();
  applyLoad(d);
  return d;
}

function paint() {
  $('#who').textContent = S.me.nick;
  $('#b-admin').hidden = !S.me.isAdmin;
  fillFilters();
  render();
}

async function boot() {
  if (booting) return;
  booting = true;
  hideLogin();
  $('#app').hidden = false;
  if (!S.booted) renderSkeleton();
  setSync('กำลังอัปเดตข้อมูล…');
  try {
    const d = await fetchLoad();
    S.me = d.me; S.booted = S.synced = true;
    if (store.get('local', 'wp.redir')) store.set('local', 'wp.hint', S.me.email);
    paint();
  } catch (e) {
    if (e.silent) return;
    if (S.booted) toast(e.message, { error: true });
    else $('#list').innerHTML = `<div class="empty"><strong>โหลดข้อมูลไม่สำเร็จ</strong>${esc(e.message)}</div>`;
  } finally { booting = false; setSync(''); }
}

async function reload() {
  const b = $('#b-reload'); b.disabled = true;
  setSync('กำลังอัปเดตข้อมูล…');
  try {
    await fetchLoad();
    fillFilters(); render();
  } catch (e) { toast(e.message, { error: true }); }
  finally { b.disabled = false; setSync(''); }
}

function logout() {
  dropSession();
  $('#app').hidden = true;
  closeDrawer();
  showLogin('');
}

/* ───────── กระดานงาน ───────── */
// สีโพสต์อิท: สีแรกสำหรับงานที่ไม่มีแท็ก แท็กที่ยังไม่ได้ตั้งสีเองจะได้สีตามลำดับชื่อ
const NOTE_COLORS = ['#fde98a', '#f9b8cf', '#a9d6f5', '#b9e3a8', '#fbc58a', '#d3bdf2', '#a4e0d6', '#f7a99b'];
const COLUMNS = [['รอดำเนินการ', 'var(--today)'], ['ดำเนินการ', 'var(--stamp)'], ['เสร็จสิ้น', 'var(--done)'], ['ยกเลิก', 'var(--muted)']];
const DONE_MAX = 24;

function tagColor(tag) {
  if (S.tagColors[tag]) return S.tagColors[tag];
  let h = (S.tags || []).indexOf(tag);
  if (h < 0) { h = 0; for (const c of tag) h = (h * 31 + c.codePointAt(0)) >>> 0; }
  return NOTE_COLORS[1 + h % (NOTE_COLORS.length - 1)];
}

function fillFilters() {
  const keepU = S.fUser;
  const termSel = $('#f-term');
  termSel.hidden = !S.terms.length;
  termSel.innerHTML = S.terms.slice().reverse().map(t =>
    `<option value="${esc(t.name)}">${esc(t.name)}${t.name === S.currentTerm ? ' (ปัจจุบัน)' : ''}</option>`).join('') +
    '<option value="*">ทุกภาคเรียน</option>';
  termSel.value = S.term;
  $('#f-user').innerHTML = '<option value="">ทุกคน</option>' + activeUsers().map(u => `<option value="${esc(u.email)}">${esc(u.nick)}</option>`).join('');
  $('#f-user').value = activeUsers().some(u => u.email === keepU) ? keepU : '';
  S.fUser = $('#f-user').value;
  S.tags = [...new Set(S.tasks.flatMap(t => t.tags))].sort((a, b) => a.localeCompare(b, 'th'));
  $('#tag-list').innerHTML = S.tags.map(t => `<option value="${esc(t)}">`).join('');
  if (!S.tags.includes(S.fTag)) S.fTag = '';
  renderChips();
}

function renderChips() {
  const box = $('#tag-chips');
  box.hidden = !S.tags.length;
  box.innerHTML = S.tags.map(t =>
    `<button class="chip" type="button" data-tag="${esc(t)}" aria-pressed="${t === S.fTag}" style="--n:${tagColor(t)}">#${esc(t)}</button>`).join('') +
    '<button class="btn ghost" type="button" id="b-colors">ตั้งสีแท็ก</button>';
}

// ตั้งสีประจำแท็ก ใช้ร่วมกันทั้งฝ่าย เปลี่ยนบนหน้าจอทันทีแล้วบันทึกเบื้องหลัง
function openColors() {
  const body = () => S.tags.map(t => `
    <div class="panel" data-tag="${esc(t)}">
      <h3><span class="chip" style="--n:${tagColor(t)};display:inline-flex;align-items:center">#${esc(t)}</span></h3>
      <div class="swatches">
        ${NOTE_COLORS.map(c => `<button class="sw" type="button" data-color="${c}" aria-pressed="${S.tagColors[t] === c}" aria-label="สี ${c}" style="--n:${c}"></button>`).join('')}
        <button class="btn ghost" type="button" data-color="" ${S.tagColors[t] ? '' : 'disabled'}>ใช้สีอัตโนมัติ</button>
      </div>
    </div>`).join('') + '<p class="foot">สีที่ตั้งไว้ใช้ร่วมกันทุกคนในฝ่าย โน้ตที่มีหลายแท็กใช้สีของแท็กแรก</p>';
  openDrawer('ตั้งสีแท็ก', body());
  $('#dr-body').onclick = async e => {
    const b = e.target.closest('[data-color]');
    const row = b && b.closest('[data-tag]');
    if (!row) return;
    const tag = row.dataset.tag, color = b.dataset.color, prev = S.tagColors[tag] || '';
    if (color === prev) return;
    const put = c => { if (c) S.tagColors[tag] = c; else delete S.tagColors[tag]; };
    const show = () => { if ($('#dr-title').textContent === 'ตั้งสีแท็ก' && !$('#drawer').hidden) $('#dr-body').innerHTML = body(); renderChips(); render(); };
    put(color); show();
    try { await api('setTagColor', { tag, color }); }
    catch (err) { put(prev); show(); toast(`บันทึกสีไม่สำเร็จ: ${err.message}`, { error: true }); }
  };
}

function visible() {
  let list = S.tasks;
  if (S.tab === 'mine') list = list.filter(t => t.assignees.includes(S.me.email));
  else if (S.fUser) list = list.filter(t => t.assignees.includes(S.fUser));
  if (S.fTag) list = list.filter(t => t.tags.includes(S.fTag));
  if (S.q) {
    const q = S.q.toLowerCase();
    list = list.filter(t => [t.title, t.detail, t.source, t.tags.join(' ')].join(' ').toLowerCase().includes(q));
  }
  return list;
}

function render() {
  document.querySelectorAll('.tab').forEach(b => b.setAttribute('aria-selected', String(b.dataset.tab === S.tab)));
  $('#n-mine').textContent = S.tasks.filter(t => isOpen(t) && t.assignees.includes(S.me.email)).length;
  $('#n-all').textContent = S.tasks.filter(isOpen).length;
  $('#f-user').hidden = S.tab === 'mine';
  queueCache();

  const today = todayISO();
  const list = visible();
  const filtered = S.q || S.fTag || (S.fUser && S.tab !== 'mine');
  const colOf = t => (STATUS.includes(t.status) ? t.status : 'รอดำเนินการ');
  const openSort = (a, b) => (a.due || '9999').localeCompare(b.due || '9999') || (P_RANK[a.priority] ?? 2) - (P_RANK[b.priority] ?? 2) || a.createdAt.localeCompare(b.createdAt);
  const doneSort = (a, b) => (b.doneAt || '').localeCompare(a.doneAt || '');

  $('#list').innerHTML = `<div class="board ${S.foldX ? 'fold-x' : ''}">${COLUMNS.map(([status, mk], i) => {
    const closed = CLOSED.includes(status);
    const all = list.filter(t => colOf(t) === status).sort(closed ? doneSort : openSort);
    const items = closed ? all.slice(0, DONE_MAX) : all;
    const empty = i === 0 && !list.length && !filtered ? 'ยังไม่มีงาน กดปุ่มเพิ่มงานเพื่อแปะโน้ตใบแรก' : 'ไม่มีงาน';
    const count = `<span class="n">${all.length}</span>`;
    // ช่องยกเลิกใช้น้อย พับเป็นแถบแคบไว้ก่อน กดหัวช่องเพื่อกางหรือพับ
    const foldable = status === 'ยกเลิก', folded = foldable && S.foldX;
    const head = foldable
      ? `<button class="fold-b" type="button" aria-expanded="${!folded}" title="${folded ? 'กางช่องยกเลิก' : 'พับช่องยกเลิก'}" aria-label="${status} ${all.length} งาน"><span class="fold-i">${icon('ban')}</span><span class="fold-t">${status}</span>${count}${icon('chev')}</button>`
      : status + count;
    return `<section class="col ${folded ? 'is-folded' : ''}" data-status="${status}" style="--mk:${mk}" aria-label="${status} ${all.length} งาน">
      <h2>${head}</h2>
      ${folded ? '' : items.length ? `<div class="col-notes">${items.map(t => note(t, today)).join('')}</div>` : `<p class="col-empty">${empty}</p>`}
      ${!folded && all.length > items.length ? `<p class="more-note">แสดง ${DONE_MAX} ใบล่าสุดจาก ${all.length} ใบ ใช้ช่องค้นหาเพื่อหางานเก่า</p>` : ''}
    </section>`;
  }).join('')}</div>`;
}

function note(t, today) {
  const open = isOpen(t);
  const d = t.due ? diffDays(today, t.due) : null;
  let when = '<span class="when-s">ไม่กำหนดวัน</span>';
  if (t.due) {
    const late = open && d < 0, now = open && d === 0;
    when = `<span class="when-d ${late ? 'late' : now ? 'today' : ''}">${late ? `เลยกำหนด ${-d} วัน` : now ? 'ส่งวันนี้' : `ส่ง ${thaiDate(t.due)}`}</span>`;
    const span = t.start ? diffDays(t.start, t.due) : 0;
    if (span > 0) {
      const pct = open ? Math.max(0, Math.min(100, Math.round(diffDays(t.start, today) / span * 100))) : 100;
      when += `<span class="when-s">${rangeText(t.start, t.due)}</span><span class="track"><i style="width:${pct}%"></i></span>`;
    } else if (late || now) when += `<span class="when-s">กำหนด ${thaiDate(t.due)}</span>`;
  }

  const meta = [];
  if (!open && t.doneAt) meta.push(`<span>${esc(t.status)} ${thaiDate(t.doneAt)}</span>`);
  meta.push(...t.assignees.map(e => `<span class="person" style="--c:${colorOf(e)}"><i></i>${esc(userOf(e).nick)}</span>`));
  if (open && t.term && S.term !== '*' && t.term !== S.term) meta.push(`<span class="carry">ยกมาจาก ${esc(t.term)}</span>`);
  if (t.priority && t.priority !== 'ปกติ') meta.push(`<span class="urgent">${esc(t.priority)}</span>`);
  if (t.repeat) meta.push(`<span>${icon('repeat')}${esc(t.repeat)}</span>`);
  if (t.noteCount) meta.push(`<span>${icon('note')}${t.noteCount}<span class="sr"> บันทึก</span></span>`);
  t.tags.forEach(tag => meta.push(`<span>#${esc(tag)}</span>`));

  return `<article class="task note ${open ? '' : 'is-done'}" data-id="${esc(t.id)}" style="--n:${t.tags.length ? tagColor(t.tags[0]) : NOTE_COLORS[0]}">
    <button class="check" data-act="toggle" aria-label="${open ? 'ปิดงาน' : 'เปิดงานอีกครั้ง'} ${esc(t.title)}">${icon('check')}</button>
    <button class="open" data-act="open"><span class="when">${when}</span><span class="t-title">${esc(t.title)}</span><span class="t-meta">${meta.join('')}</span></button>
  </article>`;
}

function renderSkeleton() {
  $('#list').innerHTML = `<div class="board">${COLUMNS.map(([status, mk]) =>
    `<section class="col" style="--mk:${mk}"><h2>${status}</h2><div class="col-notes"><div class="skel"></div><div class="skel"></div></div></section>`).join('')}</div>`;
}

function upsert(task) {
  const i = S.tasks.findIndex(t => t.id === task.id);
  if (i >= 0) S.tasks[i] = Object.assign({}, S.tasks[i], task);
  else S.tasks.push(Object.assign({ noteCount: 0 }, task));
}

const saving = new Map();

function toggle(id) {
  const t = S.tasks.find(x => x.id === id);
  if (t) moveTo(id, isOpen(t) ? 'เสร็จสิ้น' : 'ดำเนินการ');
}

// ย้ายโน้ตไปอีกสถานะ: เปลี่ยนบนหน้าจอทันที แล้วบันทึกเบื้องหลัง ถ้าบันทึกไม่สำเร็จจึงย้ายกลับ
async function moveTo(id, status) {
  const t = S.tasks.find(x => x.id === id);
  if (!t || t.status === status || !STATUS.includes(status) || saving.has(id)) return;
  const prev = { status: t.status, doneAt: t.doneAt, doneBy: t.doneBy };
  const closing = CLOSED.includes(status);
  const d = new Date();

  upsert({ id, status, doneAt: closing ? `${todayISO()} ${pad(d.getHours())}:${pad(d.getMinutes())}` : '', doneBy: closing ? S.me.email : '' });
  render();
  const job = api('setStatus', { id, status });
  saving.set(id, job);

  const undo = {
    action: 'เลิกทำ',
    onAction: async () => {
      upsert(Object.assign({ id }, prev));
      render();
      toast('ย้ายกลับแล้ว');
      const r = await job.catch(() => null);
      if (!r) return;
      if (r.next) { S.tasks = S.tasks.filter(x => x.id !== r.next.id); render(); }
      const u = await api('setStatus', { id, status: prev.status, removeId: r.next ? r.next.id : '' });
      upsert(u.task); render();
    },
  };
  toast(status === 'เสร็จสิ้น' ? 'ปิดงานแล้ว' : `ย้ายไปช่อง${status}แล้ว`, undo);

  try {
    const r = await job;
    // ผู้ใช้กดเลิกทำไปแล้วระหว่างรอ ไม่ต้องทับด้วยผลเดิม
    const cur = S.tasks.find(x => x.id === id);
    if (cur && cur.status === status) {
      upsert(r.task);
      if (r.next) {
        upsert(r.next);
        toast(`ปิดงานแล้ว และสร้างรอบถัดไป ${thaiDate(r.next.due)}`, undo);
      }
    }
    render();
  } catch (e) {
    upsert(Object.assign({ id }, prev));
    render();
    toast(`บันทึกไม่สำเร็จ จึงย้ายกลับให้แล้ว: ${e.message}`, { error: true });
  } finally {
    saving.delete(id);
  }
}

/* ───────── แผงรายละเอียด ───────── */
let lastFocus = null;

function openDrawer(title, html) {
  lastFocus = document.activeElement;
  $('#dr-title').textContent = title;
  $('#dr-body').innerHTML = html;
  $('#drawer').hidden = false;
  $('#backdrop').hidden = false;
  document.body.style.overflow = 'hidden';
  const first = $('#dr-body').querySelector('input,select,textarea,button');
  first && first.focus({ preventScroll: true });
}

function closeDrawer() {
  if ($('#drawer').hidden) return;
  $('#drawer').hidden = true;
  $('#backdrop').hidden = true;
  document.body.style.overflow = '';
  lastFocus && lastFocus.focus && lastFocus.focus({ preventScroll: true });
}

function options(list, value) {
  return list.map(o => {
    const [v, label] = Array.isArray(o) ? o : [o, o];
    return `<option value="${esc(v)}" ${v === value ? 'selected' : ''}>${esc(label)}</option>`;
  }).join('');
}

function peoplePicker(selected, disabled) {
  return `<div class="pick">${S.users.filter(u => u.active || selected.includes(u.email)).map(u => `<label style="--c:${colorOf(u.email)}"><input type="checkbox" name="assignee" value="${esc(u.email)}" ${selected.includes(u.email) ? 'checked' : ''} ${disabled ? 'disabled' : ''}><i></i>${esc(u.nick)}</label>`).join('')}</div>`;
}

function formFields(t, mid = '') {
  const dis = '';
  return `
    <label class="field">ชื่องาน<input class="input" id="f-title" value="${esc(t.title)}" maxlength="200" ${dis}></label>
    <fieldset><legend>ผู้รับผิดชอบ</legend>${peoplePicker(t.assignees)}</fieldset>${mid}
    <div class="row2">
      <label class="field">ความเร่งด่วน<select class="input" id="f-priority" ${dis}>${options(PRIORITY, t.priority || 'ปกติ')}</select></label>
      <label class="field">ทำซ้ำ<select class="input" id="f-repeat" ${dis}>${options(REPEAT, t.repeat || '')}</select></label>
    </div>
    ${S.terms.length ? `<label class="field">ภาคเรียน<select class="input" id="f-term-task" ${dis}>${options([['', 'ไม่ระบุ']].concat(S.terms.slice().reverse().map(x => [x.name, x.name])), t.term || '')}</select></label>` : ''}
    <label class="field">แท็ก (คั่นด้วยจุลภาค สีโน้ตใช้ตามแท็กแรก)<input class="input" id="f-tags" list="tag-list" value="${esc(t.tags.join(', '))}" placeholder="เช่น ปพ., สอบปลายภาค" ${dis}></label>
    <label class="field">ที่มาของงาน<input class="input" id="f-source" value="${esc(t.source)}" placeholder="เช่น คำสั่งที่ 123/2569 หรือ ผู้มอบหมาย" ${dis}></label>
    <label class="field">ลิงก์เอกสาร<input class="input" id="f-link" type="url" value="${esc(t.link)}" placeholder="https://" ${dis}></label>
    <label class="field">รายละเอียด<textarea class="input" id="f-detail" ${dis}>${esc(t.detail)}</textarea></label>`;
}

const rangeFields = (start, due) => `
    <fieldset><legend>ช่วงวันทำงาน</legend>
      <div class="row2">
        <label class="field">เริ่ม<input class="input" id="f-start" type="date" value="${esc(start || '')}"></label>
        <label class="field">ถึง (กำหนดส่ง)<input class="input" id="f-due" type="date" value="${esc(due || '')}"></label>
      </div>
      <p class="foot">งานที่ทำวันเดียว ใส่เฉพาะช่องกำหนดส่ง</p>
    </fieldset>`;

function readFields() {
  const f = {
    title: $('#f-title').value.trim(),
    assignees: [...document.querySelectorAll('input[name="assignee"]:checked')].map(i => i.value),
    priority: $('#f-priority').value,
    repeat: $('#f-repeat').value,
    tags: $('#f-tags').value.split(',').map(s => s.trim()).filter(Boolean),
    source: $('#f-source').value.trim(),
    link: $('#f-link').value.trim(),
    detail: $('#f-detail').value.trim(),
  };
  if ($('#f-term-task')) f.term = $('#f-term-task').value;
  return f;
}

function checkFields(f, due) {
  if (!f.title) return 'กรุณาใส่ชื่องาน';
  if (!f.assignees.length) return 'เลือกผู้รับผิดชอบอย่างน้อย 1 คน';
  if (f.repeat && !due) return 'งานที่ทำซ้ำต้องมีกำหนดส่ง';
  if (f.link && !/^https?:\/\//i.test(f.link)) return 'ลิงก์ต้องขึ้นต้นด้วย http:// หรือ https://';
  return '';
}

function openNew() {
  const blank = { title: '', assignees: [S.me.email], priority: 'ปกติ', repeat: '', tags: [], source: '', link: '', detail: '', term: S.currentTerm };
  openDrawer('เพิ่มงานใหม่', `
    ${formFields(blank, `
    <label class="field">สถานะ<select class="input" id="f-status">${options(STATUS, 'รอดำเนินการ')}</select></label>
    ${rangeFields('', '')}`)}
    <div class="actions"><button class="btn primary" id="b-create">${icon('plus')}เพิ่มงาน</button></div>`);
  $('#b-create').onclick = async e => {
    const btn = e.currentTarget;
    const f = readFields();
    const rg = normRange($('#f-start').value, $('#f-due').value);
    const msg = rg.error || checkFields(f, rg.due);
    if (msg) return toast(msg, { error: true });
    btn.disabled = true;
    try {
      const r = await api('create', Object.assign(f, { status: $('#f-status').value, start: rg.start, due: rg.due }));
      upsert(r.task); fillFilters(); render(); closeDrawer();
      toast(savedMsg(r.task, rg.start, 'เพิ่มงานแล้ว'));
    } catch (err) { toast(err.message, { error: true }); btn.disabled = false; }
  };
}

function openTask(id) {
  const t = S.tasks.find(x => x.id === id);
  if (!t) return;
  const creator = userOf(t.createdBy).nick;
  openDrawer('รายละเอียดงาน', `
    <label class="field">สถานะ<select class="input" id="f-status">${options(STATUS, t.status)}</select></label>
    ${rangeFields(t.start, t.due)}
    ${formFields(t)}
    ${t.link ? `<a class="link-out" href="${esc(t.link)}" target="_blank" rel="noopener">${icon('link')}เปิดลิงก์เอกสาร</a>` : ''}
    <div class="actions"><button class="btn primary" id="b-save">บันทึกการแก้ไข</button></div>
    <div class="divider"></div>
    <section class="notes">
      <h3>บันทึกความคืบหน้า</h3>
      <ol class="timeline" id="timeline"><li class="n-sys"><span class="txt">กำลังโหลด…</span></li></ol>
      <label class="field">เพิ่มบันทึก<textarea class="input" id="f-note" placeholder="เช่น ส่งร่างให้หัวหน้าตรวจแล้ว รอตอบกลับ"></textarea></label>
      <div class="actions"><button class="btn" id="b-note">${icon('note')}เพิ่มบันทึก</button></div>
    </section>
    <div class="divider"></div>
    <p class="foot">สร้างโดย ${esc(creator)} เมื่อ ${esc(thaiStamp(t.createdAt))}${t.doneAt ? ` และ${esc(t.status)}โดย ${esc(userOf(t.doneBy).nick)} เมื่อ ${esc(thaiStamp(t.doneAt))}` : ''}</p>
    <div class="actions"><button class="btn danger" id="b-del">${icon('trash')}ลบงานนี้</button></div>`);

  loadNotes(id);

  $('#f-status').onchange = async e => {
    const sel = e.currentTarget;
    sel.disabled = true;
    try {
      const r = await api('setStatus', { id, status: sel.value });
      upsert(r.task);
      if (r.next) upsert(r.next);
      render(); loadNotes(id);
      toast(r.next ? `บันทึกสถานะแล้ว และสร้างรอบถัดไป ${thaiDate(r.next.due)}` : 'บันทึกสถานะแล้ว');
    } catch (err) { sel.value = t.status; toast(err.message, { error: true }); }
    sel.disabled = false;
  };

  // เปลี่ยนช่วงวันทำงานแล้วบันทึกทันที ประวัติการเปลี่ยนกำหนดส่งยังเก็บไว้ในไทม์ไลน์
  const startInput = $('#f-start'), dueInput = $('#f-due');
  startInput.onchange = dueInput.onchange = async () => {
    const cur = S.tasks.find(x => x.id === id);
    const curStart = cur.start || '', curDue = cur.due || '';
    const back = () => { startInput.value = curStart; dueInput.value = curDue; };
    if (startInput.value && !dueInput.value) return toast('ใส่วันกำหนดส่งเพื่อบันทึกช่วงวันทำงาน');
    const rg = normRange(startInput.value, dueInput.value);
    if (rg.error) { back(); return toast(rg.error, { error: true }); }
    startInput.value = rg.start;
    if (rg.due === curDue && rg.start === curStart) return;
    startInput.disabled = dueInput.disabled = true;
    try {
      upsert((await api('changeDue', { id, due: rg.due, start: rg.start })).task);
      render(); loadNotes(id);
      toast(savedMsg(S.tasks.find(x => x.id === id), rg.start, rg.due ? `เปลี่ยนวันทำงานเป็น ${rangeText(rg.start, rg.due)} แล้ว` : 'ยกเลิกกำหนดส่งแล้ว'));
    } catch (err) { back(); render(); toast(err.message, { error: true }); }
    startInput.disabled = dueInput.disabled = false;
  };

  $('#b-save').onclick = async e => {
    const btn = e.currentTarget;
    const cur = S.tasks.find(x => x.id === id);
    const f = Object.assign(readFields(), { start: cur.start || '' });
    const msg = checkFields(f, cur.due);
    if (msg) return toast(msg, { error: true });
    btn.disabled = true;
    try {
      const r = await api('update', { id, fields: f });
      upsert(r.task); fillFilters(); render(); loadNotes(id);
      toast('บันทึกการแก้ไขแล้ว');
    } catch (err) { toast(err.message, { error: true }); }
    btn.disabled = false;
  };

  $('#b-note').onclick = async e => {
    const btn = e.currentTarget;
    const text = $('#f-note').value.trim();
    if (!text) return toast('พิมพ์ข้อความก่อนกดเพิ่มบันทึก', { error: true });
    btn.disabled = true;
    try {
      await api('addNote', { id, text });
      const task = S.tasks.find(x => x.id === id);
      task.noteCount = (task.noteCount || 0) + 1;
      $('#f-note').value = '';
      render(); loadNotes(id);
    } catch (err) { toast(err.message, { error: true }); }
    btn.disabled = false;
  };

  const del = $('#b-del');
  if (del) del.onclick = async () => {
    if (!confirm(`ลบงาน "${t.title}" และบันทึกทั้งหมดของงานนี้? ลบแล้วกู้คืนไม่ได้`)) return;
    del.disabled = true;
    try {
      await api('remove', { id });
      S.tasks = S.tasks.filter(x => x.id !== id);
      fillFilters(); render(); closeDrawer();
      toast('ลบงานแล้ว');
    } catch (err) { toast(err.message, { error: true }); del.disabled = false; }
  };
}

async function loadNotes(id) {
  const box = $('#timeline');
  if (!box) return;
  try {
    const notes = await api('notes', { id });
    if ($('#timeline') !== box) return;
    box.innerHTML = notes.length ? notes.map(n => {
      const cls = n.type === 'บันทึก' ? 'n-note' : n.type === 'กำหนดส่ง' ? 'n-due' : 'n-sys';
      return `<li class="${cls}"><div class="who">${esc(userOf(n.by).nick)} เวลา ${esc(thaiStamp(n.at))}</div><div class="txt">${esc(n.text)}</div></li>`;
    }).join('') : '<li class="n-sys"><span class="txt">ยังไม่มีบันทึก</span></li>';
  } catch (e) {
    box.innerHTML = `<li class="n-sys"><span class="txt">โหลดบันทึกไม่สำเร็จ: ${esc(e.message)}</span></li>`;
  }
}

/* ───────── ตั้งค่าระบบ (ผู้ดูแล) ───────── */
const ADMIN_TABS = [['users', 'ผู้ใช้งาน'], ['terms', 'ภาคเรียน'], ['holidays', 'วันหยุด'], ['notify', 'แจ้งเตือน']];
const WEEKDAYS = [[1, 'จันทร์'], [2, 'อังคาร'], [3, 'พุธ'], [4, 'พฤหัสบดี'], [5, 'ศุกร์'], [6, 'เสาร์'], [7, 'อาทิตย์']];
let adminTab = 'users';

async function openAdmin(tab) {
  adminTab = tab || adminTab;
  openDrawer('ตั้งค่าระบบ', `
    <div class="seg" role="tablist" aria-label="หมวดการตั้งค่า">${ADMIN_TABS.map(([k, l]) => `<button class="seg-b" role="tab" data-k="${k}">${l}</button>`).join('')}</div>
    <div id="adm" class="adm"><p class="foot">กำลังโหลด…</p></div>`);
  $('#dr-body .seg').onclick = e => {
    const b = e.target.closest('.seg-b');
    if (b && S.admin) { adminTab = b.dataset.k; renderAdmin(); }
  };
  markAdminTab();
  try {
    S.admin = await api('adminData');
    renderAdmin();
  } catch (e) {
    $('#adm').innerHTML = `<p class="foot">${esc(e.message)}</p>`;
  }
}

function markAdminTab() {
  document.querySelectorAll('.seg-b').forEach(b => b.setAttribute('aria-selected', String(b.dataset.k === adminTab)));
}

function renderAdmin(arg) {
  if (!$('#adm')) return;
  markAdminTab();
  ({ users: admUsers, terms: admTerms, holidays: admHolidays, notify: admNotify })[adminTab](arg);
}

async function adminSave(action, data, btn, msg) {
  if (btn) btn.disabled = true;
  try {
    S.admin = await api(action, data);
    renderAdmin();
    toast(msg);
    reload();
    return true;
  } catch (e) {
    toast(e.message, { error: true });
    if (btn) btn.disabled = false;
    return false;
  }
}

function admUsers(editEmail) {
  const A = S.admin;
  const u = editEmail ? A.users.find(x => x.email === editEmail) : null;
  $('#adm').innerHTML = `
    <div class="panel">
      <h3>${u ? `แก้ไขข้อมูล ${esc(u.nick)}` : 'เพิ่มผู้ใช้'}</h3>
      <label class="field">อีเมล Google ที่ใช้ล็อกอิน<input class="input" id="u-email" type="email" value="${esc(u ? u.email : '')}" ${u ? 'disabled' : ''} placeholder="name@gmail.com"></label>
      <div class="row2">
        <label class="field">ชื่อเล่น<input class="input" id="u-nick" value="${esc(u ? u.nick : '')}" maxlength="30" placeholder="ใช้แสดงในเว็บและ LINE"></label>
        <label class="field">ชื่อ-สกุล<input class="input" id="u-name" value="${esc(u ? u.name : '')}" maxlength="100"></label>
      </div>
      <div class="row2">
        <label class="field">บทบาท<select class="input" id="u-role">${options([['member', 'สมาชิก'], ['admin', 'ผู้ดูแลระบบ']], u ? u.role : 'member')}</select></label>
        <label class="field">สถานะ<select class="input" id="u-active">${options([['1', 'ใช้งาน'], ['0', 'ปิดการใช้งาน']], u && !u.active ? '0' : '1')}</select></label>
      </div>
      <p class="foot">ผู้ดูแลระบบจัดการผู้ใช้ ภาคเรียน วันหยุด และการแจ้งเตือนได้ ถ้ามีคนย้ายออก ให้ปิดการใช้งานแทนการลบ ชื่อในงานเก่าจะยังแสดงอยู่</p>
      <div class="actions">
        <button class="btn primary" id="u-save">${u ? 'บันทึก' : `${icon('plus')}เพิ่มผู้ใช้`}</button>
        ${u ? '<button class="btn" id="u-cancel">ยกเลิก</button>' : ''}
      </div>
    </div>
    <ul class="rows">${A.users.map(x => `
      <li class="${x.active ? '' : 'off'}">
        <span class="r-main">
          <span class="person" style="--c:${colorOf(x.email)}"><i></i><strong>${esc(x.nick)}</strong></span>
          <span class="r-sub">${esc(x.email)}${x.role === 'admin' ? '<span class="pill">ผู้ดูแลระบบ</span>' : ''}${x.active ? '' : '<span class="pill muted">ปิดการใช้งาน</span>'}</span>
        </span>
        <button class="btn ghost icon" data-edit="${esc(x.email)}" aria-label="แก้ไข ${esc(x.nick)}">${icon('pencil')}</button>
      </li>`).join('')}</ul>`;

  $('#adm .rows').onclick = e => {
    const b = e.target.closest('[data-edit]');
    if (b) { admUsers(b.dataset.edit); $('#u-nick').focus(); }
  };
  if (u) $('#u-cancel').onclick = () => admUsers();
  $('#u-save').onclick = e => {
    const email = $('#u-email').value.trim();
    const nick = $('#u-nick').value.trim();
    if (!email || !nick) return toast('กรุณาใส่อีเมลและชื่อเล่น', { error: true });
    adminSave('saveUser', {
      isNew: !u, email, nick,
      name: $('#u-name').value.trim(),
      role: $('#u-role').value,
      active: $('#u-active').value === '1',
    }, e.currentTarget, u ? 'บันทึกข้อมูลผู้ใช้แล้ว' : 'เพิ่มผู้ใช้แล้ว');
  };
}

function admTerms(editName) {
  const A = S.admin;
  const t = editName ? A.terms.find(x => x.name === editName) : null;
  const list = A.terms.slice().reverse();
  $('#adm').innerHTML = `
    <div class="panel">
      <h3>${t ? `แก้ไขภาคเรียน ${esc(t.name)}` : 'เพิ่มภาคเรียน'}</h3>
      <label class="field">ชื่อภาคเรียน<input class="input" id="t-name" value="${esc(t ? t.name : '')}" maxlength="20" placeholder="เช่น 1/2569 หรือ ฤดูร้อน/2569"></label>
      <div class="row2">
        <label class="field">วันเริ่ม<input class="input" id="t-start" type="date" value="${esc(t ? t.start : '')}"></label>
        <label class="field">วันสิ้นสุด<input class="input" id="t-end" type="date" value="${esc(t ? t.end : '')}"></label>
      </div>
      <p class="foot">งานใหม่จะเข้าภาคเรียนตามวันที่สร้างงาน งานที่สร้างช่วงปิดภาคเรียนจะเข้าภาคเรียนถัดไป ส่วนงานที่ยังไม่ปิดจะแสดงต่อในทุกภาคเรียนจนกว่าจะปิดงาน</p>
      <div class="actions">
        <button class="btn primary" id="t-save">${t ? 'บันทึก' : `${icon('plus')}เพิ่มภาคเรียน`}</button>
        ${t ? '<button class="btn" id="t-cancel">ยกเลิก</button>' : ''}
      </div>
    </div>
    <ul class="rows">${list.length ? list.map(x => `
      <li>
        <span class="r-main">
          <span class="r-sub"><strong>ภาคเรียน ${esc(x.name)}</strong>${x.name === A.currentTerm ? '<span class="pill">ปัจจุบัน</span>' : ''}</span>
          <span class="range" data-term="${esc(x.name)}">
            <input class="input" type="date" data-k="start" value="${esc(x.start)}" aria-label="วันเริ่มภาคเรียน ${esc(x.name)}">
            <span>ถึง</span>
            <input class="input" type="date" data-k="end" value="${esc(x.end)}" aria-label="วันสิ้นสุดภาคเรียน ${esc(x.name)}">
          </span>
        </span>
        <button class="btn ghost icon" data-edit="${esc(x.name)}" aria-label="เปลี่ยนชื่อภาคเรียน ${esc(x.name)}" title="เปลี่ยนชื่อ">${icon('pencil')}</button>
        <button class="btn ghost icon" data-del="${esc(x.name)}" aria-label="ลบภาคเรียน ${esc(x.name)}">${icon('trash')}</button>
      </li>`).join('') : '<li class="empty-row">ยังไม่มีภาคเรียน เพิ่มภาคเรียนปัจจุบันก่อน งานเดิมทั้งหมดจะถูกจัดเข้าภาคเรียนให้อัตโนมัติ</li>'}</ul>`;

  $('#adm .rows').onclick = e => {
    const ed = e.target.closest('[data-edit]');
    const del = e.target.closest('[data-del]');
    if (ed) { admTerms(ed.dataset.edit); $('#t-name').focus(); }
    if (del && confirm(`ลบภาคเรียน ${del.dataset.del}? ลบได้เฉพาะภาคเรียนที่ยังไม่มีงาน`)) {
      adminSave('deleteTerm', { name: del.dataset.del }, del, 'ลบภาคเรียนแล้ว');
    }
  };
  // แก้วันที่ในแถวได้เลย เปลี่ยนแล้วบันทึกทันที
  $('#adm .rows').onchange = async e => {
    const box = e.target.closest('.range[data-term]');
    if (!box) return;
    const name = box.dataset.term;
    const start = box.querySelector('[data-k="start"]').value, end = box.querySelector('[data-k="end"]').value;
    let ok = false;
    if (!start || !end) toast('ภาคเรียนต้องมีทั้งวันเริ่มและวันสิ้นสุด', { error: true });
    else if (start > end) toast('วันเริ่มต้องไม่หลังวันสิ้นสุด', { error: true });
    else ok = await adminSave('saveTerm', { name, start, end, original: name }, e.target, `บันทึกวันที่ภาคเรียน ${name} แล้ว`);
    if (!ok && adminTab === 'terms') admTerms();
  };
  if (t) $('#t-cancel').onclick = () => admTerms();
  $('#t-save').onclick = e => {
    const data = { name: $('#t-name').value.trim(), start: $('#t-start').value, end: $('#t-end').value, original: t ? t.name : '' };
    if (!data.name || !data.start || !data.end) return toast('กรุณาใส่ชื่อ วันเริ่ม และวันสิ้นสุด', { error: true });
    if (data.start > data.end) return toast('วันเริ่มต้องไม่หลังวันสิ้นสุด', { error: true });
    adminSave('saveTerm', data, e.currentTarget, t ? 'บันทึกภาคเรียนแล้ว' : 'เพิ่มภาคเรียนแล้ว');
  };
}

function admHolidays() {
  const A = S.admin;
  const today = todayISO();
  const upcoming = A.holidays.filter(h => h.date >= today);
  const past = A.holidays.length - upcoming.length;
  $('#adm').innerHTML = `
    <div class="panel">
      <h3>เพิ่มวันหยุด</h3>
      <div class="row2">
        <label class="field">วันที่<input class="input" id="h-date" type="date"></label>
        <label class="field">ชื่อวันหยุด<input class="input" id="h-name" maxlength="100" placeholder="เช่น วันปิยมหาราช"></label>
      </div>
      <p class="foot">วันเสาร์และอาทิตย์ระบบข้ามให้อยู่แล้ว เพิ่มเองเฉพาะวันที่วิทยาลัยหยุดเพิ่ม ระบบไม่ส่งแจ้งเตือนรายวันในวันหยุด งานที่ตรงกับวันหยุดจะแจ้งล่วงหน้าในวันทำการสุดท้ายก่อนหยุด</p>
      <div class="actions"><button class="btn primary" id="h-save">${icon('plus')}เพิ่มวันหยุด</button></div>
    </div>
    <div class="panel">
      <h3>วันหยุดราชการจากปฏิทิน Google</h3>
      <p class="foot">ระบบดึงวันหยุดนักขัตฤกษ์ที่ยังไม่มีในรายการมาเติมให้เองทุกวันที่ 1 ของเดือน กดปุ่มนี้เมื่อต้องการดึงทันที</p>
      <div class="actions"><button class="btn" id="h-sync">${icon('reload')}ดึงวันหยุดตอนนี้</button></div>
    </div>
    <ul class="rows">${upcoming.length ? upcoming.map(h => `
      <li>
        <span class="r-main"><strong>${esc(h.name)}</strong><span class="r-sub">${TH_DAYNAME[new Date(h.date + 'T00:00:00').getDay()]}ที่ ${thaiDateY(h.date)}</span></span>
        <button class="btn ghost icon" data-del="${esc(h.date)}" aria-label="ลบวันหยุด ${esc(h.name)}">${icon('trash')}</button>
      </li>`).join('') : '<li class="empty-row">ยังไม่มีวันหยุดที่จะถึง</li>'}</ul>
    ${past ? `<p class="foot">วันหยุดที่ผ่านไปแล้ว ${past} วัน ไม่แสดงในรายการ</p>` : ''}`;

  $('#adm .rows').onclick = e => {
    const del = e.target.closest('[data-del]');
    if (del) adminSave('deleteHoliday', { date: del.dataset.del }, del, 'ลบวันหยุดแล้ว');
  };
  $('#h-sync').onclick = async e => {
    const btn = e.currentTarget;
    btn.disabled = true;
    try {
      const r = await api('syncHolidays');
      S.admin = r.admin;
      renderAdmin();
      toast(r.added ? `เพิ่มวันหยุด ${r.added} วันแล้ว` : 'วันหยุดในรายการครบแล้ว ไม่มีวันใหม่');
    } catch (err) { toast(err.message, { error: true }); btn.disabled = false; }
  };
  $('#h-save').onclick = e => {
    const date = $('#h-date').value, name = $('#h-name').value.trim();
    if (!date || !name) return toast('กรุณาใส่วันที่และชื่อวันหยุด', { error: true });
    adminSave('saveHoliday', { date, name }, e.currentTarget, 'เพิ่มวันหยุดแล้ว');
  };
}

function admNotify() {
  const A = S.admin, st = A.settings;
  const hours = Array.from({ length: 24 }, (_, h) => [String(h), `${pad(h)}:00 น.`]);
  $('#adm').innerHTML = `
    <div class="panel">
      <h3>เวลาส่งแจ้งเตือน</h3>
      <div class="row2">
        <label class="field">แจ้งเตือนรายวัน (วันทำการ)<select class="input" id="s-dh">${options(hours, String(st.dailyHour))}</select></label>
        <label class="field">แจ้งงานที่จะครบกำหนดภายใน<select class="input" id="s-soon">${options([1, 2, 3, 5, 7].map(n => [String(n), `${n} วัน`]), String(st.dueSoonDays))}</select></label>
      </div>
      <div class="row2">
        <label class="field">สรุปรายสัปดาห์ทุกวัน<select class="input" id="s-wd">${options(WEEKDAYS.map(([v, l]) => [String(v), l]), String(st.weeklyDay))}</select></label>
        <label class="field">เวลาส่งสรุป<select class="input" id="s-wh">${options(hours, String(st.weeklyHour))}</select></label>
      </div>
      <label class="field">ลิงก์หน้าเว็บนี้ (แนบท้ายข้อความ LINE)<input class="input" id="s-url" type="url" value="${esc(st.webUrl)}" placeholder="https://ชื่อผู้ใช้.github.io/ชื่อ-repo/"></label>
      <p class="foot">${A.triggersOn ? 'ระบบตั้งเวลาส่งแล้ว' : 'ยังไม่ได้ตั้งเวลาส่ง กดบันทึกเพื่อเริ่มส่งแจ้งเตือนตามเวลา'}</p>
      <div class="actions">
        <button class="btn primary" id="s-save">บันทึกเวลาส่ง</button>
        ${st.webUrl ? '' : '<button class="btn" id="s-here">ใช้ลิงก์ของหน้านี้</button>'}
      </div>
    </div>
    <div class="panel">
      <h3>รหัสเชื่อมต่อ LINE</h3>
      <label class="field">Channel access token<input class="input" id="s-token" type="password" autocomplete="off" placeholder="${A.tokenSet ? 'ใส่แล้ว วางรหัสใหม่เมื่อต้องการเปลี่ยน' : 'วางรหัสจาก LINE Developers'}"></label>
      <div class="actions"><button class="btn" id="s-token-save">บันทึกรหัส</button></div>
    </div>
    <div class="panel" id="line-status"><p class="foot">กำลังตรวจสถานะ LINE…</p></div>
    <div class="panel">
      <h3>ดูตัวอย่างข้อความ</h3>
      <p class="foot">ดูตัวอย่างได้ฟรี ไม่ใช้โควตาข้อความ</p>
      <div class="actions"><button class="btn" id="pv-daily">ข้อความรายวัน</button><button class="btn" id="pv-weekly">สรุปรายสัปดาห์</button></div>
      <pre class="preview" id="pv-box" hidden></pre>
    </div>
    <div class="panel">
      <h3>ส่งตอนนี้</h3>
      <p class="foot">ใช้สำหรับทดสอบ การส่งแต่ละครั้งใช้โควตาเท่ากับจำนวนสมาชิกในกลุ่ม</p>
      <div class="actions"><button class="btn" id="send-daily">${icon('send')}ส่งข้อความรายวัน</button><button class="btn" id="send-weekly">${icon('send')}ส่งสรุปรายสัปดาห์</button></div>
    </div>`;

  const here = $('#s-here');
  if (here) here.onclick = () => { $('#s-url').value = location.origin + location.pathname.replace(/index\.html$/, ''); };
  $('#s-save').onclick = e => adminSave('saveSettings', {
    dailyHour: $('#s-dh').value, dueSoonDays: $('#s-soon').value,
    weeklyDay: $('#s-wd').value, weeklyHour: $('#s-wh').value,
    webUrl: $('#s-url').value.trim(),
  }, e.currentTarget, 'บันทึกเวลาส่งแล้ว');
  $('#s-token-save').onclick = e => {
    const token = $('#s-token').value.trim();
    if (!token) return toast('วางรหัสก่อนกดบันทึก', { error: true });
    adminSave('setLineToken', { token }, e.currentTarget, 'บันทึกรหัส LINE แล้ว');
  };

  const preview = async kind => {
    const box = $('#pv-box');
    box.hidden = false; box.textContent = 'กำลังสร้างข้อความ…';
    try { const p = await api('preview'); box.textContent = p[kind]; }
    catch (err) { box.textContent = err.message; }
  };
  $('#pv-daily').onclick = () => preview('daily');
  $('#pv-weekly').onclick = () => preview('weekly');

  const send = async (kind, btn) => {
    if (!confirm('ส่งข้อความเข้ากลุ่ม LINE ตอนนี้? จะใช้โควตาข้อความของเดือนนี้')) return;
    btn.disabled = true;
    try {
      const r = await api('sendNow', { kind });
      toast(r.sent ? 'ส่งข้อความแล้ว' : 'วันนี้ไม่มีงานที่ต้องแจ้ง จึงไม่ได้ส่ง');
      lineStatus();
    } catch (err) { toast(err.message, { error: true }); }
    btn.disabled = false;
  };
  $('#send-daily').onclick = e => send('daily', e.currentTarget);
  $('#send-weekly').onclick = e => send('weekly', e.currentTarget);

  lineStatus();
}

async function lineStatus(action) {
  const box = $('#line-status');
  if (!box) return;
  try {
    const s = await api(action || 'lineStatus');
    if (!$('#line-status')) return;
    const parts = ['<h3>กลุ่ม LINE</h3>'];
    if (!s.tokenSet) {
      parts.push('<p class="foot">ใส่รหัสเชื่อมต่อ LINE ด้านบนก่อน</p>');
    } else {
      parts.push(s.groupId
        ? `<p>ส่งแจ้งเตือนเข้ากลุ่ม <strong>${esc(s.groupName || 'ไม่ทราบชื่อกลุ่ม')}</strong></p>`
        : '<p>ยังไม่ได้เลือกกลุ่ม เชิญบอทเข้ากลุ่ม LINE ของฝ่ายแล้วกลับมาที่หน้านี้</p>');
      if (s.seenGroupId) {
        parts.push(`<p>พบกลุ่ม <strong>${esc(s.seenGroupName || 'ไม่ทราบชื่อ')}</strong> ตรวจว่าเป็นกลุ่มของฝ่ายก่อนกดใช้</p>
          <div class="actions"><button class="btn primary" id="b-use-group">ใช้กลุ่มนี้</button></div>`);
      }
      if (s.used != null) {
        const pct = s.quota ? Math.min(100, Math.round(s.used / s.quota * 100)) : 0;
        parts.push(`<p class="foot">เดือนนี้ใช้ไป ${s.used}${s.quota ? ` จาก ${s.quota}` : ''} ข้อความ</p>` +
          (s.quota ? `<div class="meter" role="img" aria-label="ใช้โควตาไป ${pct}%"><span style="width:${pct}%"></span></div>` : ''));
      }
      if (s.error) parts.push(`<p class="foot">${esc(s.error)}</p>`);
    }
    box.innerHTML = parts.join('');
    const use = $('#b-use-group');
    if (use) use.onclick = () => { use.disabled = true; lineStatus('useSeenGroup'); };
  } catch (e) {
    box.innerHTML = `<h3>กลุ่ม LINE</h3><p class="foot">${esc(e.message)}</p>`;
  }
}

/* ───────── แจ้งผล ───────── */
let toastTimer = null;
function toast(msg, opt = {}) {
  const el = $('#toast');
  clearTimeout(toastTimer);
  el.className = 'toast' + (opt.error ? ' err' : '');
  el.innerHTML = `<span>${esc(msg)}</span>` + (opt.action ? `<button class="btn">${esc(opt.action)}</button>` : '');
  el.hidden = false;
  if (opt.action) el.querySelector('button').onclick = async () => {
    el.hidden = true;
    try { await opt.onAction(); } catch (e) { toast(e.message, { error: true }); }
  };
  toastTimer = setTimeout(() => { el.hidden = true; }, opt.action ? 6000 : opt.error ? 5000 : 2500);
}

/* ───────── เชื่อมเหตุการณ์ ───────── */
$('#b-admin').innerHTML = icon('gear');
$('#b-reload').innerHTML = icon('reload');
$('#b-logout').innerHTML = icon('logout');
$('#dr-close').innerHTML = icon('x');
$('#b-new').innerHTML = icon('plus') + 'เพิ่มงาน';
$('#search-ic').innerHTML = icon('search');

$('#b-new').onclick = () => openNew();

document.querySelector('.tabs').addEventListener('click', e => {
  const b = e.target.closest('.tab');
  if (!b) return;
  S.tab = b.dataset.tab; render();
});
$('#f-user').onchange = e => { S.fUser = e.target.value; render(); };
$('#tag-chips').onclick = e => {
  if (e.target.closest('#b-colors')) return openColors();
  const b = e.target.closest('.chip');
  if (!b) return;
  S.fTag = S.fTag === b.dataset.tag ? '' : b.dataset.tag;
  renderChips(); render();
};

// ลากโน้ตไปวางในช่องสถานะอื่นเพื่อเปลี่ยนสถานะ
// เมาส์: กดแล้วลากได้เลย จอสัมผัส: แตะค้างไว้ครู่หนึ่งแล้วลาก (ปัดเร็ว ๆ ยังเป็นการเลื่อนหน้าตามปกติ)
const drag = { el: null, id: null, pid: null, touch: false, active: false, ghost: null, col: null, timer: null, x: 0, y: 0, x0: 0, y0: 0, ox: 0, oy: 0, justDragged: false };
const clearOver = () => document.querySelectorAll('.col.is-over').forEach(c => c.classList.remove('is-over'));

function dragPlace() {
  drag.ghost.style.transform = `translate(${drag.x - drag.ox}px,${drag.y - drag.oy}px) rotate(3deg)`;
  const under = document.elementFromPoint(drag.x, drag.y);
  const col = under && under.closest('.col[data-status]');
  if (col !== drag.col) { clearOver(); if (col) col.classList.add('is-over'); drag.col = col; }
}

function dragStart() {
  if (!drag.el || !drag.el.isConnected) return dragEnd();
  const r = drag.el.getBoundingClientRect();
  drag.ox = drag.x0 - r.left; drag.oy = drag.y0 - r.top;
  const g = drag.el.cloneNode(true);
  g.classList.add('ghost');
  g.style.width = r.width + 'px'; g.style.height = r.height + 'px';
  document.body.append(g);
  drag.ghost = g; drag.active = true;
  drag.el.classList.add('is-dragging');
  document.body.classList.add('dragging');
  dragPlace();
  // ลากไปใกล้ขอบบนหรือล่างของจอ ให้หน้าเลื่อนตาม
  const tick = () => {
    if (!drag.active) return;
    const m = 70, h = innerHeight;
    const v = drag.y < m ? drag.y - m : drag.y > h - m ? drag.y - (h - m) : 0;
    if (v) { scrollBy(0, v * 0.25); dragPlace(); }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function dragEnd() {
  clearTimeout(drag.timer);
  if (drag.ghost) drag.ghost.remove();
  document.querySelectorAll('.note.is-dragging').forEach(n => n.classList.remove('is-dragging'));
  document.body.classList.remove('dragging');
  clearOver();
  Object.assign(drag, { el: null, id: null, pid: null, active: false, ghost: null, col: null });
}

$('#list').addEventListener('pointerdown', e => {
  if (e.button || drag.el) return;
  const n = e.target.closest('.note');
  if (!n) return;
  Object.assign(drag, { el: n, id: n.dataset.id, pid: e.pointerId, touch: e.pointerType !== 'mouse', x: e.clientX, y: e.clientY, x0: e.clientX, y0: e.clientY });
  if (drag.touch) drag.timer = setTimeout(dragStart, 320);
});
addEventListener('pointermove', e => {
  if (!drag.el || e.pointerId !== drag.pid) return;
  drag.x = e.clientX; drag.y = e.clientY;
  if (!drag.active) {
    const moved = Math.hypot(drag.x - drag.x0, drag.y - drag.y0);
    if (drag.touch) { if (moved > 10) dragEnd(); return; }
    if (moved < 6) return;
    dragStart();
    if (!drag.active) return;
  }
  dragPlace();
});
addEventListener('pointerup', e => {
  if (!drag.el || e.pointerId !== drag.pid) return;
  const id = drag.id, status = drag.active && drag.col ? drag.col.dataset.status : '';
  if (drag.active) { drag.justDragged = true; setTimeout(() => { drag.justDragged = false; }, 0); }
  dragEnd();
  if (status) moveTo(id, status);
});
addEventListener('pointercancel', e => { if (e.pointerId === drag.pid) dragEnd(); });
// ระหว่างลากบนจอสัมผัส ไม่ให้หน้าเลื่อนเอง และไม่ให้เมนูกดค้างของเบราว์เซอร์ขึ้น
document.addEventListener('touchmove', e => { if (drag.active) e.preventDefault(); }, { passive: false });
$('#list').addEventListener('contextmenu', e => { if (drag.el && drag.touch) e.preventDefault(); });
// ปล่อยโน้ตแล้วไม่นับเป็นการกดเปิดงาน
$('#list').addEventListener('click', e => { if (drag.justDragged) { e.stopPropagation(); e.preventDefault(); } }, true);
$('#f-q').oninput = e => { S.q = e.target.value.trim(); render(); };

$('#list').addEventListener('click', e => {
  if (e.target.closest('.fold-b')) {
    S.foldX = !S.foldX;
    store.set('local', 'wp.foldx', S.foldX);
    return render();
  }
  const b = e.target.closest('button[data-act]');
  if (!b) return;
  const id = b.closest('.task').dataset.id;
  if (b.dataset.act === 'toggle') toggle(id);
  else openTask(id);
});

$('#b-reload').onclick = reload;
$('#b-logout').onclick = logout;
$('#b-admin').onclick = () => openAdmin();
$('#f-term').onchange = async e => {
  S.term = e.target.value;
  S.termPicked = true;
  renderSkeleton();
  await reload();
};
$('#dr-close').onclick = closeDrawer;
$('#backdrop').onclick = closeDrawer;
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });
document.addEventListener('visibilitychange', () => {
  // กลับมาที่หน้านี้หลังทิ้งไว้เกิน 2 นาทีจึงโหลดใหม่ ไม่โหลดทุกครั้งที่สลับแท็บ
  if (document.visibilityState === 'visible' && S.synced && $('#drawer').hidden && Date.now() - S.loadedAt > 120000) reload();
});

/* ───────── เริ่มทำงาน: แสดงข้อมูลที่เก็บไว้ก่อน แล้วอัปเดตตามหลัง ───────── */
$('#today-line').textContent = `${TH_DAYNAME[new Date().getDay()]}ที่ ${thaiDateY(todayISO())}`;
// เบราว์เซอร์ในแอป LINE เข้าสู่ระบบ Google ไม่ได้ ที่อยู่ที่มี openExternalBrowser=1 จะทำให้ LINE เปิดในเบราว์เซอร์ของเครื่องแทน
if (IN_LINE && !/[?&]openExternalBrowser=1/.test(location.search)) location.replace(REDIRECT_URI + '?openExternalBrowser=1');
$('#login-inapp').hidden = !IN_APP;
$('#b-redirect').hidden = !MOBILE;
$('#gsi-btn').hidden = MOBILE;
$('#b-redirect').onclick = () => redirectLogin(false);

const back = takeRedirectResult();
if (back === 'error') $('#login-msg').textContent = 'เข้าสู่ระบบไม่สำเร็จ ลองอีกครั้ง';
const savedToken = back === 'ok' ? null : store.get('session', TOKEN_KEY);
if (savedToken) {
  setToken(savedToken);
  if (Date.now() / 1000 >= tokenExp - 60) idToken = null;
}
const cached = store.get('local', CACHE_KEY);
if (cached && cached.me && Array.isArray(cached.tasks)) {
  S.me = cached.me; S.booted = true;
  applyLoad(cached);
  hideLogin();
  $('#app').hidden = false;
  paint();
  setSync('กำลังอัปเดตข้อมูล…');
}
if (idToken) boot();
else if (!back && !IN_APP && store.get('local', 'wp.redir') && !store.get('session', 'wp.tried')) {
  // เคยเข้าสู่ระบบแบบเปิดหน้า Google ไว้ ลองต่ออายุเงียบ ๆ หนึ่งครั้งต่อการเปิดแท็บ
  store.set('session', 'wp.tried', true);
  redirectLogin(true);
} else if (S.booted && (MOBILE || back === 'silent')) showLogin('เข้าสู่ระบบเพื่ออัปเดตข้อมูล', true);
