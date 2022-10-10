function removeTags(str) {
  if ((str === null) || (str === '') || (str === undefined))
      return false;
  else
      str = str.toString();

  // Regular expression to identify HTML tags in
  // the input string. Replacing the identified
  // HTML tag with a null string.
  return str.replace( /(<([^>]+)>)/ig, '');
}

export default removeTags;
