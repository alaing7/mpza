function gtmAnalytics(name, desc) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'feEvent',
    'eventAction': 'Click',
    'eventCategory': 'Common Pathway',
    'eventLabel': `${name}`,
    'eventDesc': `${desc}`,
    'eventValue': '1'
  });
}

