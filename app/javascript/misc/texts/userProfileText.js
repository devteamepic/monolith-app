const userProfileTextGenerator = (fullName, email) => {
   return [
     { component: 'text', size: 'medium', textValue: 'Full name:', isHeader: true },
     { component: 'text', size: 'large', textValue: fullName, isHeader: true },
     { },
     { component: 'text', size: 'medium', textValue: 'Email:', isHeader: true },
     { component: 'text', size: 'large', textValue: email, isHeader: true },
     { },
    // { component: 'text', size: 'medium', textValue: 'Top 3 professor results:', isHeader: true },
   ]
}

export const userProfileTexts = {
    userProfileTextGenerator
}
