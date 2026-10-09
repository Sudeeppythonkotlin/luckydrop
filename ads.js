// Ads are OFF until you fill in ADS.client (after Google AdSense approves your site).
// client example: "ca-pub-1234567890123456". Then add one slot ID per placement below.
(function () {
  var ADS = {
    client: "",
    slots: { "after-claim": "", "bottom": "", "winner": "", "picks-mid": "", "picks-bottom": "" }
  };
  if (!ADS.client) return;
  var s = document.createElement("script");
  s.async = true; s.crossOrigin = "anonymous";
  s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + ADS.client;
  document.head.appendChild(s);
  document.querySelectorAll(".ad[data-slot]").forEach(function (el) {
    var id = ADS.slots[el.dataset.slot];
    if (!id) return;
    var ins = document.createElement("ins");
    ins.className = "adsbygoogle"; ins.style.display = "block";
    ins.setAttribute("data-ad-client", ADS.client);
    ins.setAttribute("data-ad-slot", id);
    ins.setAttribute("data-ad-format", "auto");
    ins.setAttribute("data-full-width-responsive", "true");
    el.appendChild(ins);
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  });
})();
