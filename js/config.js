/* ==========================================================================
   KEME INTERIOR DESIGN — STATIC SITE CONFIG
   --------------------------------------------------------------------------
   This standalone site renders directly from js/data.js. It does not call the
   previous template's Supabase project or its browser-only admin/CMS overlay.
   ========================================================================== */
(function () {
  'use strict';

  window.SITE_CONFIG = {
    cms: false,
    admin: false,
    realtime: false,
    ghost: { taps: 5, windowMs: 60000 }
  };

  window.SiteSupabase = null;
})();
