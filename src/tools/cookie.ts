export function getCookie(cname: string): string {
  const name = cname + "="
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1)
    if (c.indexOf(name) !== -1) {
      return c.substring(name.length, c.length)
    }
  }
  return ""
}

export function setCookie(cname: string, cvalue: string, exdays = 720): any {
  const d = new Date()
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  const expires = "expires=" + d.toUTCString()
  document.cookie = cname + "=" + cvalue + "; " + expires
}
export function clearCookie(cname: string): any {
  const d = new Date()
  d.setTime(-1)
  const expires = "expires=" + d.toUTCString()
  document.cookie = cname + "=''; " + expires
}
