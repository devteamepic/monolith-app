export const fileItemTextGenerator = (fileName, fileSize) => {
  return [
    { component: 'text', size: 'small', textValue: 'File name:', isHeader: true },
    { component: 'text', size: 'medium', textValue: fileName, isHeader: true },
    { },
    { component: 'text', size: 'small', textValue: 'File size:', isHeader: true },
    { component: 'text', size: 'medium', textValue: fileSize, isHeader: true },
  ]
}
