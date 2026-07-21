/* ============================================================
   Junky Guy — Interactivity
   ============================================================ */
(function () {
  'use strict';

  /* Current Year */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* Nav scroll state */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (window.scrollY > 8) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mobile menu */
  var toggle = document.getElementById('navToggle');
  var mobile = document.getElementById('navMobile');
  if (toggle && mobile) {
    toggle.addEventListener('click', function () {
      var open = !mobile.hidden;
      mobile.hidden = open;
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
    });
    mobile.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobile.hidden = true;
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  /* Icon library (SVG strings) */
  var I = {
    home: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    building: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="22" x2="9" y2="16"/><line x1="15" y1="22" x2="15" y2="16"/><line x1="9" y1="16" x2="15" y2="16"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/></svg>',
    couch: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v5Z"/><path d="M5 18v2"/><path d="M19 18v2"/></svg>',
    hammer: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 12-8.5 8.5a2.12 2.12 0 1 1-3-3L12 9"/><path d="M17.64 15 22 10.64"/><path d="M20.91 11.7 12.3 3.09a2.12 2.12 0 0 0-3 0L7.42 5"/><path d="m10.59 3.09 8.61 8.61"/></svg>',
    check: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    map: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>'
  };

  /* Data */
  var services = [
    { icon: 'home', title: 'Residential Hauling', desc: 'Complete household decluttering, including basement, attic, and garage cleanouts, estate cleanups, and appliance removal.' },
    { icon: 'building', title: 'Commercial Cleanouts', desc: 'Disposal solutions for retail stores, offices, warehouse cleanouts, property management turnover, and business relocations.' },
    { icon: 'couch', title: 'Appliance & Furniture', desc: 'Eco-conscious haul away of heavy couches, mattresses, refrigerators, stoves, and electronics from anywhere in your space.' },
    { icon: 'hammer', title: 'Construction & Yard Debris', desc: 'Swift post-construction cleanups (wood, drywall, tiling) and yard waste removal (branches, leaves, landscaping debris).' }
  ];

  var plans = [
    { name: 'Single Item / Small Load', price: '$49', features: ['Single furniture items or boxes', 'Perfect for small quick pickups', 'Local disposal & recycling fee included', 'Curbside loading option'], featured: false },
    { name: 'Medium / Standard Load', price: '$99', features: ['Multiple furniture pieces', 'Up to 1/4 truckload volume', 'Quick 15-minute load time', 'Full cleanup sweep included'], featured: true }
  ];

  var areas = [
    { name: 'New Jersey', img: 'residential.jpg', blurb: 'Serving residential and business properties across North, Central, and South Jersey.' },
    { name: 'New York', img: 'garage.jpg', blurb: 'Fast, efficient estate and commercial cleanups throughout New York City and suburbs.' },
    { name: 'Philadelphia', img: 'junk-pick.png', blurb: 'Affordable junk removal solutions across Greater Philadelphia and surrounding counties.' }
  ];


  /* Helpers */
  function el(html) {
    var t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]; }); }

  /* Render services */
  var sg = document.getElementById('servicesGrid');
  if (sg) services.forEach(function (s, i) {
    var card = el(
      '<article class="card card--hover reveal" style="transition-delay:' + (i * 40) + 'ms">' +
        '<span class="card__icon">' + I[s.icon] + '</span>' +
        '<h3 class="h3 card__title">' + esc(s.title) + '</h3>' +
        '<p class="card__desc">' + esc(s.desc) + '</p>' +
      '</article>'
    );
    sg.appendChild(card);
  });

  /* Render pricing */
  var pg = document.getElementById('pricingGrid');
  if (pg) plans.forEach(function (p, i) {
    var features = p.features.map(function (f) {
      return '<li>' + I.check + '<span>' + esc(f) + '</span></li>';
    }).join('');
    var badge = p.featured ? '<span class="plan__badge">Best Value</span>' : '';
    var btnClass = p.featured ? 'btn btn--primary' : 'btn btn--outline';
    var card = el(
      '<article class="card plan ' + (p.featured ? 'plan--featured' : '') + ' reveal" style="transition-delay:' + (i * 60) + 'ms">' +
        '<div class="plan__head"><h3 class="h3">' + esc(p.name) + '</h3>' + badge + '</div>' +
        '<div class="plan__price"><span class="plan__price-tag">Starting at</span><span class="plan__price-amount">' + esc(p.price) + '</span></div>' +
        '<ul class="plan__features">' + features + '</ul>' +
        '<a href="#contact" class="' + btnClass + '">Request Booking</a>' +
      '</article>'
    );
    pg.appendChild(card);
  });

  /* Render areas */
  var ag = document.getElementById('areasGrid');
  if (ag) areas.forEach(function (a, i) {
    var card = el(
      '<article class="area-card reveal" style="transition-delay:' + (i * 60) + 'ms">' +
        '<div class="area-card__img"><img src="' + a.img + '" alt="Junky Guy serving ' + esc(a.name) + '" width="1024" height="640" loading="lazy"></div>' +
        '<div class="area-card__body">' +
          '<div class="area-card__head">' + I.map + '<h3 class="h3">' + esc(a.name) + '</h3></div>' +
          '<p>' + esc(a.blurb) + '</p>' +
        '</div>' +
      '</article>'
    );
    ag.appendChild(card);
  });


  /* Reveal on scroll */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(function (n) { io.observe(n); });

  /* Contact form submission & success screen */
  var form = document.getElementById('contactForm');
  var successCard = document.getElementById('contactSuccess');
  var successName = document.getElementById('successName');
  var successDate = document.getElementById('successDate');
  var successTime = document.getElementById('successTime');
  var successReset = document.getElementById('successReset');

  if (form && successCard) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }

      // Get values
      var nameVal = form.elements['name'] ? form.elements['name'].value : 'Guest';
      var phoneVal = form.elements['phone'] ? form.elements['phone'].value : '';
      var emailVal = form.elements['email'] ? form.elements['email'].value : '';
      var addressVal = form.elements['address'] ? form.elements['address'].value : '';
      var serviceVal = form.elements['service'] ? form.elements['service'].value : '';
      var dateVal = form.elements['date'] ? form.elements['date'].value : '';
      var startVal = form.elements['startTime'] ? form.elements['startTime'].value : '';
      var endVal = form.elements['endTime'] ? form.elements['endTime'].value : '';
      var messageVal = form.elements['message'] ? form.elements['message'].value : '';

      // Format date beautifully if possible
      var displayDate = dateVal;
      if (dateVal) {
        var dObj = new Date(dateVal + 'T00:00:00');
        if (!isNaN(dObj.getTime())) {
          displayDate = dObj.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        }
      }

      // Populate success message
      if (successName) successName.textContent = nameVal;
      if (successDate) successDate.textContent = displayDate;
      if (successTime) successTime.textContent = startVal + ' - ' + endVal;

      // Submit data to FormSubmit API asynchronously
      fetch("https://formsubmit.co/ajax/tanviupadhyay68@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          "Name": nameVal,
          "Phone": phoneVal,
          "Email": emailVal,
          "Address": addressVal,
          "Service Required": serviceVal,
          "Preferred Date": displayDate,
          "Booking Time Window": startVal + " to " + endVal,
          "Message/Details": messageVal || "None"
        })
      })
      .then(function (res) { return res.json(); })
      .then(function (data) { console.log("FormSubmit success response:", data); })
      .catch(function (err) { console.error("FormSubmit error response:", err); });

      // Toggle screens
      form.style.display = 'none';
      successCard.style.display = 'flex';

      // Ensure animation triggers smoothly
      successCard.classList.add('is-visible');

      form.reset();
      if (typeof updateEndTimes === 'function') updateEndTimes();
    });

    if (successReset) {
      successReset.addEventListener('click', function () {
        successCard.style.display = 'none';
        form.style.display = ''; // Show form card again
      });
    }

    // Dynamic end time slot filtering based on selected start time
    var startTimeSelect = form.elements['startTime'];
    var endTimeSelect = form.elements['endTime'];

    var timeValues = {
      '8:00 AM': 8,
      '9:00 AM': 9,
      '10:00 AM': 10,
      '11:00 AM': 11,
      '12:00 PM': 12,
      '1:00 PM': 13,
      '2:00 PM': 14,
      '3:00 PM': 15,
      '4:00 PM': 16,
      '5:00 PM': 17,
      '6:00 PM': 18
    };

    var allEndTimes = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'];

    function updateEndTimes() {
      if (!startTimeSelect || !endTimeSelect) return;
      var selectedStart = startTimeSelect.value;
      var startHour = selectedStart ? timeValues[selectedStart] : 0;

      var currentEnd = endTimeSelect.value;
      endTimeSelect.innerHTML = '<option value="" disabled selected>Select end</option>';

      allEndTimes.forEach(function (time) {
        var endHour = timeValues[time];
        if (endHour > startHour) {
          var opt = document.createElement('option');
          opt.value = time;
          opt.textContent = time;
          endTimeSelect.appendChild(opt);
        }
      });

      if (currentEnd && timeValues[currentEnd] > startHour) {
        endTimeSelect.value = currentEnd;
      }
    }

    if (startTimeSelect && endTimeSelect) {
      startTimeSelect.addEventListener('change', updateEndTimes);
    }
  }

  /* Exclusive details FAQ accordion */
  document.querySelectorAll('details.faq-item').forEach(function (d) {
    d.addEventListener('toggle', function (e) {
      if (d.open) {
        document.querySelectorAll('details.faq-item').forEach(function (other) {
          if (other !== d) other.open = false;
        });
      }
    });
  });

  /* Dynamic QR Code Generators */
  var basePath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
  if (!basePath) basePath = '/';
  var targetContactUrl = window.location.origin + basePath + 'index.html#contact';

  // 1. Sidebar QR Code (Index page only)
  var qrImg = document.getElementById('qrCode');
  if (qrImg) {
    qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=180x180&color=2f855a&data=' + encodeURIComponent(targetContactUrl);
  }

  // 2. Floating Widget QR Code
  var floaterBtn = document.getElementById('qrFloaterBtn');
  var floaterCard = document.getElementById('qrFloaterCard');
  var floaterClose = document.getElementById('qrFloaterClose');
  var floaterQrImg = document.getElementById('qrFloaterCode');

  if (floaterBtn && floaterCard) {
    if (floaterQrImg) {
      floaterQrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=180x180&color=2f855a&data=' + encodeURIComponent(targetContactUrl);
    }

    // Toggle open/close
    floaterBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var isHidden = floaterCard.hasAttribute('hidden');
      if (isHidden) {
        floaterCard.removeAttribute('hidden');
      } else {
        floaterCard.setAttribute('hidden', '');
      }
    });

    if (floaterClose) {
      floaterClose.addEventListener('click', function (e) {
        e.stopPropagation();
        floaterCard.setAttribute('hidden', '');
      });
    }

    // Close when clicking outside the widget card
    document.addEventListener('click', function (e) {
      if (!floaterCard.contains(e.target) && e.target !== floaterBtn && !floaterBtn.contains(e.target)) {
        floaterCard.setAttribute('hidden', '');
      }
    });
  }
})();
