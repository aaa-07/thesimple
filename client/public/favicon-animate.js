// Renders the tab icon as a miniature of the actual "living" brand mark
// used next to the wordmark in the nav/footer (see #v22-brand-logo-living-mark
// in index.html) — same note positions, same bezier paths, same easing, same
// 6s loop — just resampled onto a small canvas and pushed out as favicon
// frames, since browsers won't animate an SVG/CSS favicon live in the tab.
(function () {
  try {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var SIZE = 32;
    var VB = 120; // logical space matches the site's living-mark viewBox
    var TICK_MS = 140;
    var D = 6000; // same loop duration as the on-page mark

    var canvas = document.createElement('canvas');
    canvas.width = SIZE;
    canvas.height = SIZE;
    var ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Same six notes: start / control / end / control-back / rotation / color,
    // in the same order as the on-page markup's data-i 0..5.
    var DATA = [
      { s: [58, 58], c1: [34, 34], e: [18, 43], c2: [34, 57], rot: -20, color: '#F72555' },
      { s: [59, 57], c1: [44, 22], e: [47, 14], c2: [48, 38], rot: -10, color: '#FF7A1A' },
      { s: [60, 57], c1: [64, 20], e: [75, 17], c2: [66, 38], rot: 2, color: '#FFD11A' },
      { s: [61, 58], c1: [84, 31], e: [97, 42], c2: [78, 51], rot: 13, color: '#21C88A' },
      { s: [61, 60], c1: [85, 73], e: [91, 87], c2: [73, 70], rot: 22, color: '#2F80ED' },
      { s: [59, 61], c1: [43, 83], e: [32, 93], c2: [49, 73], rot: 30, color: '#7B4DFF' }
    ];

    function clamp(t) { return Math.max(0, Math.min(1, t)); }
    function ease(t) { return 0.5 - 0.5 * Math.cos(Math.PI * clamp(t)); }
    function cubic(p0, p1, p2, p3, t) {
      var u = 1 - t;
      return u * u * u * p0 + 3 * u * u * t * p1 + 3 * u * t * t * p2 + t * t * t * p3;
    }

    function roundRectPath(x, y, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    }

    function noteState(d, i, p) {
      var s = d.s, c1 = d.c1, e = d.e, c2 = d.c2;
      var local = (p - i * 0.010 + 1) % 1;
      var x = 60, y = 60, op = 0, sc = 0.35, rot = 0;
      if (local < 0.14) {
        var t = ease(local / 0.14);
        x = 60 + (s[0] - 60) * t; y = 60 + (s[1] - 60) * t;
        op = t; sc = 0.35 + 0.65 * t; rot = d.rot * 0.2 * t;
      } else if (local < 0.55) {
        var t2 = ease((local - 0.14) / 0.41);
        x = cubic(s[0], c1[0], c1[0], e[0], t2); y = cubic(s[1], c1[1], c1[1], e[1], t2);
        op = 1; sc = 1; rot = d.rot * (0.2 + 0.8 * t2);
      } else if (local < 0.87) {
        var t3 = ease((local - 0.55) / 0.32);
        x = cubic(e[0], c2[0], c2[0], 60, t3); y = cubic(e[1], c2[1], c2[1], 60, t3);
        op = 1 - 0.82 * t3; sc = 1 - 0.48 * t3; rot = d.rot * (1 - 0.65 * t3);
      } else {
        var t4 = ease((local - 0.87) / 0.13);
        x = 60; y = 60; op = 0.18 * (1 - t4); sc = 0.52 - 0.28 * t4; rot = d.rot * 0.35;
      }
      return { x: x, y: y, op: op, sc: sc, rot: rot };
    }

    function drawFrame(p) {
      ctx.clearRect(0, 0, SIZE, SIZE);

      // dark tile so the icon still reads on light tab bars — the on-page
      // mark itself has no backdrop, it just sits on the dark nav
      roundRectPath(0, 0, SIZE, SIZE, 7);
      ctx.fillStyle = '#07070a';
      ctx.fill();

      ctx.save();
      ctx.scale(SIZE / VB, SIZE / VB);

      DATA.forEach(function (d, i) {
        var n = noteState(d, i, p);
        if (n.op <= 0.002) return;
        ctx.save();
        ctx.globalAlpha = n.op;
        ctx.translate(n.x, n.y);
        ctx.scale(n.sc, n.sc);
        ctx.rotate((n.rot * Math.PI) / 180);
        roundRectPath(-6, -6, 12, 12, 3);
        ctx.fillStyle = d.color;
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(1.8, -6); ctx.lineTo(6, -6); ctx.lineTo(6, -1.8);
        ctx.closePath();
        ctx.fillStyle = 'rgba(255,255,255,.30)';
        ctx.fill();
        ctx.restore();
      });

      var resolve = ease(clamp((p - 0.59) / 0.20));
      var leave = ease(clamp((p - 0.90) / 0.10));
      var haloOpacity = 0.76 * resolve * (1 - 0.85 * leave);
      var haloScale = 0.78 + 0.22 * resolve;
      var coreOpacity = resolve * (1 - 0.70 * leave);
      var coreScale = 0.82 + 0.18 * resolve;

      if (haloOpacity > 0.01) {
        ctx.save();
        ctx.globalAlpha = haloOpacity;
        ctx.translate(60, 60);
        ctx.scale(haloScale, haloScale);
        ctx.filter = 'blur(6px)';
        ctx.beginPath();
        ctx.arc(0, 0, 21, 0, Math.PI * 2);
        ctx.fillStyle = '#FFD764';
        ctx.fill();
        ctx.restore();
      }

      if (coreOpacity > 0.01) {
        ctx.save();
        ctx.globalAlpha = coreOpacity;
        ctx.translate(60, 60);
        ctx.scale(coreScale, coreScale);
        ctx.translate(-60, -60);
        roundRectPath(43, 43, 34, 34, 8);
        var grad = ctx.createLinearGradient(43, 43, 77, 77);
        grad.addColorStop(0, '#fffef9');
        grad.addColorStop(1, '#ffe58a');
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.strokeStyle = '#F2C94C';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(68, 43); ctx.lineTo(77, 43); ctx.lineTo(77, 52);
        ctx.closePath();
        ctx.fillStyle = '#FFE790';
        ctx.fill();
        ctx.restore();
      }

      ctx.restore();
      return canvas.toDataURL('image/png');
    }

    var link = document.querySelector('link[rel="icon"]');
    var start = performance.now();
    var timer = null;

    function tick() {
      var p = ((performance.now() - start) % D) / D;
      var next = document.createElement('link');
      next.rel = 'icon';
      next.type = 'image/png';
      next.href = drawFrame(p);
      document.head.appendChild(next);
      if (link && link.parentNode) link.parentNode.removeChild(link);
      link = next;
    }

    function play() {
      if (timer) return;
      tick();
      timer = setInterval(tick, TICK_MS);
    }
    function pause() {
      if (!timer) return;
      clearInterval(timer);
      timer = null;
    }

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) pause(); else play();
    });

    if (!document.hidden) play();
  } catch (e) {
    // leave the static favicon.svg in place
  }
})();
