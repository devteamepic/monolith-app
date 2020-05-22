export const profItemPreviewTextGenerator = (notFullName, university, degreeShort) => {
  return [
    { component: 'text', size: 'small', textValue: notFullName, isHeader: true },
    { },
    { component: 'text', size: 'small', textValue: university, isHeader: true },
    { },
    { component: 'text', size: 'small', textValue: degreeShort, isHeader: true },
  ]
}

export const profItemFullTextGenerator = (fullName, email, article, degree) => {
  return [
    { component: 'text', size: 'small', textValue: 'Full name:', isHeader: true },
    { component: 'text', size: 'medium', textValue: fullName, isHeader: true },
    { },
    { component: 'text', size: 'small', textValue: 'Email:', isHeader: true },
    { component: 'text', size: 'medium', textValue: email, isHeader: true },
    { },
    { component: 'text', size: 'small', textValue: 'Related article:', isHeader: true },
    { component: 'text', size: 'medium', textValue: article, isHeader: true },
    { },
    { component: 'text', size: 'small', textValue: 'Full degree:', isHeader: true },
    { component: 'text', size: 'medium', textValue: degree, isHeader: true },
  ]
}
