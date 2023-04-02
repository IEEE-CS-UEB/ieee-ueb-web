const dissectPathname = (fullAstroPathname) => {
  const langPathname =
    fullAstroPathname.length > 3
      ? fullAstroPathname.replace(/(?<!^)(\/\w+)+\/\w+$|(?<!^)\/\w+$/gm, "")
      : fullAstroPathname;
  return { fullAstroPathname, langPathname };
};

export { dissectPathname };
