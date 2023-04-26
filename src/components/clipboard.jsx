import { parse } from "papaparse";

function hasClipboardData(target) {
  return target && target.clipboardData;
}

export function toHtml(tsv) {
  const result = parse(tsv);
  if (result.errors.length > 0) {
    return tsv;
  }
  return `<table><tr>${result.data
    .reduce((acc, datum) => [...acc, `<td>${datum.join("</td><td>")}</td>`], [])
    .join("</tr><tr>")}</tr></table>`;
}

export function acquireText(clipboardData) {
  if (!clipboardData) {
    return undefined;
  }
}
export function acquireClipboardData(event) {
  if (hasClipboardData(event)) {
    return event.clipboardData;
  }
  if (hasClipboardData(window)) {
    return window.clipboardData;
  }
  return undefined;
}
