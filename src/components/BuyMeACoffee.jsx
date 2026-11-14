import { motion } from 'framer-motion';

const BuyMeACoffee = ({ className = '' }) => {
  return (
    <motion.a
      href="https://www.buymeacoffee.com/sahilcodelab"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.96 }}
      aria-label="Buy me a coffee"
      className={`inline-flex items-center justify-center gap-2.5 h-[54px] px-6 rounded-xl bg-[#FFDD00] text-[#000000] border-2 border-[#000000] shadow-lg hover:shadow-xl transition-shadow no-underline select-none ${className}`}
      style={{ fontFamily: "'Cookie', cursive" }}
    >
      <span className="text-2xl leading-none" role="img" aria-hidden="true">
        ☕
      </span>
      <span className="text-[28px] leading-none font-normal whitespace-nowrap pt-0.5">
        Buy me a coffee
      </span>
    </motion.a>
  );
};

export default BuyMeACoffee;
