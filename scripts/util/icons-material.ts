const singleDigitNumbers = [
  "Zero",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
];
const twoDigitNumbers1 = [
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
];

export function normalizeFileName(fileName: string) {
  fileName = fileName
    .replace(/_([0-9]+)px\.svg/, ".js")
    .replace(/(^.)|(_)(.)/g, (match, p1, p2, p3) => (p1 || p3).toUpperCase());

  if (fileName.startsWith("3dRotation")) {
    return `ThreeD${fileName.slice(2)}`;
  }

  if (fileName.startsWith("3p")) {
    return `ThreeP${fileName.slice(2)}`;
  }

  if (fileName.startsWith("30fps")) {
    return `ThirtyFps${fileName.slice(5)}`;
  }
  if (fileName.startsWith("60fps")) {
    return `SixtyFps${fileName.slice(5)}`;
  }
  if (fileName.startsWith("360")) {
    return `ThreeSixty${fileName.slice(3)}`;
  }
  if (/\dk/.test(fileName)) {
    return `${singleDigitNumbers[Number(fileName[0])]}K${fileName.slice(2)}`;
  }

  if (/^\dmp/.test(fileName)) {
    return `${singleDigitNumbers[Number(fileName[0])]}M${fileName.slice(2)}`;
  }
  if (/^1\dmp/.test(fileName)) {
    return `${twoDigitNumbers1[Number(fileName[0])]}M${fileName.slice(3)}`;
  }
  if (/^2\dmp/.test(fileName)) {
    return `Twenty${singleDigitNumbers[Number(fileName[0])]}M${fileName.slice(
      3
    )}`;
  }

  if (fileName.startsWith("1x")) {
    return `TimesOne${fileName.slice(2)}`;
  }

  if (fileName.startsWith("3g")) {
    return `ThreeG${fileName.slice(2)}`;
  }
  if (fileName.startsWith("4g")) {
    return `FourG${fileName.slice(2)}`;
  }
  if (fileName.startsWith("5g")) {
    return `FiveG${fileName.slice(2)}`;
  }

  return fileName;
}
