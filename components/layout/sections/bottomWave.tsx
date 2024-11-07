// const BottomWave = () => {
//   return (
//     <div className="absolute  -bottom-1 left-0 w-full overflow-hidden leading-[0]">
//       <svg
//         className="w-full h-auto dark:fill-[#e94f00] fill-[#e94f00] transform scale-y-[-1]"
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 1440 160"
//       >
//         <path d="M0,96L48,106.7C96,117,192,139,288,160C384,181,480,203,576,192C672,181,768,139,864,122.7C960,107,1056,117,1152,138.7C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
//       </svg>
//     </div>
//   );
// };

// export default BottomWave;

const BottomWave = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
      <svg
        className="w-full h-[100px] rotate-180 dark:fill-[#e94f00] fill-[#e94f00]" // Rotation de 180 degrés pour inverser l'onde
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path d="M0,96L48,106.7C96,117,192,139,288,160C384,181,480,203,576,192C672,181,768,139,864,122.7C960,107,1056,117,1152,138.7C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
    </div>
  );
};

export default BottomWave;
