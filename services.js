/* ============================================================
   Junky Guy — Detailed Services Injection
   ============================================================ */
(function () {
  'use strict';

  /* SVG Icons for Services */
  var SVGS = {
    residential: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    commercial: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="22" x2="9" y2="16"/><line x1="15" y1="22" x2="15" y2="16"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/></svg>',
    furniture: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v5Z"/><path d="M5 18v2"/><path d="M19 18v2"/></svg>',
    appliance: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M5 10h14"/><circle cx="9" cy="6" r="1"/><circle cx="15" cy="15" r="3"/></svg>',
    construction: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 12-8.5 8.5a2.12 2.12 0 1 1-3-3L12 9"/><path d="M17.64 15 22 10.64"/><path d="M20.91 11.7 12.3 3.09a2.12 2.12 0 0 0-3 0L7.42 5"/><path d="m10.59 3.09 8.61 8.61"/></svg>',
    yard: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a15 15 0 0 0-9 9c0 5.5 4.5 10 9 10s9-4.5 9-10a15 15 0 0 0-9-9Z"/><path d="M12 2v19"/></svg>',
    estate: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
    garage: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/><path d="M9 21V9h6v12"/><path d="M2 7l10-4 10 4"/></svg>',
    structures: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 22V10l10-8 10 8v12"/><path d="M9 22V12h6v10"/><path d="M12 2v10"/></svg>',
    storage: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/><path d="M15 21V9"/></svg>',
    property: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>',
    sameday: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>'
  };

  /* Detailed Services List */
  var services = [
    {
      icon: 'residential',
      img: 'images/Moving Services.jpg',
      title: 'Residential Junk Removal',
      desc: 'Furniture, mattresses, appliances, household clutter, garage cleanouts, attic and basement cleanups.'
    },
    {
      icon: 'commercial',
      img: 'images/commercial-cleanout.jpg',
      title: 'Commercial Junk Removal',
      desc: 'Office cleanouts, retail spaces, warehouses, storage areas, business waste removal.'
    },
    {
      icon: 'furniture',
      img: 'images/Moving Services.jpg',
      title: 'Furniture Removal',
      desc: 'Safe removal of sofas, beds, tables, cabinets, dressers, desks, and bulky furniture.'
    },
    {
      icon: 'appliance',
      img: 'images/office-cleanout.jpg',
      title: 'Appliance Removal',
      desc: 'Refrigerators, washing machines, dryers, ovens, microwaves, AC units, and more.'
    },
    {
      icon: 'construction',
      img: 'images/debris-removal.jpg',
      title: 'Construction Debris Removal',
      desc: 'Drywall, lumber, concrete, tiles, renovation debris, and contractor cleanup.'
    },
    {
      icon: 'yard',
      img: 'images/yard-cleanup.jpg',
      title: 'Yard Waste Removal',
      desc: 'Branches, leaves, soil, fencing, garden waste, outdoor furniture, landscaping debris.'
    },
    {
      icon: 'estate',
      img: 'images/Property cleanouts.jpg',
      title: 'Estate Cleanouts',
      desc: 'Complete property cleanouts with respectful, efficient service.'
    },
    {
      icon: 'garage',
      img: 'images/office-cleanout.jpg',
      title: 'Garage & Basement Cleanouts',
      desc: 'Remove years of accumulated clutter and reclaim usable space.'
    },
    {
      icon: 'structures',
      img: 'images/debris-removal.jpg',
      title: 'Hot Tub & Shed Removal',
      desc: 'Disassembly, hauling, and complete cleanup of outdoor structures.'
    },
    {
      icon: 'storage',
      img: 'images/office-cleanout.jpg',
      title: 'Storage Unit Cleanouts',
      desc: 'Fast cleanout services for abandoned or unwanted storage units.'
    },
    {
      icon: 'property',
      img: 'images/Property cleanouts.jpg',
      title: 'Property Cleanouts',
      desc: 'Rental turnovers, foreclosures, eviction cleanups, and move-out junk removal.'
    },
    {
      icon: 'sameday',
      img: 'images/Moving Services.jpg',
      title: 'Same-Day Junk Pickup',
      desc: 'Fast scheduling for urgent junk removal needs (subject to availability).'
    }
  ];

  /* Helper to create elements */
  function el(html) {
    var t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
    });
  }

  /* Render detailed services */
  var grid = document.getElementById('servicesDetailedGrid');
  if (grid) {
    // Clear any placeholders
    grid.innerHTML = '';
    services.forEach(function (s, i) {
      var card = el(
        '<article class="card card--hover card--service reveal" style="transition-delay:' + (i * 40) + 'ms">' +
          '<div class="card__img"><img src="' + esc(s.img) + '" alt="' + esc(s.title) + '" loading="lazy"></div>' +
          '<div class="card__body">' +
            '<span class="card__icon">' + SVGS[s.icon] + '</span>' +
            '<h3 class="h3 card__title">' + esc(s.title) + '</h3>' +
            '<p class="card__desc">' + esc(s.desc) + '</p>' +
            '<a href="index.html#contact" class="svc-card-btn">' +
              'Learn More' +
              '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>' +
            '</a>' +
          '</div>' +
        '</article>'
      );
      grid.appendChild(card);
    });
  }
})();
