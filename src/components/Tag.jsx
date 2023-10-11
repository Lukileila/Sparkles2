/* eslint-disable react/prop-types */
const Tag = ({ text, color }) => {
  return (
    <span className={`px-2 py-1 rounded-full bg-${color}-500 text-white`}>
      {text}
    </span>
  );
};

export default Tag;