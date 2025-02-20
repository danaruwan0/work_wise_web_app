import './styles.css';

export default function InputField({ color, width, height, border, borderColor, placeholder }) {
  return (
    <div>
      <input className='text-fild'
        type="text"
        placeholder={placeholder}
        style={{
          color: color,
          width: width,
          height: height,
          border: border,
          borderColor: borderColor,

        }}
      />
    </div>
  );
}
