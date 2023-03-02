import { MaybeHexString } from 'aptos';

/** Convert string to hex-encoded utf-8 bytes. */
export const stringToHex = (text: string) => {
  const encoder = new TextEncoder();
  const encoded = encoder.encode(text);
  return Array.from(encoded, (i) => i.toString(16).padStart(2, '0')).join('');
};

export const walletAddressEllipsis = (address: string | undefined) => {
  if (!address) {
    return '';
  }
  return address.slice(0, 4) + '...' + address.slice(-6);
};

export const ellipsisInMiddle = (text: string | undefined, prefix = 6, suffix = 4) => {
  if (text === undefined) return undefined;
  if (prefix + suffix >= text.length) return text;
  return `${text.slice(0, prefix)}...${text.slice(text.length - suffix, text.length)}`;
};

export const addDays = (date: Date, days: number) => {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export const isValidUrl = (value: string) => {
  return /^(?:(?:(?:https):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
    value
  );
};

export const txExplorerUrl = (txHash: MaybeHexString) =>
  `https://tracemove.io/transaction/${txHash}`;

export const dateFormat = (date: Date) => {
  return `${date.toLocaleString('en-US', { month: 'short' })} ${date.toLocaleString('en-US', {
    day: 'numeric'
  })} ${date.toLocaleString('en-US', {
    year: 'numeric'
  })}, ${date.getHours().toString().padStart(2, '0')}:${date
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;
};

export const fetcher = (apiURL: string) => fetch(apiURL).then((res) => res.json());
