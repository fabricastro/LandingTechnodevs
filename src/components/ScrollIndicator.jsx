import { HiChevronDown } from 'react-icons/hi';

export default function ScrollIndicator() {
  const handleScroll = () => {
    const targetSection = document.getElementById('splash-content');
    if (targetSection) {
      const rect = targetSection.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetPosition = rect.bottom + scrollTop - 100;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <button
      onClick={handleScroll}
      className="scroll-indicator mt-2 flex items-center justify-center cursor-pointer group"
      aria-label="Scroll hacia abajo"
    >
      <HiChevronDown className="w-8 h-8 text-white opacity-70 group-hover:opacity-100 transition-all duration-300 chevron-single" />
    </button>
  );
} 