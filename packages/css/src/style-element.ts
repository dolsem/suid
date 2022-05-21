// This allows user to optionally specify a nonce value to be set on all <style> elements,
// in order to conform to a CSP policy and avoid some CSS injection vulnerabilities.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src#unsafe_inline_styles
let nonce: string;
export function setNonce(value: string) {
  nonce = value;
}

export function appendStyle(
  css: string | string[],
  id?: string | false
): {
  element: HTMLStyleElement;
  id: string | false | undefined;
} {
  if (Array.isArray(css)) css = css.join("\n");
  const head = document.head || document.getElementsByTagName("head")[0];
  const prevElement = id && document.getElementById(id);
  if (prevElement && prevElement instanceof HTMLStyleElement) {
    setStyleElementText(prevElement, css);
    subscribeStyle(prevElement);
    return { element: prevElement, id };
  } else {
    if (prevElement) prevElement.remove();
    const element = createStyleElement(css, id);
    subscribeStyle(element);
    head.appendChild(element);
    return { element, id };
  }
}

export function findStyle(id: string) {
  return document.getElementById(id) as HTMLStyleElement | undefined;
}

export function subscribeStyle(style: HTMLStyleElement) {
  let uses = Number(style.getAttribute("data-uses"));
  uses++;
  style.setAttribute("data-uses", uses.toString());
}

export function unsubscribeStyle(style: HTMLStyleElement) {
  let uses = Number(style.getAttribute("data-uses"));
  uses--;
  if (uses <= 0) {
    style.remove();
  } else {
    style.setAttribute("data-uses", uses.toString());
  }
}

export function setStyleElementText(element: HTMLStyleElement, text: string) {
  if ("styleSheet" in element) {
    (element as any)["styleSheet"].cssText = text;
  } else {
    element.innerText = "";
    element.appendChild(document.createTextNode(text));
  }
}

export function createStyleElement(css: string, id?: string | false) {
  const element = document.createElement("style");
  if (id) element.setAttribute("id", id);
  if (nonce) element.setAttribute("nonce", nonce);
  element.type = "text/css";
  setStyleElementText(element, css);
  return element;
}
