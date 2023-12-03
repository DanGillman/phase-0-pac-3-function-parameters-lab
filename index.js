function introduction(Aki) {
    return `Hi, my name is ${Aki}.`;
  }
  function introductionWithLanguage(Aki, JavaScript) {
    return `Hi, my name is ${Aki} and I am learning to program in ${JavaScript}.`;
  }
  function introductionWithLanguageOptional(Gracie, JavaScript) {
    return `Hi, my name is ${Gracie} and I am learning to program in ${JavaScript}.`;
  }
  function introductionWithLanguageOptional(Gracie, language = "JavaScript") {
    return `Hi, my name is ${Gracie} and I am learning to program in ${language}.`;
  }