import { useEffect, useState } from "react";

function useScrolled(offset = 0): boolean {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > offset);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);
  return isScrolled;
}

export default useScrolled;
