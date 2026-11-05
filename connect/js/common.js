let env = 'sit';
let env_check = (/studio.chubb/.test(window.location.href)) ? env = 'prod'
: (/connect-uat/.test(window.location.href)) ? env = 'uat'
: (/connect-sit/.test(window.location.href)) ? env = 'sit'
: env = 'local';

const getBaseUrl = function () {
  switch(env) {
    case 'sit': {
      return 'studio-sit.chubb.com';
      break;
    }
    case 'uat': {
      return 'studio-uat.chubb.com';
      break;
    }
    case 'prod': {
      return 'studio.chubb.com';
      break;
    }
    case 'local': {
      return 'studio-uat.chubb.com';
      break;
    }
  }
}

const setLinks = function () {
var codex_link = 'https://chubb-codex-stage.adobecqms.net/';

var api_id = document.getElementById('apistudio_link');
var codex_id = document.getElementById('codex_link')
switch(env) {
  case 'sit': {
    if(api_id || codex_id) {
      document.getElementById('codex_link').href=`${codex_link}`;
    }
    break;
  }
  case 'uat': {
    if(api_id || codex_id) {
      document.getElementById('codex_link').href=`${codex_link}`;
    }
    break;
  }
  case 'prod': {
    codex_link = 'https://codex.studio.chubb.com/na-en/home/';
    if(api_id || codex_id) {
      document.getElementById('codex_link').href=`${codex_link}`;
    }
    break;
  }
  case 'local': {
    var codex_link = 'https://chubb-codex-stage.adobecqms.net/';
    if(api_id || codex_id) {
      //console.log(codex_id);
      document.getElementById('codex_link').href=`${codex_link}`;
    }
    break;
  }
}
}

//Cookie Env Script
function call_cookie() {
  const s = document.createElement('script');
  s.src = '../../cdn.cookielaw.org/scripttemplates/otSDKStub.js';
  s.setAttribute('data-language', 'en');
  s.type = 'text/javascript';
  s.charset = 'UTF-8';
  s.setAttribute('data-domain-script',
    /studio\.chubb\.com/.test(window.location.href)
      ? 'b8757ea6-6007-4f42-8ad3-7c4f4e9633cf'
      : 'b8757ea6-6007-4f42-8ad3-7c4f4e9633cf-test');
  document.head.appendChild(s);
}

function scTop(x, y) {
  window.scrollBy(x, y);

 }
