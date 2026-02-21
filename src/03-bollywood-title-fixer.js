/**
 * 🎬 Bollywood Movie Title Fixer
 *
 * Pappu ne ek movie database banaya hai lekin usne saare titles galat type
 * kar diye - kuch ALL CAPS mein, kuch all lowercase mein, kuch mein extra
 * spaces hain. Tu fix kar de titles ko proper Title Case mein!
 *
 * Rules:
 *   - Extra spaces hatao: leading, trailing, aur beech ke multiple spaces ko
 *     single space banao
 *   - Har word ka pehla letter uppercase, baaki lowercase (Title Case)
 *   - EXCEPTION: Chhote words jo Title Case mein lowercase rehte hain:
 *     "ka", "ki", "ke", "se", "aur", "ya", "the", "of", "in", "a", "an"
 *     LEKIN agar word title ka PEHLA word hai toh capitalize karo
 *   - Hint: Use trim(), split(), map(), join(), charAt(), toUpperCase(),
 *     toLowerCase(), slice()
 *
 * Validation:
 *   - Agar input string nahi hai, return ""
 *   - Agar string trim karne ke baad empty hai, return ""
 *
 * @param {string} title - Messy Bollywood movie title
 * @returns {string} Cleaned up Title Case title
 *
 * @example
 *   fixBollywoodTitle("  DILWALE   DULHANIA   LE   JAYENGE  ")
 *   // => "Dilwale Dulhania Le Jayenge"
 *
 *   fixBollywoodTitle("dil ka kya kare")
 *   // => "Dil ka Kya Kare"
 */
export function fixBollywoodTitle(title) {
  if (typeof title !== "string") return "";
  let filter1 = title.trim();
  if (filter1.length == 0) {
    return "";
  }
  let words = title.split(" ");
  let filteredWords1 = words.filter((word) => word.length > 0);
  let filteredWords2 = filteredWords1.map((word, index) => {
    let flag = false;
    if (
      word == "ka" ||
      word == "ki" ||
      word == "ke" ||
      word == "se" ||
      word == "aur" ||
      word == "ya" ||
      word == "the" ||
      word == "of" ||
      word == "in" ||
      word == "a" ||
      word == "an"
    ) {
      flag = true;
    }
    if (!flag || (flag && index == 0))
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    else {
      return word;
    }
  });
  return filteredWords2.join(" ");
}
