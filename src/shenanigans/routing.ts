const dissectPathname = (fullAstroPathname) => {
  const langPathname =
    fullAstroPathname.length > 3
      ? fullAstroPathname.replace(/(?<!^)(\/\w+)+\/\w+$|(?<!^)\/\w+$/gm, "")
      : fullAstroPathname;
  const lang = langPathname.replace(/\//gm, '');
  return { fullAstroPathname, langPathname, lang };
};

export { dissectPathname };
