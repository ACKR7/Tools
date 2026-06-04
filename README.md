# Tools
# Hello 👋


<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>WedZ - ระบบเช่าเว็บไซต์</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;600;700&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Sarabun', sans-serif;
            -webkit-tap-highlight-color: transparent;
        }

        :root {
            --primary: #000000;
            --secondary: #111111;
            --accent: #ffffff;
            --border: #333333;
            --text: #e2e8f0;
            --text-muted: #94a3b8;
            --green: #22c55e;
            --blue: #3b82f6;
            --purple: #a855f7;
            --gold: #f59e0b;
            --red: #ef4444;
        }

        html { scroll-behavior: smooth; }
        body { background-color: #000; color: var(--text); min-height: 100vh; overflow-x: hidden; }

        /* ===== NAVBAR ===== */
        .navbar {
            position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
            background: rgba(0,0,0,0.92); backdrop-filter: blur(15px);
            border-bottom: 1px solid var(--border); padding: 0 20px;
        }
        .navbar-inner {
            max-width: 1200px; margin: 0 auto;
            display: flex; justify-content: space-between; align-items: center; height: 60px;
        }
        .navbar-brand { font-size: 1.4rem; font-weight: 700; color: var(--accent); letter-spacing: 2px; cursor: pointer; }
        .navbar-links { display: flex; gap: 20px; list-style: none; align-items: center; }
        .navbar-links a { color: var(--text-muted); text-decoration: none; font-size: 0.9rem; transition: color 0.3s; }
        .navbar-links a:hover { color: var(--accent); }
        .navbar-cta {
            background: var(--accent); color: var(--primary) !important;
            padding: 8px 18px; border-radius: 8px; font-weight: 600 !important;
            transition: transform 0.2s, box-shadow 0.2s; text-decoration: none;
        }
        .navbar-cta:hover { transform: translateY(-1px); box-shadow: 0 4px 15px rgba(255,255,255,0.2); }
        .navbar-btn {
            background: rgba(255,255,255,0.08); border: 1px solid var(--border);
            color: var(--text); padding: 8px 18px; border-radius: 8px;
            font-weight: 600; font-size: 0.85rem; cursor: pointer; transition: all 0.2s;
        }
        .navbar-btn:hover { background: rgba(255,255,255,0.15); }
        .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 5px; }
        .hamburger span { width: 25px; height: 2px; background: white; transition: 0.3s; border-radius: 2px; }
        @media (max-width: 480px) {
            .navbar-links { display: none; }
            .hamburger { display: flex; }
            .navbar-links.open {
                display: flex; flex-direction: column; position: absolute; top: 60px; left: 0; right: 0;
                background: rgba(0,0,0,0.98); padding: 20px; gap: 15px; border-bottom: 1px solid var(--border);
            }
        }

        /* ===== PAGES ===== */
        .page { display: none; min-height: 100vh; padding-top: 80px; }
        .page.active { display: block; }

        /* ===== HERO ===== */
        .hero {
            min-height: calc(100vh - 60px); display: flex; justify-content: center;
            align-items: center; padding: 80px 20px 60px; position: relative; overflow: hidden;
        }
        .hero-bg-particles { position: absolute; top: 0; left: 0; right: 0; bottom: 0; pointer-events: none; z-index: 0; }
        .particle {
            position: absolute; width: 3px; height: 3px; background: rgba(255,255,255,0.1);
            border-radius: 50%; animation: float linear infinite;
        }
        @keyframes float {
            0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-10vh) rotate(720deg); opacity: 0; }
        }
        .hero-content { text-align: center; z-index: 1; max-width: 700px; }
        .hero-logo { font-size: 80px; margin-bottom: 10px; animation: pulse 2s ease-in-out infinite; }
        @keyframes pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.1)} }
        .hero-title {
            font-size: 3rem; font-weight: 700; margin-bottom: 15px; letter-spacing: 3px;
            background: linear-gradient(135deg, #fff 0%, #94a3b8 100%);
            -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .hero-subtitle { font-size: 1.1rem; color: var(--text-muted); line-height: 1.8; margin-bottom: 35px; max-width: 600px; margin: 0 auto 35px; }
        .hero-subtitle span { color: var(--green); font-weight: 600; }
        .hero-features { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; max-width: 600px; margin: 0 auto 40px; }
        .hero-feature-box {
            background: var(--secondary); border: 1px solid var(--border); padding: 20px 10px;
            border-radius: 12px; display: flex; flex-direction: column; align-items: center; gap: 8px; transition: transform 0.3s;
        }
        .hero-feature-box:hover { transform: translateY(-3px); border-color: #555; }
        .hero-feature-icon { font-size: 28px; }
        .hero-feature-text { font-size: 0.78rem; color: var(--text-muted); }
        .hero-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .btn {
            padding: 14px 28px; border: none; border-radius: 10px; font-size: 1rem;
            font-weight: 600; cursor: pointer; transition: all 0.3s;
            display: inline-flex; align-items: center; gap: 8px; text-decoration: none;
        }
        .btn-primary { background: var(--accent); color: var(--primary); }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(255,255,255,0.2); }
        .btn-outline { background: transparent; border: 1px solid var(--border); color: var(--text); }
        .btn-outline:hover { border-color: var(--text-muted); transform: translateY(-2px); }
        .btn-whatsapp { background: #25d366; color: white; }
        .btn-whatsapp:hover { background: #1da851; transform: translateY(-2px); }

        /* ===== AUTH ===== */
        .auth-page { min-height: calc(100vh - 60px); display: flex; justify-content: center; align-items: center; padding: 40px 20px; }
        .auth-card {
            background: #111; border: 1px solid var(--border); border-radius: 20px;
            padding: 40px 30px; width: 100%; max-width: 420px; animation: modalIn 0.3s ease;
        }
        @keyframes modalIn { from { opacity: 0; transform: translateY(20px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .auth-card h2 { font-size: 1.8rem; font-weight: 700; text-align: center; margin-bottom: 8px; }
        .auth-card .auth-desc { text-align: center; color: var(--text-muted); font-size: 0.9rem; margin-bottom: 25px; }
        .auth-form { display: block; }
        .auth-form.hidden { display: none; }
        .form-group { margin-bottom: 15px; }
        .form-group label { display: block; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 6px; font-weight: 600; }
        .auth-input {
            width: 100%; padding: 14px 16px; background-color: #0a0a0a; border: 1px solid var(--border);
            color: white; border-radius: 10px; outline: none; font-size: 1rem; transition: border-color 0.3s;
        }
        .auth-input:focus { border-color: var(--blue); }
        .auth-input::placeholder { color: #555; }
        select.auth-input {
            appearance: none; cursor: pointer;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23999' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
            background-repeat: no-repeat; background-position: right 12px center; padding-right: 35px;
        }
        .auth-btn-full {
            width: 100%; padding: 14px; border: none; border-radius: 10px;
            cursor: pointer; font-weight: 600; font-size: 1rem; transition: all 0.2s;
        }
        .auth-btn-login { background: var(--accent); color: var(--primary); }
        .auth-btn-login:hover { box-shadow: 0 4px 15px rgba(255,255,255,0.2); }
        .auth-btn-secondary {
            background: transparent; border: 1px solid var(--border); color: var(--text); margin-top: 10px;
            display: flex; align-items: center; justify-content: center; gap: 6px;
        }
        .auth-btn-secondary:hover { border-color: var(--text-muted); }
        .auth-divider { display: flex; align-items: center; margin: 20px 0; gap: 15px; }
        .auth-divider::before, .auth-divider::after { content: ''; flex: 1; height: 1px; background: var(--border); }
        .auth-divider span { color: var(--text-muted); font-size: 0.85rem; }
        .auth-switch { text-align: center; margin-top: 18px; font-size: 0.88rem; color: var(--text-muted); }
        .auth-switch a { color: var(--blue); text-decoration: none; font-weight: 600; cursor: pointer; }
        .auth-switch a:hover { text-decoration: underline; }
        .admin-login-btn { background: linear-gradient(135deg, var(--gold), #e08e0a); color: #000; font-weight: 700; }
        .admin-login-btn:hover { box-shadow: 0 4px 15px rgba(245,158,11,0.3); }
        .admin-login-row { display: flex; gap: 10px; margin-top: 5px; }
        .admin-login-row .auth-btn-full { flex: 1; }

        /* ===== DASHBOARD ===== */
        .dashboard { max-width: 1200px; margin: 0 auto; padding: 30px 20px 80px; }
        .dash-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; flex-wrap: wrap; gap: 15px; }
        .dash-header h2 { font-size: 1.8rem; font-weight: 700; }
        .dash-header .user-info { display: flex; align-items: center; gap: 12px; }
        .user-avatar {
            width: 40px; height: 40px; border-radius: 50%;
            background: linear-gradient(135deg, var(--purple), var(--blue));
            display: flex; align-items: center; justify-content: center;
            font-weight: 700; font-size: 1.1rem; color: white;
        }
        .user-name { font-weight: 600; font-size: 0.95rem; }
        .user-role { font-size: 0.75rem; color: var(--text-muted); background: rgba(255,255,255,0.05); padding: 2px 10px; border-radius: 12px; }
        .logout-btn {
            background: rgba(255,255,255,0.08); border: 1px solid var(--border);
            color: var(--red); padding: 8px 18px; border-radius: 8px;
            cursor: pointer; font-weight: 600; font-size: 0.85rem; transition: all 0.2s;
        }
        .logout-btn:hover { background: rgba(239,68,68,0.15); border-color: var(--red); }
        .dash-grid {
            display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px; margin-bottom: 30px;
        }
        .dash-card {
            background: var(--secondary); border: 1px solid var(--border);
            border-radius: 16px; padding: 25px; transition: transform 0.3s;
        }
        .dash-card:hover { transform: translateY(-3px); }
        .dash-card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
        .dash-card-title { font-size: 0.9rem; color: var(--text-muted); font-weight: 400; }
        .dash-card-icon { font-size: 1.5rem; }
        .dash-card-value { font-size: 2rem; font-weight: 700; margin-bottom: 5px; }
        .dash-card-sub { font-size: 0.85rem; color: var(--text-muted); }

        /* ===== STATUS BADGES ===== */
        .status-badge {
            display: inline-block; padding: 4px 12px; border-radius: 20px;
            font-size: 0.78rem; font-weight: 600;
        }
        .status-active { background: rgba(34,197,94,0.15); color: var(--green); }
        .status-pending { background: rgba(245,158,11,0.15); color: var(--gold); }
        .status-inactive { background: rgba(239,68,68,0.15); color: var(--red); }

        /* ===== MY WEBSITE ===== */
        .my-website-card {
            background: var(--secondary); border: 1px solid var(--border);
            border-radius: 16px; padding: 30px; margin-bottom: 20px;
        }
        .website-url-bar {
            display: flex; align-items: center; gap: 10px; margin-top: 15px;
            background: #0a0a0a; border: 1px solid var(--border); border-radius: 8px; padding: 10px 15px;
        }
        .website-url-bar input { flex: 1; background: none; border: none; color: var(--green); font-size: 0.9rem; outline: none; }
        .copy-btn {
            background: rgba(255,255,255,0.05); border: 1px solid var(--border);
            color: var(--text); padding: 6px 12px; border-radius: 6px;
            cursor: pointer; font-size: 0.82rem; transition: all 0.2s;
        }
        .copy-btn:hover { background: rgba(255,255,255,0.1); }
        .site-stats-row { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-bottom: 20px; margin-top: 15px; }
        .site-stat { background: #0a0a0a; border-radius: 12px; padding: 18px; text-align: center; }
        .site-stat-value { font-size: 1.6rem; font-weight: 700; }
        .site-stat-label { font-size: 0.82rem; color: var(--text-muted); margin-top: 5px; }
        .manage-actions { display: flex; gap: 10px; margin-top: 20px; flex-wrap: wrap; }
        .manage-actions .btn { flex: 1; text-align: center; min-width: 120px; }

        /* ===== PRODUCT MANAGER MODAL ===== */
        .pm-overlay {
            display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.9); backdrop-filter: blur(12px);
            z-index: 5000; justify-content: center; align-items: center;
            padding: 20px; overflow-y: auto;
        }
        .pm-overlay.active { display: flex; }
        .pm-modal {
            background: var(--secondary); border: 1px solid var(--border);
            border-radius: 20px; width: 100%; max-width: 820px;
            animation: modalIn 0.3s ease; position: relative;
            max-height: 92vh; overflow-y: auto;
        }
        .pm-modal::-webkit-scrollbar { width: 6px; }
        .pm-modal::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }

        .pm-header {
            padding: 22px 28px 18px; border-bottom: 1px solid var(--border);
            display: flex; justify-content: space-between; align-items: center;
            position: sticky; top: 0; background: var(--secondary); z-index: 5;
            border-radius: 20px 20px 0 0;
        }
        .pm-header h2 { font-size: 1.3rem; font-weight: 700; }
        .pm-header-actions { display: flex; gap: 10px; align-items: center; }
        .pm-close {
            background: none; border: none; color: var(--text-muted);
            font-size: 1.4rem; cursor: pointer; padding: 4px 8px; border-radius: 6px;
            transition: all 0.2s;
        }
        .pm-close:hover { color: var(--accent); background: rgba(255,255,255,0.05); }

        /* PM Tabs */
        .pm-tabs {
            display: flex; gap: 4px; padding: 12px 28px 0;
            border-bottom: 1px solid var(--border); overflow-x: auto; scrollbar-width: none;
        }
        .pm-tabs::-webkit-scrollbar { display: none; }
        .pm-tab {
            padding: 10px 18px; border-radius: 8px; font-size: 0.88rem; font-weight: 600;
            cursor: pointer; color: var(--text-muted); background: none; border: none;
            transition: all 0.2s; white-space: nowrap; display: flex; align-items: center; gap: 6px;
        }
        .pm-tab:hover { color: var(--text); background: rgba(255,255,255,0.04); }
        .pm-tab.active { color: var(--accent); background: rgba(255,255,255,0.08); }
        .pm-tab .badge {
            background: var(--green); color: #000; font-size: 0.7rem;
            padding: 1px 7px; border-radius: 10px; font-weight: 700;
        }

        /* PM Body */
        .pm-body { padding: 20px 28px 25px; }
        .pm-section { display: none; }
        .pm-section.active { display: block; }

        /* Product Grid */
        .pm-toolbar {
            display: flex; gap: 12px; align-items: center; margin-bottom: 18px; flex-wrap: wrap;
        }
        .pm-search {
            flex: 1; min-width: 200px; padding: 10px 14px;
            background: #0a0a0a; border: 1px solid var(--border); border-radius: 8px;
            color: var(--text); font-size: 0.9rem; outline: none;
        }
        .pm-search::placeholder { color: #555; }
        .pm-filter {
            padding: 10px 14px; background: #0a0a0a; border: 1px solid var(--border);
            border-radius: 8px; color: var(--text); font-size: 0.85rem;
            cursor: pointer; outline: none;
        }
        .pm-grid {
            display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            gap: 16px;
        }
        .pm-card {
            background: #0a0a0a; border: 1px solid var(--border);
            border-radius: 14px; padding: 18px; transition: all 0.25s;
            position: relative; overflow: hidden;
        }
        .pm-card:hover { transform: translateY(-3px); border-color: #444; }
        .pm-card-img {
            width: 100%; aspect-ratio: 16/10; object-fit: cover;
            border-radius: 8px; margin-bottom: 12px; background: #1a1a1a;
            display: flex; align-items: center; justify-content: center;
            color: var(--text-muted); font-size: 2.5rem;
        }
        .pm-card-img.has-img { font-size: 0; }
        .pm-card-img img { width: 100%; height: 100%; object-fit: cover; border-radius: 8px; }
        .pm-card-name { font-weight: 600; font-size: 0.95rem; margin-bottom: 4px; }
        .pm-card-cat { font-size: 0.75rem; color: var(--blue); margin-bottom: 8px; }
        .pm-card-price { font-size: 1.15rem; font-weight: 700; color: var(--green); }
        .pm-card-stock { font-size: 0.78rem; color: var(--text-muted); margin-top: 4px; }
        .pm-card-stock.low { color: var(--gold); }
        .pm-card-stock.out { color: var(--red); }
        .pm-card-actions {
            position: absolute; top: 10px; right: 10px; display: flex; gap: 4px; opacity: 0;
            transition: opacity 0.2s;
        }
        .pm-card:hover .pm-card-actions { opacity: 1; }
        .pm-card-action-btn {
            width: 32px; height: 32px; border-radius: 8px; border: none;
            cursor: pointer; font-size: 0.85rem; transition: all 0.2s;
            display: flex; align-items: center; justify-content: center;
        }
        .pm-card-action-btn.edit { background: rgba(59,130,246,0.2); color: var(--blue); }
        .pm-card-action-btn.edit:hover { background: rgba(59,130,246,0.4); }
        .pm-card-action-btn.delete { background: rgba(239,68,68,0.2); color: var(--red); }
        .pm-card-action-btn.delete:hover { background: rgba(239,68,68,0.4); }
        .pm-empty {
            text-align: center; padding: 60px 20px; color: var(--text-muted);
        }
        .pm-empty-icon { font-size: 3.5rem; margin-bottom: 12px; }
        .pm-empty p { font-size: 0.95rem; }

        /* PM Form */
        .pm-form-section { padding: 0; }
        .pm-form-header {
            display: flex; align-items: center; gap: 12px; margin-bottom: 22px;
            cursor: pointer; color: var(--text-muted); font-size: 0.9rem;
        }
        .pm-form-header:hover { color: var(--accent); }
        .pm-form-title { font-size: 1.1rem; font-weight: 600; color: var(--accent); }
        .pm-form-grid {
            display: grid; grid-template-columns: 1fr 1fr; gap: 18px;
        }
        @media (max-width: 600px) { .pm-form-grid { grid-template-columns: 1fr; } }
        .pm-form-group { margin-bottom: 0; }
        .pm-form-group label {
            display: block; font-size: 0.82rem; color: var(--text-muted);
            margin-bottom: 6px; font-weight: 600;
        }
        .pm-form-group input, .pm-form-group select, .pm-form-group textarea {
            width: 100%; padding: 11px 14px; background: #0a0a0a; border: 1px solid var(--border);
            color: var(--text); border-radius: 10px; outline: none; font-size: 0.92rem;
            font-family: inherit; transition: border-color 0.3s;
        }
        .pm-form-group input:focus, .pm-form-group select:focus, .pm-form-group textarea:focus {
            border-color: var(--blue);
        }
        .pm-form-group textarea { min-height: 80px; resize: vertical; }
        .pm-form-group.full-width { grid-column: 1 / -1; }
        .pm-form-footer {
            display: flex; gap: 12px; justify-content: flex-end; margin-top: 22px;
            padding-top: 18px; border-top: 1px solid var(--border);
        }

        /* Image upload area in form */
        .pm-img-upload {
            border: 2px dashed var(--border); border-radius: 12px;
            padding: 25px; text-align: center; cursor: pointer;
            transition: all 0.2s; margin-bottom: 10px; position: relative;
        }
        .pm-img-upload:hover { border-color: var(--blue); background: rgba(59,130,246,0.03); }
        .pm-img-upload input[type="file"] { display: none; position: absolute; }
        .pm-img-upload-icon { font-size: 2rem; margin-bottom: 6px; }
        .pm-img-upload-text { color: var(--text-muted); font-size: 0.85rem; }
        .pm-img-preview {
            max-width: 100%; max-height: 180px; border-radius: 8px;
            border: 1px solid var(--border); margin-top: 10px; display: none;
        }
        .pm-img-preview.show { display: block; }
        .pm-img-remove {
            position: absolute; top: 8px; right: 8px; background: rgba(239,68,68,0.9);
            color: #fff; border: none; border-radius: 50%; width: 26px; height: 26px;
            cursor: pointer; font-size: 0.8rem; display: none; align-items: center; justify-content: center;
        }
        .pm-img-remove.show { display: flex; }
        .pm-img-preview-wrap { position: relative; display: inline-block; }

        /* Confirm Dialog */
        .pm-confirm-overlay {
            display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.75); z-index: 6000;
            justify-content: center; align-items: center; padding: 20px;
        }
        .pm-confirm-overlay.active { display: flex; }
        .pm-confirm-box {
            background: var(--secondary); border: 1px solid var(--border);
            border-radius: 16px; padding: 30px; max-width: 380px; width: 100%;
            text-align: center; animation: modalIn 0.2s ease;
        }
        .pm-confirm-icon { font-size: 3rem; margin-bottom: 12px; }
        .pm-confirm-box h3 { font-size: 1.1rem; margin-bottom: 8px; }
        .pm-confirm-box p { color: var(--text-muted); font-size: 0.9rem; margin-bottom: 20px; }
        .pm-confirm-btns { display: flex; gap: 10px; justify-content: center; }
        .pm-confirm-btns .btn { padding: 10px 24px; font-size: 0.9rem; }

        /* Toast */
        .toast-container { position: fixed; top: 80px; right: 20px; z-index: 3000; display: flex; flex-direction: column; gap: 10px; }
        .toast {
            background: var(--secondary); border: 1px solid var(--border);
            border-radius: 12px; padding: 14px 20px; display: flex; align-items: center;
            gap: 10px; min-width: 280px; max-width: 380px;
            animation: toastIn 0.3s ease, toastOut 0.3s ease 2.7s forwards;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        .toast.success { border-left: 4px solid var(--green); }
        .toast.error { border-left: 4px solid var(--red); }
        .toast.info { border-left: 4px solid var(--blue); }
        @keyframes toastIn { from { opacity:0; transform:translateX(100px); } to { opacity:1; transform:translateX(0); } }
        @keyframes toastOut { from { opacity:1; transform:translateX(0); } to { opacity:0; transform:translateX(100px); } }
        .toast-icon { font-size: 1.3rem; }
        .toast-text { font-size: 0.9rem; }

        .site-footer {
            background: var(--secondary); border-top: 1px solid var(--border); padding: 40px 20px 25px;
        }
        .footer-content { max-width: 1200px; margin: 0 auto; }
        .footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 30px; margin-bottom: 30px; }
        .footer-col h4 { font-size: 1rem; font-weight: 600; margin-bottom: 12px; color: var(--accent); }
        .footer-col a { display: block; color: var(--text-muted); text-decoration: none; font-size: 0.9rem; padding: 3px 0; transition: color 0.3s; }
        .footer-col a:hover { color: var(--accent); }
        .footer-bottom { text-align: center; padding-top: 20px; border-top: 1px solid var(--border); display: flex; flex-direction: column; gap: 8px; }
        .footer-bottom p { font-size: 0.82rem; color: var(--text-muted); }

        .back-to-top {
            position: fixed; bottom: 30px; right: 20px; width: 45px; height: 45px;
            background: var(--secondary); border: 1px solid var(--border); border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            cursor: pointer; z-index: 999; opacity: 0; visibility: hidden;
            transition: all 0.3s; font-size: 1.2rem;
        }
        .back-to-top.visible { opacity: 1; visibility: visible; }
        .back-to-top:hover { background: rgba(255,255,255,0.1); border-color: var(--text-muted); }

        @media (max-width: 768px) {
            .pm-modal { max-width: 100%; border-radius: 16px; }
            .pm-header, .pm-body, .pm-footer { padding-left: 18px; padding-right: 18px; }
            .pm-tabs { padding: 10px 15px 0; }
        }
    </style>
</head>
<body>

<!-- ========== NAVBAR ========== -->
<nav class="navbar">
    <div class="navbar-inner">
        <div class="navbar-brand" onclick="goHome()">OSNVC</div>
        <ul class="navbar-links" id="navLinks">
            <li><a href="#home" onclick="goHome()">หน้าแรก</a></li>
            <li><a href="#pricing" onclick="goPricing()">ราคาแพ็คเกจ</a></li>
            <li><a href="#how" onclick="goHow()">วิธีใช้</a></li>
            <li><a href="#faq" onclick="goFaq()">คำถาม-ตอบ</a></li>
        </ul>
        <div style="display:flex;gap:10px;align-items:center;">
            <button class="navbar-btn" id="navAuthBtn" onclick="goLogin()">เข้าสู่ระบบ</button>
            <a href="#pricing" class="navbar-cta" onclick="goPricing()" style="text-decoration:none;">เช่าเว็บเลย!</a>
        </div>
        <div class="hamburger" onclick="toggleMenu()">
            <span></span><span></span><span></span>
        </div>
    </div>
</nav>

<!-- ========== HERO / HOME PAGE ========== -->
<div class="page active" id="page-home">
    <section class="hero" id="home">
        <div class="hero-bg-particles" id="particles"></div>
        <div class="hero-content">
            <div class="hero-logo">🌐</div>
            <h1 class="hero-title">OSNVC</h1>
            <p class="hero-subtitle">
                บริการเช่าเว็บไซต์ระดับพรีเมียม สำหรับ<span>ขายสินค้า</span> ขาย ID เกมส์ และอื่นๆ<br>
                เริ่มต้นเพียง <strong>59 บาท/เดือน</strong> พร้อมใช้งานทันที ไม่ต้องตั้งค่ายุ่งยาก
            </p>
            <div class="hero-features">
                <div class="hero-feature-box"><div class="hero-feature-icon">🛍️</div><div class="hero-feature-text">ขายสินค้า</div></div>
                <div class="hero-feature-box"><div class="hero-feature-icon">💻</div><div class="hero-feature-text">ขาย ID เกม</div></div>
                <div class="hero-feature-box"><div class="hero-feature-icon">🔒</div><div class="hero-feature-text">ปลอดภัย 100%</div></div>
                <div class="hero-feature-box"><div class="hero-feature-icon">⚡</div><div class="hero-feature-text">เร็ว ไม่ดรอป</div></div>
                <div class="hero-feature-box"><div class="hero-feature-icon">📱</div><div class="hero-feature-text">รองรับมือถือ</div></div>
                <div class="hero-feature-box"><div class="hero-feature-icon">💰</div><div class="hero-feature-text">ราคาเริ่มต้นน้อย</div></div>
            </div>
            <div class="hero-actions">
                <button class="btn btn-primary" onclick="goLogin()">⚡ เริ่มใช้งานตอนนี้</button>
                <a href="https://wa.me/66812345678?text=สนใจเช่าเว็บไซต์" target="_blank" class="btn btn-whatsapp">💬 ติดต่อทาง LINE</a>
            </div>
        </div>
    </section>

    <section class="stats-section">
        <div class="stats-grid">
            <div class="stat-item"><div class="stat-number">500+</div><div class="stat-label">เว็บไซต์ที่ให้บริการ</div></div>
            <div class="stat-item"><div class="stat-number">99.9%</div><div class="stat-label">ระบบ uptime</div></div>
            <div class="stat-item"><div class="stat-number">50+</div><div class="stat-label">ลูกค้าประจำ</div></div>
            <div class="stat-item"><div class="stat-number">24/7</div><div class="stat-label">ซัพพอร์ตตลอด</div></div>
        </div>
    </section>

    <section class="section" id="pricing">
        <div class="section-header">
            <div class="section-label">💎 แพ็คเกจราคา</div>
            <h2 class="section-title">เลือกแพ็คเกจที่เหมาะกับคุณ</h2>
            <p class="section-desc">ราคาเริ่มต้นเพียง 59 บาท/เดือน ไม่มีค่าใช้จ่ายแอบแฝง</p>
        </div>
        <div class="pricing-grid">
            <div class="pricing-card">
                <div class="pricing-name">🌱 Basic</div>
                <div class="pricing-price">59<span>/เดือน</span></div>
                <ul class="pricing-features">
                    <li>เว็บไซต์ 1 โดเมน</li><li>พื้นที่ 1 GB</li><li>รองรับ 100 สินค้า</li>
                    <li>เทมเพลตพร้อมใช้งาน</li><li>SSL Certificate</li><li>แชทซัพพอร์ต</li>
                </ul>
                <button class="pricing-btn" onclick="goLogin()">เลือก Basic</button>
            </div>
            <div class="pricing-card popular">
                <div class="pricing-name">🔥 Pro</div>
                <div class="pricing-price">159<span>/เดือน</span></div>
                <ul class="pricing-features">
                    <li>ทุกอย่างใน Basic</li><li>พื้นที่ 10 GB</li><li>รองรับไม่จำกัดสินค้า</li>
                    <li>ระบบชำระเงิน Auto</li><li>SEO Optimization</li><li>Custom Domain ฟรี 1 ปี</li>
                    <li>Priority Support</li>
                </ul>
                <button class="pricing-btn popular-btn" onclick="goLogin()">เลือก Pro ⭐</button>
            </div>
            <div class="pricing-card">
                <div class="pricing-name">🚀 Enterprise</div>
                <div class="pricing-price">399<span>/เดือน</span></div>
                <ul class="pricing-features">
                    <li>ทุกอย่างใน Pro</li><li>พื้นที่ไม่จำกัด</li><li>Custom Design เฉพาะ</li>
                    <li>ระบบ Affiliate</li><li>API Integration</li><li>รายงาน Analytics</li>
                    <li>ดูแลเฉพาะบุคคล</li><li>Backup ทุกวัน</li>
                </ul>
                <button class="pricing-btn" onclick="goLogin()">เลือก Enterprise</button>
            </div>
        </div>
    </section>

    <section class="section how-it-works" id="how">
        <div class="section-header">
            <div class="section-label">📋 วิธีใช้งาน</div>
            <h2 class="section-title">เริ่มใช้งานใน 3 ขั้นตอน</h2>
            <p class="section-desc">ง่ายๆ ไม่ยุ่งยาก พร้อมใช้งานในไม่กี่นาที</p>
        </div>
        <div class="steps-grid">
            <div class="step-card"><div class="step-number">1</div><h3>สมัครสมาชิก</h3><p>กรอกข้อมูล รับรหัส OTP และเลือกแพ็คเกจที่ต้องการ</p></div>
            <div class="step-card"><div class="step-number">2</div><h3>ตั้งค่าเว็บไซต์</h3><p>เลือกเทมเพลต ปรับแต่งสีสัน เพิ่มสินค้าของคุณได้เลย</p></div>
            <div class="step-card"><div class="step-number">3</div><h3>เริ่มขาย!</h3><p>แชร์ลิงก์ร้านค้า รอรับออเดอร์ และรับเงินได้ทันที</p></div>
        </div>
    </section>

    <section class="section" id="reviews">
        <div class="section-header"><div class="section-label">💬 รีวิวลูกค้า</div><h2 class="section-title">ลูกค้าพูดถึงเรา</h2><p class="section-desc">เสียงจากผู้ใช้บริการจริง</p></div>
        <div class="testimonials-grid">
            <div class="testimonial-card"><div class="testimonial-stars">⭐⭐⭐⭐⭐</div><p class="testimonial-text">"ใช้บริการมา 3 เดือนแล้ว ระบบดีมาก ไม่ดรอป ขายของได้จริง ราคาก็ถูกมากๆ ประทับใจมาก"</p><div class="testimonial-author">คุณสมชาย 🛍️</div></div>
            <div class="testimonial-card"><div class="testimonial-stars">⭐⭐⭐⭐⭐</div><p class="testimonial-text">"ตั้งแต่มาใช้ OSNVC ยอดขายเพิ่มขึ้น 40% หน้าเว็บสวย รองรับมือถือดี แนะนำเลย"</p><div class="testimonial-author">คุณกนก 💻</div></div>
            <div class="testimonial-card"><div class="testimonial-stars">⭐⭐⭐⭐⭐</div><p class="testimonial-text">"บริการ Support ดีมาก ตอบเร็ว มีปัญหาโทรไปก็ช่วยแก้ทันที ประทับใจ"</p><div class="testimonial-author">คุณดาว 🌟</div></div>
        </div>
    </section>

    <section class="section" id="faq" style="padding-bottom:80px;">
        <div class="section-header"><div class="section-label">❓ คำถาม-ตอบ</div><h2 class="section-title">คำถามที่พบบ่อย</h2><p class="section-desc">รวบรวมคำถามที่ลูกค้าสอบถามบ่อยที่สุด</p></div>
        <div class="faq-list">
            <div class="faq-item"><div class="faq-question" onclick="toggleFaq(this)">ต้องใช้เวลาเท่าไหร่ในการตั้งค่าเว็บไซต์?</div><div class="faq-answer"><div class="faq-answer-inner">สามารถตั้งค่าพื้นฐานเสร็จได้ภายใน 5-10 นาที</div></div></div>
            <div class="faq-item"><div class="faq-question" onclick="toggleFaq(this)">รองรับการชำระเงินแบบไหนบ้าง?</div><div class="faq-answer"><div class="faq-answer-inner">รองรับ PromptPay, ธนาคาร, บัตรเครดิต/เดบิต และพร้อมเพย์</div></div></div>
        </div>
    </section>

    <section class="cta-section"><h2>พร้อมเริ่มต้นแล้วใช่ไหม?</h2><p>เริ่มขายสินค้าหรือบริการของคุณออนไลน์ได้เลยวันนี้</p><button class="btn btn-primary" onclick="goLogin()" style="padding:16px 40px;font-size:1.1rem;">⚡ เริ่มใช้ OSNVC ฟรี!</button></section>

    <footer class="site-footer">
        <div class="footer-content">
            <div class="footer-grid">
                <div class="footer-col"><h4>🌐 OSNVC</h4><p style="color:var(--text-muted);font-size:0.88rem;line-height:1.7;">บริการเช่าเว็บไซต์ที่ดีที่สุด</p></div>
                <div class="footer-col"><h4>บริการ</h4><a href="#pricing" onclick="goPricing()">ราคาแพ็คเกจ</a><a href="#how" onclick="goHow()">วิธีใช้งาน</a><a href="#faq" onclick="goFaq()">คำถาม-ตอบ</a></div>
            </div>
            <div class="footer-bottom"><p>© 2026 OSNVC. All rights reserved.</p></div>
        </div>
    </footer>
</div>

<!-- ========== LOGIN PAGE ========== -->
<div class="page" id="page-login">
    <div class="auth-page">
        <div class="auth-card" id="loginCard">
            <h2>🔐 เข้าสู่ระบบ</h2>
            <p class="auth-desc">เข้าสู่ระบบเพื่อจัดการเว็บไซต์ของคุณ</p>
            <div class="auth-form" id="memberLoginForm">
                <div class="form-group"><label>ชื่อผู้ใช้</label><input type="text" class="auth-input" id="loginUsername" placeholder="ชื่อผู้ใช้" autocomplete="username"></div>
                <div class="form-group"><label>รหัสผ่าน</label><input type="password" class="auth-input" id="loginPassword" placeholder="รหัสผ่าน" autocomplete="current-password"></div>
                <button class="auth-btn-full auth-btn-login" onclick="memberLogin()">เข้าสู่ระบบ</button>
                <div class="auth-divider"><span>หรือ</span></div>
                <button class="auth-btn-full auth-btn-secondary" onclick="showRegister()"><span>📝</span> สมัครสมาชิกใหม่</button>
            </div>
            <div class="auth-form hidden" id="registerForm">
                <h2 style="font-size:1.5rem;margin-bottom:5px;">📝 สมัครสมาชิก</h2>
                <p class="auth-desc">สร้างบัญชีเพื่อเริ่มใช้บริการ</p>
                <div class="form-group"><label>ชื่อผู้ใช้</label><input type="text" class="auth-input" id="regUsername" placeholder="อย่างน้อย 4 ตัว"></div>
                <div class="form-group"><label>เบอร์โทรศัพท์</label><input type="tel" class="auth-input" id="regPhone" placeholder="0xxxxxxxxx" maxlength="10"></div>
                <div class="form-group"><label>รหัสผ่าน</label><input type="password" class="auth-input" id="regPassword" placeholder="อย่างน้อย 4 ตัว"></div>
                <div class="form-group"><label>เลือกแพ็คเกจ</label>
                    <select class="auth-input" id="regPackage"><option value="Basic">🌱 Basic - 59 บาท/เดือน</option><option value="Pro">🔥 Pro - 159 บาท/เดือน</option><option value="Enterprise">🚀 Enterprise - 399 บาท/เดือน</option></select>
                </div>
                <button class="auth-btn-full auth-btn-login" onclick="registerMember()">สมัครสมาชิก</button>
                <div class="auth-switch">มีบัญชีแล้ว? <a onclick="showLogin()">เข้าสู่ระบบ</a></div>
            </div>
            <div style="margin-top:20px;">
                <div style="text-align:center;margin-bottom:10px;font-size:0.82rem;color:var(--text-muted);">— สำหรับผู้ดูแลระบบ —</div>
                <div class="admin-login-row"><button class="auth-btn-full admin-login-btn" onclick="showAdminLogin()">🔑 แอดมินเข้าสู่ระบบ</button></div>
            </div>
        </div>
        <div class="auth-card hidden" id="adminLoginCard">
            <h2>🔑 เข้าสู่ระบบแอดมิน</h2>
            <p class="auth-desc">สำหรับผู้ดูแลระบบเท่านั้น</p>
            <div class="form-group"><label>ชื่อผู้ใช้</label><input type="text" class="auth-input" id="adminUsername" placeholder="Username" value="admin"></div>
            <div class="form-group"><label>รหัสผ่าน</label><input type="password" class="auth-input" id="adminPassword" placeholder="Password" value="1234"></div>
            <button class="auth-btn-full admin-login-btn" onclick="adminLogin()">เข้าสู่ระบบแอดมิน</button>
            <div class="auth-switch"><a onclick="showMemberLogin()">← กลับเข้าสู่ระบบสมาชิก</a></div>
        </div>
    </div>
</div>

<!-- ========== MEMBER DASHBOARD ========== -->
<div class="page" id="page-member-dashboard">
    <div class="dashboard">
        <div class="dash-header">
            <h2>🎛️ แดชบอร์ดสมาชิก</h2>
            <div class="user-info">
                <div>
                    <div class="user-name" id="dashMemberName">สมาชิก</div>
                    <span class="user-status status-active" id="dashMemberStatus">ใช้งานอยู่</span>
                </div>
                <button class="logout-btn" onclick="logout()">🚪 ออกจากระบบ</button>
            </div>
        </div>
        <div class="dash-grid">
            <div class="dash-card">
                <div class="dash-card-header"><span class="dash-card-title">แพ็คเกจปัจจุบัน</span><span class="dash-card-icon">📦</span></div>
                <div class="dash-card-value" id="dashPackage">Basic</div>
                <div class="dash-card-sub" id="dashPackagePrice">59 บาท/เดือน</div>
            </div>
            <div class="dash-card">
                <div class="dash-card-header"><span class="dash-card-title">สถานะเว็บไซต์</span><span class="dash-card-icon">🌐</span></div>
                <div class="dash-card-value"><span class="status-badge status-active" id="dashWebsiteStatus">ออนไลน์</span></div>
                <div class="dash-card-sub" id="dashUptime">Uptime 99.9%</div>
            </div>
            <div class="dash-card">
                <div class="dash-card-header"><span class="dash-card-title">สินค้า</span><span class="dash-card-icon">🛍️</span></div>
                <div class="dash-card-value" id="dashProducts">0</div>
                <div class="dash-card-sub" id="dashProductLimit">เพิ่มสินค้าได้ 100 รายการ</div>
            </div>
            <div class="dash-card">
                <div class="dash-card-header"><span class="dash-card-title">ผู้เข้าชมวันนี้</span><span class="dash-card-icon">👥</span></div>
                <div class="dash-card-value" id="dashVisitors">0</div>
                <div class="dash-card-sub">รวมตลอดเวลา: <span id="dashTotalVisitors">0</span></div>
            </div>
        </div>

        <!-- Website Management -->
        <div class="my-website-card">
            <h3 style="margin-bottom:5px;">🌐 เว็บไซต์ของฉัน</h3>
            <p style="color:var(--text-muted);font-size:0.88rem;margin-bottom:10px;">จัดการและดูตัวอย่างเว็บไซต์ของคุณ</p>
            <div class="website-url-bar">
                <span style="color:var(--green);">📎</span>
                <input type="text" id="websiteUrlDisplay" readonly>
                <button class="copy-btn" onclick="copyWebsiteUrl()">📋 คัดลอก</button>
            </div>
            <div class="site-stats-row">
                <div class="site-stat"><div class="site-stat-value" id="siteVisits">0</div><div class="site-stat-label">การเข้าชมทั้งหมด</div></div>
                <div class="site-stat"><div class="site-stat-value" id="siteOrders">0</div><div class="site-stat-label">ออเดอร์ทั้งหมด</div></div>
            </div>
            <div class="manage-actions">
                <button class="btn btn-outline" onclick="openProductManager()">✏️ จัดการสินค้า</button>
                <button class="btn btn-primary" onclick="openSettings()">⚙️ ตั้งค่าเว็บไซต์</button>
                <button class="btn btn-outline" onclick="previewWebsite()">👁️ ดูตัวอย่าง</button>
            </div>
        </div>

        <!-- Product Summary on Dashboard -->
        <div class="my-website-card" id="productSummaryCard" style="display:none;">
            <h3 style="margin-bottom:15px;">📦 สินค้าล่าสุด (<span id="productCount">0</span> รายการ)</h3>
            <div id="productSummaryGrid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px;"></div>
        </div>

        <!-- Order History -->
        <div class="my-website-card">
            <h3 style="margin-bottom:15px;">📋 ประวัติการสั่งซื้อ</h3>
            <div id="orderList">
                <p style="text-align:center;color:var(--text-muted);padding:20px;">ยังไม่มีประวัติการสั่งซื้อ</p>
            </div>
        </div>
    </div>
</div>

<!-- ========== ADMIN DASHBOARD ========== -->
<div class="page" id="page-admin-dashboard">
    <div class="dashboard">
        <div class="dash-header">
            <h2>🛡️ แดชบอร์ดแอดมิน</h2>
            <div class="user-info">
                <div class="user-avatar">A</div>
                <div><div class="user-name">Admin</div><span class="user-status status-active">แอดมิน</span></div>
                <button class="logout-btn" onclick="logout()">🚪 ออกจากระบบ</button>
            </div>
        </div>
        <div class="admin-banner">
            <div class="admin-banner-icon">⚠️</div>
            <div class="admin-banner-text">
                <h3>คุณกำลังใช้งานในฐานะแอดมิน</h3>
                <p>คุณสามารถจัดการสมาชิกทั้งหมด ดูสถิติ และควบคุมระบบได้</p>
            </div>
        </div>
        <div class="admin-stats-row">
            <div class="admin-stat"><div class="admin-stat-value" id="adminTotalUsers">0</div><div class="admin-stat-label">สมาชิกทั้งหมด</div></div>
            <div class="admin-stat"><div class="admin-stat-value" id="adminActiveUsers">0</div><div class="admin-stat-label">สมาชิกใช้งาน</div></div>
            <div class="admin-stat"><div class="admin-stat-value" id="adminWebsites">0</div><div class="admin-stat-label">เว็บไซต์ทั้งหมด</div></div>
            <div class="admin-stat"><div class="admin-stat-value" id="adminRevenue">฿0</div><div class="admin-stat-label">รายได้รวม</div></div>
        </div>
        <div class="table-container">
            <div class="table-header-bar">
                <h3>📋 รายชื่อสมาชิก</h3>
                <input type="text" class="search-box" id="adminSearch" placeholder="🔍 ค้นหาสมาชิก..." oninput="filterAdminUsers()">
            </div>
            <div style="overflow-x:auto;">
                <table><thead><tr><th>#</th><th>ชื่อผู้ใช้</th><th>เบอร์โทร</th><th>แพ็คเกจ</th><th>สถานะ</th><th>วันที่สมัคร</th><th>จัดการ</th></tr></thead>
                    <tbody id="adminUserTable"><tr><td colspan="7" style="text-align:center;color:var(--text-muted);padding:40px;">ยังไม่มีสมาชิก</td></tr></tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<!-- ========== PRODUCT MANAGER MODAL ========== -->
<div class="pm-overlay" id="pmOverlay">
    <div class="pm-modal" id="pmModal">
        <div class="pm-header">
            <h2>📦 จัดการสินค้า</h2>
            <div class="pm-header-actions">
                <button class="pm-close" onclick="closeProductManager()" title="ปิด">✕</button>
            </div>
        </div>

        <div class="pm-tabs">
            <button class="pm-tab active" onclick="switchPMTab('list', this)">
                <span>📋</span> รายการสินค้า <span class="badge" id="pmProductCount">0</span>
            </button>
            <button class="pm-tab" onclick="switchPMTab('add', this)">
                <span>➕</span> เพิ่มสินค้าใหม่
            </button>
            <button class="pm-tab" id="pmTabEdit" style="display:none;" onclick="switchPMTab('edit', this)">
                <span>✏️</span> แก้ไขสินค้า
            </button>
        </div>

        <div class="pm-body">
            <!-- LIST SECTION -->
            <div class="pm-section active" id="pm-section-list">
                <div class="pm-toolbar">
                    <input type="text" class="pm-search" id="pmSearch" placeholder="🔍 ค้นหาสินค้า..." oninput="filterPMProducts()">
                    <select class="pm-filter" id="pmFilterCategory" onchange="filterPMProducts()">
                        <option value="">ทุกหมวดหมู่</option>
                        <option value="แฟชั่น">แฟชั่น / เสื้อผ้า</option>
                        <option value="อิเล็กทรอนิกส์">อิเล็กทรอนิกส์</option>
                        <option value="อาหาร">อาหาร / เครื่องดื่ม</option>
                        <option value="เกม">เกม / ไอดีเกม</option>
                        <option value="ความงาม">ความงาม / สุขภาพ</option>
                        <option value="อุปกรณ์">อุปกรณ์ / Gadget</option>
                        <option value="ของสะสม">ของสะสม</option>
                        <option value="อื่นๆ">อื่นๆ</option>
                    </select>
                    <select class="pm-filter" id="pmFilterStock" onchange="filterPMProducts()">
                        <option value="">แสดงทั้งหมด</option>
                        <option value="in">มีสินค้าอยู่</option>
                        <option value="out">สินค้าหมด</option>
                        <option value="low">ใกล้หมด (<5)</option>
                    </select>
                    <button class="btn btn-primary" style="padding:10px 18px;font-size:0.88rem;" onclick="switchPMTab('add', document.querySelector('[onclick*=add]'))">
                        ➕ เพิ่มสินค้า
                    </button>
                </div>
                <div class="pm-grid" id="pmProductGrid">
                    <!-- Products rendered here -->
                </div>
                <div class="pm-empty" id="pmEmpty" style="display:none;">
                    <div class="pm-empty-icon">📭</div>
                    <p>ยังไม่มีสินค้า</p>
                    <button class="btn btn-outline" style="margin-top:15px;" onclick="switchPMTab('add', document.querySelector('[onclick*=add]'))">➕ เริ่มเพิ่มสินค้า</button>
                </div>
            </div>

            <!-- ADD SECTION -->
            <div class="pm-section" id="pm-section-add">
                <p class="pm-form-header" onclick="switchPMTab('list', document.querySelector('[onclick*=list]'))">
                    ← กลับไปรายการสินค้า
                </p>
                <h3 class="pm-form-title" style="margin-bottom:20px;">➕ เพิ่มสินค้าใหม่</h3>
                <div class="pm-form-grid">
                    <div class="pm-form-group">
                        <label>📝 ชื่อสินค้า *</label>
                        <input type="text" id="pmAddName" placeholder="ชื่อสินค้า" maxlength="100">
                    </div>
                    <div class="pm-form-group">
                        <label>💰 ราคา (บาท) *</label>
                        <input type="number" id="pmAddPrice" placeholder="0.00" min="0" step="0.01">
                    </div>
                    <div class="pm-form-group">
                        <label>📂 หมวดหมู่</label>
                        <select id="pmAddCategory">
                            <option value="">-- เลือกหมวดหมู่ --</option>
                            <option value="แฟชั่น">แฟชั่น / เสื้อผ้า</option>
                            <option value="อิเล็กทรอนิกส์">อิเล็กทรอนิกส์</option>
                            <option value="อาหาร">อาหาร / เครื่องดื่ม</option>
                            <option value="เกม">เกม / ไอดีเกม</option>
                            <option value="ความงาม">ความงาม / สุขภาพ</option>
                            <option value="อุปกรณ์">อุปกรณ์ / Gadget</option>
                            <option value="ของสะสม">ของสะสม</option>
                            <option value="อื่นๆ">อื่นๆ</option>
                        </select>
                    </div>
                    <div class="pm-form-group">
                        <label>📦 จำนวนคงเหลือ</label>
                        <input type="number" id="pmAddStock" placeholder="0" min="0" value="999">
                    </div>
                    <div class="pm-form-group full-width">
                        <label>📝 คำอธิบายสินค้า</label>
                        <textarea id="pmAddDesc" placeholder="รายละเอียดสินค้า..." maxlength="500"></textarea>
                    </div>
                    <div class="pm-form-group full-width" style="position:relative;">
                        <label>🖼️ รูปภาพสินค้า (URL)</label>
                        <input type="url" id="pmAddImage" placeholder="https://example.com/image.jpg" oninput="pmPreviewImage(this.value, 'pmAddImgPreview')">
                        <div class="pm-img-preview-wrap">
                            <img id="pmAddImgPreview" class="pm-img-preview" src="" alt="Preview">
                            <button class="pm-img-remove" onclick="pmClearImage('pmAddImage', 'pmAddImgPreview')">✕</button>
                        </div>
                    </div>
                    <div class="pm-form-group">
                        <label>🏷️ สถานะ</label>
                        <select id="pmAddStatus">
                            <option value="ขายได้">ขายได้</option>
                            <option value="สินค้าหมด">สินค้าหมด</option>
                            <option value="พร้อมรับ">พร้อมรับ</option>
                        </select>
                    </div>
                    <div class="pm-form-group">
                        <label>📊 แสดงบนหน้าร้าน</label>
                        <select id="pmAddShowHome">
                            <option value="yes">แสดง</option>
                            <option value="no">ซ่อน</option>
                        </select>
                    </div>
                </div>
                <div class="pm-form-footer">
                    <button class="btn btn-outline" onclick="switchPMTab('list', document.querySelector('[onclick*=list]'))">ยกเลิก</button>
                    <button class="btn btn-primary" onclick="addProduct()">💾 บันทึกสินค้า</button>
                </div>
            </div>

            <!-- EDIT SECTION -->
            <div class="pm-section" id="pm-section-edit">
                <p class="pm-form-header" onclick="switchPMTab('list', document.querySelector('[onclick*=list]'))">
                    ← กลับไปรายการสินค้า
                </p>
                <h3 class="pm-form-title" style="margin-bottom:20px;">✏️ แก้ไขสินค้า</h3>
                <input type="hidden" id="pmEditId">
                <div class="pm-form-grid">
                    <div class="pm-form-group">
                        <label>📝 ชื่อสินค้า *</label>
                        <input type="text" id="pmEditName" placeholder="ชื่อสินค้า" maxlength="100">
                    </div>
                    <div class="pm-form-group">
                        <label>💰 ราคา (บาท) *</label>
                        <input type="number" id="pmEditPrice" placeholder="0.00" min="0" step="0.01">
                    </div>
                    <div class="pm-form-group">
                        <label>📂 หมวดหมู่</label>
                        <select id="pmEditCategory">
                            <option value="">-- เลือกหมวดหมู่ --</option>
                            <option value="แฟชั่น">แฟชั่น / เสื้อผ้า</option>
                            <option value="อิเล็กทรอนิกส์">อิเล็กทรอนิกส์</option>
                            <option value="อาหาร">อาหาร / เครื่องดื่ม</option>
                            <option value="เกม">เกม / ไอดีเกม</option>
                            <option value="ความงาม">ความงาม / สุขภาพ</option>
                            <option value="อุปกรณ์">อุปกรณ์ / Gadget</option>
                            <option value="ของสะสม">ของสะสม</option>
                            <option value="อื่นๆ">อื่นๆ</option>
                        </select>
                    </div>
                    <div class="pm-form-group">
                        <label>📦 จำนวนคงเหลือ</label>
                        <input type="number" id="pmEditStock" placeholder="0" min="0">
                    </div>
                    <div class="pm-form-group full-width">
                        <label>📝 คำอธิบายสินค้า</label>
                        <textarea id="pmEditDesc" placeholder="รายละเอียดสินค้า..." maxlength="500"></textarea>
                    </div>
                    <div class="pm-form-group full-width" style="position:relative;">
                        <label>🖼️ รูปภาพสินค้า (URL)</label>
                        <input type="url" id="pmEditImage" placeholder="https://example.com/image.jpg" oninput="pmPreviewImage(this.value, 'pmEditImgPreview')">
                        <div class="pm-img-preview-wrap">
                            <img id="pmEditImgPreview" class="pm-img-preview" src="" alt="Preview">
                            <button class="pm-img-remove" onclick="pmClearImage('pmEditImage', 'pmEditImgPreview')">✕</button>
                        </div>
                    </div>
                    <div class="pm-form-group">
                        <label>🏷️ สถานะ</label>
                        <select id="pmEditStatus">
                            <option value="ขายได้">ขายได้</option>
                            <option value="สินค้าหมด">สินค้าหมด</option>
                            <option value="พร้อมรับ">พร้อมรับ</option>
                        </select>
                    </div>
                    <div class="pm-form-group">
                        <label>📊 แสดงบนหน้าร้าน</label>
                        <select id="pmEditShowHome">
                            <option value="yes">แสดง</option>
                            <option value="no">ซ่อน</option>
                        </select>
                    </div>
                </div>
                <div class="pm-form-footer">
                    <button class="btn btn-outline" onclick="switchPMTab('list', document.querySelector('[onclick*=list]'))">ยกเลิก</button>
                    <button class="btn btn-primary" onclick="saveEditedProduct()">💾 บันทึกการแก้ไข</button>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- ========== DELETE CONFIRM ========== -->
<div class="pm-confirm-overlay" id="pmConfirmOverlay">
    <div class="pm-confirm-box">
        <div class="pm-confirm-icon">🗑️</div>
        <h3>ลบสินค้า</h3>
        <p id="pmConfirmText">คุณแน่ใจว่าต้องการลบสินค้านี้?</p>
        <div class="pm-confirm-btns">
            <button class="btn btn-outline" onclick="closeConfirm()">❌ ยกเลิก</button>
            <button class="btn" style="background:var(--red);color:#fff;" onclick="confirmDelete()">🗑️ ลบ</button>
        </div>
    </div>
</div>

<!-- ========== TOAST ========== -->
<div class="toast-container" id="toastContainer"></div>

<script>
    // ========== DATA ==========
    function initData() {
        if (!localStorage.getItem('osnvc_users')) localStorage.setItem('osnvc_users', JSON.stringify([]));
        if (!localStorage.getItem('osnvc_admin')) localStorage.setItem('osnvc_admin', JSON.stringify({username:'admin',password:'1234'}));
    }
    initData();

    function getProducts() {
        const session = sessionStorage.getItem('osnvc_session');
        if (!session) return [];
        const data = JSON.parse(session);
        if (data.type === 'member' && data.user) {
            const users = JSON.parse(localStorage.getItem('osnvc_users') || '[]');
            const user = users.find(u => u.id === data.user.id);
            if (user) return user.products || [];
        }
        return [];
    }

    function saveProducts(prods) {
        const session = sessionStorage.getItem('osnvc_session');
        if (!session) return;
        const data = JSON.parse(session);
        if (data.type === 'member' && data.user) {
            let users = JSON.parse(localStorage.getItem('osnvc_users') || '[]');
            const idx = users.findIndex(u => u.id === data.user.id);
            if (idx !== -1) {
                users[idx].products = prods;
                localStorage.setItem('osnvc_users', JSON.stringify(users));
                // Update session
                data.user = users[idx];
                sessionStorage.setItem('osnvc_session', JSON.stringify(data));
            }
        }
    }

    function generateProductId() {
        return 'PRD' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substr(2, 5).toUpperCase();
    }

    // ========== PM NAVIGATION ==========
    function switchPMTab(tab, el) {
        document.querySelectorAll('.pm-section').forEach(s => s.classList.remove('active'));
        document.querySelectorAll('.pm-tab').forEach(t => t.classList.remove('active'));
        document.getElementById('pm-section-' + tab).classList.add('active');
        if (el) el.classList.add('active');

        if (tab === 'list') {
            document.getElementById('pmTabEdit').style.display = 'none';
            renderPMProducts();
        } else if (tab === 'edit') {
            document.getElementById('pmTabEdit').style.display = 'flex';
        } else if (tab === 'add') {
            document.getElementById('pmTabEdit').style.display = 'none';
            // Reset form
            ['pmAddName','pmAddPrice','pmAddCategory','pmAddStock','pmAddDesc','pmAddImage'].forEach(id => {
                const el = document.getElementById(id);
                if (id === 'pmAddStock') el.value = 999;
                else if (id === 'pmAddCategory' || id === 'pmAddShowHome' || id === 'pmAddStatus') el.selectedIndex = 0;
                else el.value = '';
            });
            document.getElementById('pmAddImgPreview').classList.remove('show');
            document.getElementById('pmAddImgPreview').src = '';
        }
        if (tab === 'list') renderPMProducts();
    }

    function openProductManager() {
        renderPMProducts();
        document.getElementById('pmOverlay').classList.add('active');
    }

    function closeProductManager() {
        document.getElementById('pmOverlay').classList.remove('active');
    }

    // ========== RENDER PRODUCTS ==========
    function renderPMProducts(filterTerm = '', filterCat = '', filterStock = '') {
        let products = getProducts();

        if (filterTerm) {
            const t = filterTerm.toLowerCase();
            products = products.filter(p =>
                p.name.toLowerCase().includes(t) || p.description.toLowerCase().includes(t)
            );
        }
        if (filterCat) {
            products = products.filter(p => p.category === filterCat);
        }
        if (filterStock === 'in') products = products.filter(p => p.stock > 0);
        else if (filterStock === 'out') products = products.filter(p => p.stock <= 0);
        else if (filterStock === 'low') products = products.filter(p => p.stock > 0 && p.stock < 5);

        const grid = document.getElementById('pmProductGrid');
        const empty = document.getElementById('pmEmpty');
        const countBadge = document.getElementById('pmProductCount');

        // Update product count on dashboard
        const allProducts = getProducts();
        document.getElementById('dashProducts').textContent = allProducts.length;
        document.getElementById('productCount').textContent = allProducts.length;
        countBadge.textContent = allProducts.length;

        if (products.length === 0) {
            grid.innerHTML = '';
            empty.style.display = 'block';
            grid.closest('.pm-section').querySelector('.pm-toolbar') ? '' : '';
            if (allProducts.length === 0) {
                empty.querySelector('p').textContent = 'ยังไม่มีสินค้า';
                empty.querySelector('button') && empty.querySelector('button').remove();
            } else {
                empty.querySelector('p').textContent = 'ไม่พบรายการ';
                empty.querySelector('button') && empty.querySelector('button').remove();
            }
            return;
        }
        empty.style.display = 'none';

        grid.innerHTML = products.map(p => {
            const imgHtml = p.image
                ? `<div class="pm-card-img has-img"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>`
                : `<div class="pm-card-img">📦</div>`;

            let stockClass = '';
            let stockText = `คงเหลือ: ${p.stock}`;
            if (p.stock <= 0) { stockClass = 'out'; stockText = 'สินค้าหมด'; }
            else if (p.stock < 5) { stockClass = 'low'; stockText = `เหลือ ${p.stock} ชิ้น ⚠️`; }

            const price = parseFloat(p.price).toLocaleString('th-TH', {minimumFractionDigits: 2, maximumFractionDigits: 2});

            return `
                <div class="pm-card">
                    <div class="pm-card-actions">
                        <button class="pm-card-action-btn edit" onclick="editProduct('${p.id}')" title="แก้ไข">✏️</button>
                        <button class="pm-card-action-btn delete" onclick="confirmDeleteProduct('${p.id}')" title="ลบ">🗑️</button>
                    </div>
                    ${imgHtml}
                    <div class="pm-card-name">${escHtml(p.name)}</div>
                    ${p.category ? `<div class="pm-card-cat">${p.category}</div>` : ''}
                    <div class="pm-card-price">฿${price}</div>
                    <div class="pm-card-stock ${stockClass}">${stockText}</div>
                    ${p.status ? `<div class="pm-card-stock">สถานะ: ${p.status}</div>` : ''}
                </div>
            `;
        }).join('');

        // Also update summary on dashboard if visible
        const summaryGrid = document.getElementById('productSummaryGrid');
        if (summaryGrid) {
            if (allProducts.length > 0) {
                document.getElementById('productSummaryCard').style.display = 'block';
                const recent = allProducts.slice(-4).reverse();
                summaryGrid.innerHTML = recent.map(p => {
                    const price = parseFloat(p.price).toLocaleString('th-TH', {minimumFractionDigits: 0, maximumFractionDigits: 0});
                    const imgHtml = p.image
                        ? `<img src="${p.image}" alt="${p.name}" style="width:100%;aspect-ratio:1;object-fit:cover;border-radius:8px;">`
                        : `<div style="width:100%;aspect-ratio:1;background:#1a1a1a;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;">📦</div>`;
                    return `<div style="background:#0a0a0a;border:1px solid var(--border);border-radius:10px;padding:10px;text-align:center;cursor:pointer;" onclick="switchPMTab('list',document.querySelector('[onclick*=list]'));document.getElementById('pmOverlay').classList.add('active');setTimeout(()=>editProduct('${p.id}'),300);">
                        ${imgHtml}
                        <div style="font-weight:600;font-size:0.8rem;margin-top:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escHtml(p.name)}</div>
                        <div style="color:var(--green);font-weight:700;font-size:0.85rem;">฿${price}</div>
                    </div>`;
                }).join('');
            } else {
                document.getElementById('productSummaryCard').style.display = 'none';
            }
        }
    }

    function filterPMProducts() {
        const term = document.getElementById('pmSearch').value;
        const cat = document.getElementById('pmFilterCategory').value;
        const stock = document.getElementById('pmFilterStock').value;
        renderPMProducts(term, cat, stock);
    }

    // ========== ADD PRODUCT ==========
    function addProduct() {
        const name = document.getElementById('pmAddName').value.trim();
        const price = document.getElementById('pmAddPrice').value;
        const category = document.getElementById('pmAddCategory').value;
        const stock = parseInt(document.getElementById('pmAddStock').value) || 0;
        const desc = document.getElementById('pmAddDesc').value.trim();
        const image = document.getElementById('pmAddImage').value.trim();
        const status = document.getElementById('pmAddStatus').value;
        const showHome = document.getElementById('pmAddShowHome').value;

        if (!name) { showToast('กรุณากรอกชื่อสินค้า', 'error'); return; }
        if (!price || parseFloat(price) <= 0) { showToast('กรุณากรอกราคาสินค้า', 'error'); return; }

        const products = getProducts();
        const product = {
            id: generateProductId(),
            name: name,
            price: parseFloat(price),
            category: category,
            stock: stock,
            description: desc,
            image: image,
            status: status,
            showHome: showHome,
            createdAt: new Date().toISOString().split('T')[0],
            updatedAt: new Date().toISOString().split('T')[0]
        };

        products.push(product);
        saveProducts(products);

        showToast('เพิ่มสินค้าสำเร็จ! ✅', 'success');
        switchPMTab('list', document.querySelector('[onclick*=list]'));
        renderPMProducts();
    }

    // ========== EDIT PRODUCT ==========
    function editProduct(id) {
        const products = getProducts();
        const product = products.find(p => p.id === id);
        if (!product) return;

        document.getElementById('pmEditId').value = id;
        document.getElementById('pmEditName').value = product.name;
        document.getElementById('pmEditPrice').value = product.price;
        document.getElementById('pmEditCategory').value = product.category || '';
        document.getElementById('pmEditStock').value = product.stock;
        document.getElementById('pmEditDesc').value = product.description || '';
        document.getElementById('pmEditImage').value = product.image || '';
        document.getElementById('pmEditStatus').value = product.status || 'ขายได้';
        document.getElementById('pmEditShowHome').value = product.showHome || 'yes';

        // Preview image
        if (product.image) {
            pmPreviewImage(product.image, 'pmEditImgPreview');
        } else {
            document.getElementById('pmEditImgPreview').classList.remove('show');
            document.getElementById('pmEditImgPreview').src = '';
        }

        document.getElementById('pmTabEdit').style.display = 'flex';
        switchPMTab('edit', document.getElementById('pmTabEdit'));
    }

    function saveEditedProduct() {
        const id = document.getElementById('pmEditId').value;
        if (!id) return;

        const name = document.getElementById('pmEditName').value.trim();
        const price = document.getElementById('pmEditPrice').value;
        const category = document.getElementById('pmEditCategory').value;
        const stock = parseInt(document.getElementById('pmEditStock').value) || 0;
        const desc = document.getElementById('pmEditDesc').value.trim();
        const image = document.getElementById('pmEditImage').value.trim();
        const status = document.getElementById('pmEditStatus').value;
        const showHome = document.getElementById('pmEditShowHome').value;

        if (!name) { showToast('กรุณากรอกชื่อสินค้า', 'error'); return; }
        if (!price || parseFloat(price) <= 0) { showToast('กรุณากรอกราคาสินค้า', 'error'); return; }

        let products = getProducts();
        const idx = products.findIndex(p => p.id === id);
        if (idx === -1) { showToast('ไม่พบรายการสินค้า', 'error'); return; }

        products[idx] = {
            ...products[idx],
            name, price: parseFloat(price), category, stock,
            description: desc, image, status, showHome,
            updatedAt: new Date().toISOString().split('T')[0]
        };

        saveProducts(products);
        showToast('แก้ไขสินค้าสำเร็จ! ✅', 'success');
        switchPMTab('list', document.querySelector('[onclick*=list]'));
        renderPMProducts();
    }

    // ========== DELETE PRODUCT ==========
    let deleteTargetId = null;

    function confirmDeleteProduct(id) {
        deleteTargetId = id;
        document.getElementById('pmConfirmOverlay').classList.add('active');
    }

    function closeConfirm() {
        deleteTargetId = null;
        document.getElementById('pmConfirmOverlay').classList.remove('active');
    }

    function confirmDelete() {
        if (!deleteTargetId) return;
        let products = getProducts().filter(p => p.id !== deleteTargetId);
        saveProducts(products);
        deleteTargetId = null;
        document.getElementById('pmConfirmOverlay').classList.remove('active');
        showToast('ลบสินค้าสำเร็จ! 🗑️', 'success');
        renderPMProducts();
    }

    // ========== IMAGE PREVIEW ==========
    function pmPreviewImage(url, previewId) {
        if (!url) return;
        const img = document.getElementById(previewId);
        const removeBtn = img.nextElementSibling;
        img.onload = () => { img.classList.add('show'); if (removeBtn) removeBtn.classList.add('show'); };
        img.onerror = () => { img.classList.remove('show'); if (removeBtn) removeBtn.classList.remove('show'); };
        img.src = url;
    }

    function pmClearImage(inputId, previewId) {
        document.getElementById(inputId).value = '';
        const img = document.getElementById(previewId);
        img.classList.remove('show');
        img.src = '';
        const removeBtn = img.nextElementSibling;
        if (removeBtn) removeBtn.classList.remove('show');
    }

    // ========== NAVIGATION ==========
    function showPage(pageId) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        const target = document.getElementById('page-' + pageId);
        if (target) { target.classList.add('active'); window.scrollTo({top:0, behavior:'smooth'}); }
        updateNavBtn(pageId);
    }
    function updateNavBtn(currentPage) {
        const btn = document.getElementById('navAuthBtn');
        if (currentPage === 'home' || currentPage === 'pricing' || !currentPage) {
            btn.textContent = 'เข้าสู่ระบบ'; btn.onclick = () => showPage('login');
        } else if (currentPage === 'login') {
            btn.textContent = 'หน้าแรก'; btn.onclick = () => showPage('home');
        } else if (currentPage.startsWith('member') || currentPage.startsWith('admin')) {
            btn.textContent = 'ออกจากระบบ'; btn.onclick = () => logout();
        }
    }
    function goHome() { showPage('home'); }
    function goPricing() { showPage('home'); setTimeout(() => document.getElementById('pricing').scrollIntoView({behavior:'smooth'}), 100); }
    function goHow() { showPage('home'); setTimeout(() => document.getElementById('how').scrollIntoView({behavior:'smooth'}), 100); }
    function goFaq() { showPage('home'); setTimeout(() => document.getElementById('faq').scrollIntoView({behavior:'smooth'}), 100); }
    function goLogin() { showPage('login'); }
    function showRegister() {
        document.getElementById('memberLoginForm').classList.add('hidden');
        document.getElementById('registerForm').classList.remove('hidden');
        document.getElementById('adminLoginCard').classList.add('hidden');
    }
    function showLogin() {
        document.getElementById('memberLoginForm').classList.remove('hidden');
        document.getElementById('registerForm').classList.add('hidden');
        document.getElementById('adminLoginCard').classList.add('hidden');
    }
    function showAdminLogin() {
        document.getElementById('loginCard').classList.add('hidden');
        document.getElementById('adminLoginCard').classList.remove('hidden');
    }
    function showMemberLogin() {
        document.getElementById('loginCard').classList.remove('hidden');
        document.getElementById('adminLoginCard').classList.add('hidden');
    }
    function toggleMenu() { document.getElementById('navLinks').classList.toggle('open'); }

    // ========== PARTICLES ==========
    function createParticles() {
        const container = document.getElementById('particles');
        if (!container) return;
        for (let i = 0; i < 30; i++) {
            const p = document.createElement('div'); p.classList.add('particle');
            p.style.left = Math.random() * 100 + '%';
            p.style.animationDuration = (Math.random() * 15 + 10) + 's';
            p.style.animationDelay = (Math.random() * 10) + 's';
            p.style.width = p.style.height = (Math.random() * 4 + 1) + 'px';
            p.style.opacity = Math.random() * 0.5 + 0.1;
            container.appendChild(p);
        }
    }
    createParticles();

    // ========== BACK TO TOP ==========
    window.addEventListener('scroll', () => {
        const btn = document.getElementById('backToTop');
        if (window.scrollY > 500) btn.classList.add('visible'); else btn.classList.remove('visible');
    });

    // ========== AUTH ==========
    function getUsers() { return JSON.parse(localStorage.getItem('osnvc_users') || '[]'); }
    function saveUsers(users) { localStorage.setItem('osnvc_users', JSON.stringify(users)); }
    function getAdmin() { return JSON.parse(localStorage.getItem('osnvc_admin') || '{"username":"admin","password":"1234"}'); }
    function generateId() { return 'USR' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substr(2, 4).toUpperCase(); }
    function generateWebsiteUrl(username) { return username.toLowerCase().replace(/\s+/g, '') + '.osnvc.store'; }

    function registerMember() {
        const username = document.getElementById('regUsername').value.trim();
        const phone = document.getElementById('regPhone').value.trim();
        const password = document.getElementById('regPassword').value;
        const packageName = document.getElementById('regPackage').value;
        if (username.length < 4) { showToast('ชื่อผู้ใช้ต้องอย่างน้อย 4 ตัวอักษร', 'error'); return; }
        if (phone.length !== 10 || isNaN(phone)) { showToast('กรุณากรอกเบอร์โทรศัพท์ให้ครบ 10 หลัก', 'error'); return; }
        if (password.length < 4) { showToast('รหัสผ่านต้องอย่างน้อย 4 ตัวอักษร', 'error'); return; }
        const users = getUsers();
        if (users.find(u => u.username === username)) { showToast('ชื่อผู้ใช้นี้ถูกใช้แล้ว', 'error'); return; }
        if (users.find(u => u.phone === phone)) { showToast('เบอร์โทรศัพท์นี้ถูกใช้แล้ว', 'error'); return; }
        const user = { id: generateId(), username, password, phone, package: packageName, websiteUrl: generateWebsiteUrl(username), status: 'active', createdAt: new Date().toISOString().split('T')[0], visits: 0, totalVisits: 0, orders: 0, products: [], ordersHistory: [] };
        users.push(user); saveUsers(users);
        showToast('สมัครสมาชิกสำเร็จ! ✅', 'success'); showLogin();
    }

    function memberLogin() {
        const username = document.getElementById('loginUsername').value.trim();
        const password = document.getElementById('loginPassword').value;
        if (!username || !password) { showToast('กรุณากรอกชื่อผู้ใช้และรหัสผ่าน', 'error'); return; }
        showLoading('กำลังตรวจสอบ...');
        setTimeout(() => {
            hideLoading();
            const admin = getAdmin();
            if (username === admin.username && password === admin.password) {
                sessionStorage.setItem('osnvc_session', JSON.stringify({ type: 'admin', username: 'admin' }));
                showToast('เข้าสู่ระบบแอดมินสำเร็จ! 🔑', 'success');
                document.getElementById('loginUsername').value = ''; document.getElementById('loginPassword').value = '';
                renderAdminDashboard(); showPage('admin-dashboard'); return;
            }
            const users = getUsers();
            const user = users.find(u => u.username === username && u.password === password);
            if (user) {
                sessionStorage.setItem('osnvc_session', JSON.stringify({ type: 'member', user: user }));
                showToast('เข้าสู่ระบบสำเร็จ! 🎉', 'success');
                document.getElementById('loginUsername').value = ''; document.getElementById('loginPassword').value = '';
                renderMemberDashboard(user); showPage('member-dashboard');
            } else { showToast('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง', 'error'); }
        }, 800);
    }

    function adminLogin() {
        const username = document.getElementById('adminUsername').value.trim();
        const password = document.getElementById('adminPassword').value;
        const admin = getAdmin();
        if (username === admin.username && password === admin.password) {
            sessionStorage.setItem('osnvc_session', JSON.stringify({ type: 'admin', username: 'admin' }));
            showToast('เข้าสู่ระบบแอดมินสำเร็จ! 🔑', 'success');
            document.getElementById('adminUsername').value = ''; document.getElementById('adminPassword').value = '';
            renderAdminDashboard(); showPage('admin-dashboard');
        } else { showToast('ชื่อผู้ใช้หรือรหัสผ่านแอดมินไม่ถูกต้อง', 'error'); }
    }

    function logout() { sessionStorage.removeItem('osnvc_session'); showPage('home'); showToast('ออกจากระบบเรียบร้อยแล้ว', 'info'); }

    // ========== MEMBER DASHBOARD ==========
    const PACKAGES = { Basic: { price: 59 }, Pro: { price: 159 }, Enterprise: { price: 399 } };

    function renderMemberDashboard(user) {
        document.getElementById('dashMemberName').textContent = user.username;
        document.getElementById('dashPackage').textContent = user.package;
        document.getElementById('dashPackagePrice').textContent = PACKAGES[user.package].price + ' บาท/เดือน';
        const statusEl = document.getElementById('dashWebsiteStatus');
        if (user.status === 'active') { statusEl.className = 'status-badge status-active'; statusEl.textContent = 'ออนไลน์'; }
        else if (user.status === 'pending') { statusEl.className = 'status-badge status-pending'; statusEl.textContent = 'รอตรวจสอบ'; }
        else { statusEl.className = 'status-badge status-inactive'; statusEl.textContent = 'ไม่ใช้งาน'; }
        document.getElementById('dashUptime').textContent = user.status === 'inactive' ? 'เว็บไซต์ถูกระงับ' : 'Uptime 99.9%';
        document.getElementById('dashVisitors').textContent = Math.floor(Math.random() * 50);
        document.getElementById('dashTotalVisitors').textContent = (user.totalVisits || 0).toLocaleString();
        document.getElementById('dashProducts').textContent = (user.products || []).length;
        document.getElementById('websiteUrlDisplay').value = 'https://' + user.websiteUrl;
        document.getElementById('siteVisits').textContent = (user.totalVisits || 0).toLocaleString();
        document.getElementById('siteOrders').textContent = user.orders || 0;

        // Render Order History
        const orderList = document.getElementById('orderList');
        if (user.ordersHistory && user.ordersHistory.length > 0) {
            orderList.innerHTML = user.ordersHistory.map(o => `
                <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid rgba(51,51,51,0.3);">
                    <div><div style="font-weight:600;">${o.product}</div><div style="font-size:0.82rem;color:var(--text-muted);">${o.date} | ${o.id}</div></div>
                    <div style="text-align:right;"><div style="font-weight:600;">${o.amount} x ${o.price} บาท</div>
                    <span class="status-badge ${o.status === 'เสร็จสิ้น' ? 'status-active' : o.status === 'กำลังดำเนินการ' ? 'status-pending' : 'status-inactive'}">${o.status}</span></div>
                </div>`).join('');
        }

        // Render product summary on dashboard
        renderPMProducts();
    }

    // ========== ADMIN ==========
    function renderAdminDashboard() {
        const users = getUsers();
        document.getElementById('adminTotalUsers').textContent = users.length;
        document.getElementById('adminActiveUsers').textContent = users.filter(u => u.status === 'active').length;
        document.getElementById('adminWebsites').textContent = users.length;
        let totalRev = 0;
        users.forEach(u => { const pkg = PACKAGES[u.package]; if (pkg) totalRev += pkg.price; });
        document.getElementById('adminRevenue').textContent = totalRev.toLocaleString('th-TH') + ' ฿';
        renderAdminTable(users);
    }

    function renderAdminTable(users) {
        const tbody = document.getElementById('adminUserTable');
        if (users.length === 0) { tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;color:var(--text-muted);padding:40px;">ยังไม่มีสมาชิก</td></tr>'; return; }
        tbody.innerHTML = users.map((u, i) => `
            <tr>
                <td>${i + 1}</td><td><strong>${u.username}</strong></td><td>${u.phone}</td>
                <td>${u.package}</td>
                <td><span class="status-badge status-${u.status === 'active' ? 'active' : u.status === 'pending' ? 'pending' : 'inactive'}">${u.status === 'active' ? 'ใช้งาน' : u.status === 'pending' ? 'รอตรวจสอบ' : 'ไม่ใช้งาน'}</span></td>
                <td>${u.createdAt}</td>
                <td>
                    <button class="action-btn" onclick="toggleUserStatus('${u.id}')">${u.status === 'active' ? '⛔' : '✅'}</button>
                    <button class="action-btn danger" onclick="deleteUser('${u.id}')">🗑️</button>
                </td>
            </tr>`).join('');
    }

    function filterAdminUsers() {
        const search = document.getElementById('adminSearch').value.toLowerCase();
        const users = getUsers().filter(u => u.username.toLowerCase().includes(search) || u.phone.includes(search) || u.package.toLowerCase().includes(search));
        renderAdminTable(users);
        document.getElementById('adminTotalUsers').textContent = users.length;
    }

    function toggleUserStatus(id) {
        const users = getUsers(); const user = users.find(u => u.id === id);
        if (user) { user.status = user.status === 'active' ? 'inactive' : 'active'; saveUsers(users); renderAdminDashboard(); showToast(`${user.username} ถูก${user.status === 'active' ? 'เปิดใช้งาน' : 'ระงับ'}แล้ว`, 'info'); }
    }

    function deleteUser(id) {
        if (!confirm('ต้องการลบสมาชิกนี้ใช่หรือไม่?')) return;
        let users = getUsers(); const user = users.find(u => u.id === id);
        users = users.filter(u => u.id !== id); saveUsers(users); renderAdminDashboard();
        showToast('ลบสมาชิก ' + (user ? user.username : '') + ' เรียบร้อยแล้ว', 'success');
    }

    function copyWebsiteUrl() {
        const input = document.getElementById('websiteUrlDisplay');
        navigator.clipboard.writeText(input.value).then(() => showToast('คัดลอก URL เรียบร้อยแล้ว!', 'success')).catch(() => { input.select(); document.execCommand('copy'); showToast('คัดลอก URL เรียบร้อยแล้ว!', 'success'); });
    }

    // ========== FAQ ==========
    function toggleFaq(element) {
        const item = element.parentElement; const answer = item.querySelector('.faq-answer'); const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(faq => { faq.classList.remove('active'); faq.querySelector('.faq-answer').style.maxHeight = null; });
        if (!isActive) { item.classList.add('active'); answer.style.maxHeight = answer.scrollHeight + 'px'; }
    }

    // ========== SETTINGS ==========
    function openSettings() {
        // Load saved settings
        const s = localStorage.getItem('osnvc_settings');
        if (s) {
            const settings = JSON.parse(s);
            if (settings.siteName) document.getElementById('siteName').value = settings.siteName;
        }
        document.getElementById('settingsOverlay').classList.add('active');
    }

    function closeSettings() {
        document.getElementById('settingsOverlay').classList.remove('active');
    }

    function switchTab(tabId, el) {
        document.querySelectorAll('.settings-section').forEach(s => s.classList.remove('active'));
        document.querySelectorAll('.settings-tab').forEach(t => t.classList.remove('active'));
        document.getElementById('tab-' + tabId).classList.add('active');
        if (el) el.classList.add('active');
    }

    function saveSettings(type) {
        const existing = localStorage.getItem('osnvc_settings') ? JSON.parse(localStorage.getItem('osnvc_settings')) : {};
        if (type === 'general') {
            existing.siteName = document.getElementById('siteName').value;
            existing.siteDescription = document.getElementById('siteDescription').value;
            existing.siteCategory = document.getElementById('siteCategory').value;
            existing.siteLanguage = document.getElementById('siteLanguage').value;
        } else if (type === 'appearance') {
            existing.siteTemplate = document.getElementById('siteTemplate').value;
            existing.primaryColor = document.getElementById('primaryColor').value;
            existing.bgColor = document.getElementById('bgColor').value;
            existing.textColor = document.getElementById('textColor').value;
            existing.siteFont = document.getElementById('siteFont').value;
            existing.darkMode = document.getElementById('darkModeToggle').checked;
            existing.animations = document.getElementById('animationsToggle').checked;
        } else if (type === 'domain') {
            existing.customDomain = document.getElementById('customDomain').value;
            existing.httpsForce = document.getElementById('httpsToggle').checked;
            existing.wwwRedirect = document.getElementById('wwwToggle').checked;
        } else if (type === 'payment') {
            existing.paymentName = document.getElementById('paymentName').value;
            existing.paymentAccount = document.getElementById('paymentAccount').value;
            existing.paymentBank = document.getElementById('paymentBank').value;
            existing.minOrder = document.getElementById('minOrder').value;
        } else if (type === 'contact') {
            existing.contactPhone = document.getElementById('contactPhone').value;
            existing.contactEmail = document.getElementById('contactEmail').value;
            existing.contactLine = document.getElementById('contactLine').value;
            existing.contactFacebook = document.getElementById('contactFacebook').value;
            existing.contactInstagram = document.getElementById('contactInstagram').value;
            existing.contactTiktok = document.getElementById('contactTiktok').value;
            existing.contactWhatsapp = document.getElementById('contactWhatsapp').value;
        } else if (type === 'seo') {
            existing.metaTitle = document.getElementById('metaTitle').value;
            existing.metaDescription = document.getElementById('metaDescription').value;
            existing.metaKeywords = document.getElementById('metaKeywords').value;
        } else if (type === 'notification') {
            existing.notifyOrder = document.getElementById('notifyOrder').checked;
            existing.notifyVisitor = document.getElementById('notifyVisitor').checked;
            existing.notifyLowStock = document.getElementById('notifyLowStock').checked;
            existing.notifyWhatsapp = document.getElementById('notifyWhatsapp').checked;
            existing.notifyEmail = document.getElementById('notifyEmail').checked;
        }
        localStorage.setItem('osnvc_settings', JSON.stringify(existing));

        const msg = document.getElementById('settingsMsg' + type.charAt(0).toUpperCase() + type.slice(1));
        msg.textContent = '✅ บันทึกการตั้งค่าเรียบร้อยแล้ว!';
        msg.className = 'settings-msg show success';
        setTimeout(() => { msg.className = 'settings-msg'; }, 3000);
    }

    // ========== HELPERS ==========
    function escHtml(str) { const div = document.createElement('div'); div.textContent = str; return div.innerHTML; }

    function showLoading(text) {
        document.getElementById('loadingText').textContent = text || 'กำลังดำเนินการ...';
        document.getElementById('loading').classList.add('active');
    }
    function hideLoading() { document.getElementById('loading').classList.remove('active'); }

    function showToast(message, type = 'info') {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.classList.add('toast', type);
        const icons = { success: '✅', error: '❌', info: 'ℹ️' };
        toast.innerHTML = `<span class="toast-icon">${icons[type] || 'ℹ️'}</span><span class="toast-text">${message}</span>`;
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    // ========== SESSION CHECK ==========
    window.addEventListener('DOMContentLoaded', () => {
        const session = sessionStorage.getItem('osnvc_session');
        if (session) {
            const data = JSON.parse(session);
            if (data.type === 'admin') { renderAdminDashboard(); showPage('admin-dashboard'); }
            else if (data.type === 'member' && data.user) {
                const users = getUsers();
                const user = users.find(u => u.id === data.user.id);
                if (user) { renderMemberDashboard(user); showPage('member-dashboard'); }
            }
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const activePage = document.querySelector('.page.active');
            if (activePage && activePage.id === 'page-login') {
                const adminCard = document.getElementById('adminLoginCard');
                if (adminCard.classList.contains('hidden')) {
                    const u = document.getElementById('loginUsername').value.trim();
                    const p = document.getElementById('loginPassword').value;
                    if (u && p) memberLogin();
                } else {
                    const u = document.getElementById('adminUsername').value.trim();
                    const p = document.getElementById('adminPassword').value;
                    if (u && p) adminLogin();
                }
            }
        }
    });
</script>

<!-- Loading overlay (kept from original) -->
<div class="loading-overlay" id="loading">
    <div class="loading-spinner"></div>
    <div class="loading-text" id="loadingText">กำลังดำเนินการ...</div>
</div>
<button class="back-to-top" id="backToTop" onclick="window.scrollTo({top:0,behavior:'smooth'})">↑</button>
</body>
</html>