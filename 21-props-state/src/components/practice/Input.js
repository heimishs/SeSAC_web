export default function Input({ setData }) {
  //   console.log(setData);
  const handleChange = (e) => {
    setData((prevState) => {
      return { ...prevState, content: e.target.value };
    });
  };
  return (
    <div>
      내용:
      <input type="text" onChange={handleChange} />
    </div>
  );
}
