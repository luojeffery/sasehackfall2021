function parse(link) {
  let url = link.toLowerCase();
  let xs = [
    /* 00 */ having_ip_address(url),
    /* 01 */ url_length(url),
    /* 02 */ shortening_service(url),
    /* 03 */ having_at_symbol(url),
    /* 04 */ double_slash_redirecting(url),
    /* 05 */ prefix_suffix(url),
    rand(), /* 06 */ // having_sub_domain(url),
    /* 07 */ url_of_anchor(url),
    /* 08 */ domain_registeration_length(url),
    /* 09 */ favicon(url),
    /* 10 */ port(url),
    /* 11 */ https_token(url),
    /* 12 */ request_url(url),
    /* 13 */ sslfinal_state(url),
    /* 14 */ links_in_tags(url),
    /* 15 */ sfh(url),
    /* 16 */ submitting_to_email(url),
    /* 17 */ abnormal_url(url),
    /* 18 */ redirect(url),
    /* 19 */ on_mouseover(url),
    rand(), /* 20 */ // rightclick(url),
    rand(), /* 21 */ // popupwindow(url),
    rand(), /* 22 */ // iframe(url),
    rand(), /* 23 */ // age_of_domain(url),
    rand(), /* 24 */ // dns(url),
    rand(), /* 25 */ // web_traffic(url),
    rand(), /* 26 */ // page_rank(url),
    rand(), /* 27 */ // google_index(url),
    rand(), /* 28 */ // links_pointing_to_page(url),
    rand(), /* 29 */ // statistical_report(url)
  ];
  return xs;
}

// 00:
function having_ip_address(url) {
  let regex = /^(\d{1,3}\.){3,3}\d{1,3}$/;
  let domain = (new URL(url)).hostname;
  return (regex.test(domain) ? -1 : 1);
}
// 01:
function url_length(url) {
  let len = url.length;
  if (len < 54) {
    return 1;
  } else if (len <= 75) {
    return 0;
  } else {
    return -1;
  }
}
// 02:
function shortening_service(url) {
  let regex = /(bit\.ly|bitly|tinyurl)/;
  return (regex.test(url) ? -1 : 1);
}
// 03:
function having_at_symbol(url) {
  let regex = /@/;
  return (regex.test(url) ? -1 : 1);
}
// 04:
function double_slash_redirecting(url) {
  return (url.lastIndexOf('//') > 7 ? -1 : 1);
}
// 05:
function prefix_suffix(url) {
  let regex = /-/;
  let domain = (new URL(url)).hostname;
  return (regex.test(url) ? -1 : 1);
}
// 06: function having_sub_domain(url) { }
// 07:
function url_of_anchor(url) {
  const selection = [1, 1, 1, 1, 1, 1, 1, 0, 0 ,-1];
  return selection[Math.floor(Math.random() * 10)];
}
// 08:
function domain_registeration_length(url) {
  const selection = [-1, -1, -1, 1, 1, 1, 1, 1, 1, 1];
  return selection[Math.floor(Math.random() * 10)];
}
// 09:
function favicon(url) {
  const selection = [-1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return selection[Math.floor(Math.random() * 10)];
}
// 10:
function port(url) {
  const selection = [-1, -1, 1, 1, 1, 1, 1, 1, 1, 1];
  return selection[Math.floor(Math.random() * 10)];
}
// 11:
function https_token(url) {
  let regex = /https/
  let domain = (new URL(url)).hostname;
  return (regex.test(url) ? -1 : 1);
}
// 12:
function request_url(url) {
  const selection = [1, 1, 1, 1, 1, 1, 0, 0, -1 ,-1];
  return selection[Math.floor(Math.random() * 10)];
}
// 13:
function sslfinal_state(url) {
  if (url.startsWith("https:"))
    return 1;
  else if (url.startsWith("http:"))
    return 0;
  else
    return -1;
}
// 14:
function links_in_tags(url) {
  const selection = [1, 1, 1, 1, 1, 1, 1, 1, 0 ,-1];
  return selection[Math.floor(Math.random() * 10)];
}
// 15:
function sfh(url) {
  const selection = [1, 1, 1, 1, 1, 1, 1, 1, 0 ,-1];
  return selection[Math.floor(Math.random() * 10)];
}
// 16:
function submitting_to_email(url) {
  if (url.includes("mail") || url.includes("mailto"))
    return -1;
  return 1;
}
// 17:
function abnormal_url(url) {
  let check = (new URL(url).hostname);
  if (!url.includes(check))
    return -1;
  return 1;
}
// 18:
function redirect(url) {
  if (url.startsWith("http:")) {
    if (url.lastIndexOf("//") > 5)
      return -1;
    return 0;
  }
  else if (url.startsWith("https:")) {
    if (url.lastIndexOf("//") > 6)
      return -1;
    return 0;
  }
}
// 19:
function on_mouseover(url) {
  const selection = [1, 1, 1, 1, 1, 1, 1, 1, -1 ,-1];
  return selection[Math.floor(Math.random() * 10)];
}
// 20: function rightClick(url) { }
// 21: function popupwidnow(url) { }
// 22: function iframe(url) { }
// 23: function age_of_domain(url) { }
// 24: function dns(url) { }
// 25: function web_traffic(url) { }
// 26: function page_rank(url) { }
// 27: function google_index(url) { }
// 28: function links_pointing_to_page(url) { }
// 29: function statistical_report(url) { }

function rand() {
  return (Math.random() < 0.5 ? -1 : 1);
}